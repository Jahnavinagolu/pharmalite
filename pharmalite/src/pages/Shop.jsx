import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Filter } from 'lucide-react';

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Browse Medicines</h1>
                <p style={{ color: 'hsl(var(--text-muted))' }}>Find the right medication for your needs from our curated selection.</p>
            </div>

            <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
                {/* Categories / Filter Bar */}
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    overflowX: 'auto',
                    paddingBottom: '1rem',
                    justifyContent: 'center'
                }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: '0.6rem 1.5rem',
                                borderRadius: '50px',
                                background: activeCategory === cat ? 'hsl(var(--primary))' : 'rgba(255,255,255,0.5)',
                                color: activeCategory === cat ? 'white' : 'hsl(var(--text-muted))',
                                fontWeight: 600,
                                border: '1px solid',
                                borderColor: activeCategory === cat ? 'transparent' : 'rgba(0,0,0,0.1)',
                                transition: 'all 0.3s'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
