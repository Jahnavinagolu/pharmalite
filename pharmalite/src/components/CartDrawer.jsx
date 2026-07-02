import React from 'react';
import { X, Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './CartDrawer.module.css';
import clsx from 'clsx';

const CartDrawer = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

    return (
        <>
            <div
                className={clsx(styles.overlay, isCartOpen && styles.open)}
                onClick={() => setIsCartOpen(false)}
            />
            <div className={clsx(styles.drawer, isCartOpen && styles.open)}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Your Cart ({cart.length})</h2>
                    <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div className={styles.items}>
                    {cart.length === 0 ? (
                        <div style={{ textAlign: 'center', marginTop: '3rem', color: 'hsl(var(--text-muted))' }}>
                            <ShoppingBag size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                            <p>Your cart is empty</p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className={styles.item}>
                                <img src={item.image} alt={item.name} className={styles.itemImage} />
                                <div className={styles.itemInfo}>
                                    <div>
                                        <div className={styles.itemName}>{item.name}</div>
                                        <div className={styles.itemPrice}>${item.price}</div>
                                    </div>
                                    <div className={styles.quantityControls}>
                                        <button
                                            className={styles.qtyBtn}
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span style={{ fontWeight: 600, minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                        <button
                                            className={styles.qtyBtn}
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className={styles.footer}>
                        <div className={styles.totalRow}>
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <Link
                            to="/checkout"
                            onClick={() => setIsCartOpen(false)}
                            className={styles.checkoutBtn}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                        >
                            Checkout <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;

