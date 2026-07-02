import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Truck, Shield, Clock, HeartPulse } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
    <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
        <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'hsl(var(--primary)/0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--primary))' }}>
            <Icon size={24} />
        </div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{title}</h3>
        <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem' }}>{desc}</p>
    </div>
);

const Home = () => {
    const featuredProducts = products.slice(0, 3);

    return (
        <>
            <Hero />

            <section className="container" style={{ padding: '4rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Why Choose PharmaLite?</h2>
                    <p style={{ color: 'hsl(var(--text-muted))', maxWidth: '600px', margin: '0 auto' }}>
                        We combine technology with care to provide the best pharmacy experience possible.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <Feature icon={Truck} title="Fast Delivery" desc="Same-day delivery for orders placed before 2 PM." />
                    <Feature icon={Shield} title="100% Genuine" desc="Directly sourced from manufacturers and certified distributors." />
                    <Feature icon={Clock} title="24/7 Support" desc="Our pharmacists are available round the clock for consultation." />
                    <Feature icon={HeartPulse} title="Expert Care" desc="Personalized health tracking and medication reminders." />
                </div>
            </section>

            <section className="container" style={{ padding: '2rem 2rem 6rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                    <div>
                        <span style={{ color: 'hsl(var(--primary))', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.9rem' }}>Best Sellers</span>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Trending Products</h2>
                    </div>
                    <a href="/shop" style={{ color: 'hsl(var(--primary))', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>View All <Truck size={16} /></a>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
