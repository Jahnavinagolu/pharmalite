import React from 'react';
import { Plus, Link as LinkIcon, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <span className={styles.category}>{product.category}</span>
                <img src={product.image} alt={product.name} className={styles.image} />
            </div>

            <div className={styles.content}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 className={styles.title}>{product.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: 600, color: '#f59e0b' }}>
                        <Star size={14} fill="#f59e0b" /> {product.rating}
                    </div>
                </div>

                <p className={styles.description}>{product.description}</p>

                <div className={styles.footer}>
                    <span className={styles.price}>${product.price}</span>
                    <button
                        className={styles.addBtn}
                        onClick={() => addToCart(product)}
                        aria-label="Add to cart"
                    >
                        <Plus size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
