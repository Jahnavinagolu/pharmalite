import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ShoppingCart, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const SearchModal = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const { addToCart } = useCart();
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            setQuery('');
            setResults([]);
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }
        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    }, [query]);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(25, 28, 36, 0.4)',
            backdropFilter: 'blur(15px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '10vh',
            zIndex: 1000,
            animation: 'fadeIn 0.2s ease-out'
        }} onClick={onClose}>
            <div style={{
                width: '100%',
                maxWidth: '650px',
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                borderRadius: '24px',
                padding: '1.5rem',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
                margin: '0 1rem'
            }} onClick={(e) => e.stopPropagation()} className="animate-slide-up">
                {/* Search header info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(0, 0, 0, 0.08)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                    <Search size={22} color="hsl(var(--primary))" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search for medicines, vitamins, category..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{
                            flex: 1,
                            border: 'none',
                            background: 'transparent',
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            outline: 'none',
                            color: 'hsl(var(--text-main))'
                        }}
                    />
                    <button onClick={onClose} style={{
                        background: 'rgba(0,0,0,0.05)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}>
                        <X size={18} />
                    </button>
                </div>

                {/* Results Container */}
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {query.trim() === '' ? (
                        <div style={{ textAlign: 'center', padding: '2rem 0', color: 'hsl(var(--text-muted))' }}>
                            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Popular Searches</p>
                            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                {['Wellness', 'Pain Relief', 'Sleep', 'Allergy'].map(term => (
                                    <button
                                        key={term}
                                        onClick={() => setQuery(term)}
                                        style={{
                                            padding: '0.4rem 1rem',
                                            borderRadius: '50px',
                                            background: 'white',
                                            border: '1px solid rgba(0,0,0,0.06)',
                                            fontSize: '0.85rem',
                                            color: 'hsl(var(--text-main))',
                                            fontWeight: 600,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : results.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '3rem 0', color: 'hsl(var(--text-muted))' }}>
                            No results found for "{query}"
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {results.map(prod => (
                                <div key={prod.id} style={{
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'center',
                                    background: 'white',
                                    padding: '0.75rem',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(0,0,0,0.04)',
                                    transition: 'transform 0.2s',
                                    cursor: 'pointer'
                                }} onClick={() => {
                                    addToCart(prod);
                                    onClose();
                                }}>
                                    <img src={prod.image} alt={prod.name} style={{ width: '60px', height: '60px', borderRadius: '10px', objectFit: 'cover' }} />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <h4 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>{prod.name}</h4>
                                            <span style={{ fontWeight: 700, color: 'hsl(var(--primary))' }}>${prod.price}</span>
                                        </div>
                                        <p style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))', margin: '4px 0 0 0', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {prod.description}
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', marginTop: '6px', color: '#f59e0b', fontWeight: 600 }}>
                                            <Star size={12} fill="#f59e0b" /> {prod.rating} • <span style={{ color: 'hsl(var(--text-muted))' }}>{prod.category}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
