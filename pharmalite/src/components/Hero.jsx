import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`${styles.blob} ${styles.blob1}`} />
            <div className={`${styles.blob} ${styles.blob2}`} />

            <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
                <div className={`${styles.content} animate-fade-in`}>
                    <div className={`${styles.badge} animate-slide-up`}>
                        <ShieldCheck size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '4px' }} />
                        Trusted by 1 Million+ Customers
                    </div>

                    <h1 className={`${styles.title} animate-slide-up`} style={{ animationDelay: '0.1s' }}>
                        Your Health, <br />
                        Delivered Quickly.
                    </h1>

                    <p className={`${styles.subtitle} animate-slide-up`} style={{ animationDelay: '0.2s' }}>
                        Experience the future of pharmacy. Premium medicines, expert care, and lightning-fast delivery to your doorstep.
                    </p>

                    <div className={`${styles.actions} animate-slide-up`} style={{ animationDelay: '0.3s' }}>
                        <Link to="/shop" className="btn btn-primary">
                            Shop Now <ArrowRight size={20} />
                        </Link>
                        <Link to="/about" className="btn btn-secondary">
                            Learn More
                        </Link>
                    </div>
                </div>

                <div className={`${styles.imageWrapper} animate-float`}>
                    {/* Using a high-quality 3D render placeholder or illustration */}
                    <img
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/medical-delivery-drone-4384784-3640245.png"
                        alt="Medical Drone Delivery"
                        className={styles.heroImage}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
