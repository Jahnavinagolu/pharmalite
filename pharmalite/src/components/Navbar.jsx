import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Pill, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SearchModal from './SearchModal';
import styles from './Navbar.module.css';
import clsx from 'clsx';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();
    const { cartCount, setIsCartOpen } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className={clsx(styles.navbar, isScrolled && styles.scrolled)}>
                <Link to="/" className={styles.logo}>
                    <Pill size={28} color="hsl(250, 84%, 65%)" />
                    PharmaLite
                </Link>

                <div className={styles.navLinks}>
                    <Link to="/" className={clsx(styles.link, isActive('/') && styles.active)}>Home</Link>
                    <Link to="/shop" className={clsx(styles.link, isActive('/shop') && styles.active)}>Shop</Link>
                    <Link to="/about" className={clsx(styles.link, isActive('/about') && styles.active)}>About</Link>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button className={styles.cartBtn} onClick={() => setIsSearchOpen(true)} aria-label="Search">
                        <Search size={20} color="hsl(220, 20%, 40%)" />
                    </button>
                    <button className={styles.cartBtn} onClick={() => setIsCartOpen(true)} aria-label="Cart">
                        <ShoppingBag size={20} color="hsl(220, 20%, 40%)" />
                        {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
                    </button>
                </div>
            </nav>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};

export default Navbar;

