import React from 'react';
import { ShieldCheck, Truck, Clock, Award, Users } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description }) => (
    <div className="glass-panel" style={{
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '1.2rem',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: '1px solid rgba(255, 255, 255, 0.7)'
    }}>
        <div style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, hsl(var(--primary)/0.2), hsl(var(--secondary)/0.2))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'hsl(var(--primary))',
            marginBottom: '0.5rem'
        }}>
            <Icon size={28} />
        </div>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'hsl(var(--text-main))' }}>{title}</h3>
        <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.95rem', lineHeight: '1.6' }}>{description}</p>
    </div>
);

const About = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '5rem' }}>
            {/* Header section */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in">
                <span style={{
                    color: 'hsl(var(--primary))',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    letterSpacing: '2px',
                    display: 'inline-block',
                    marginBottom: '0.5rem'
                }}>Our Story</span>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem' }} className="text-gradient">
                    About PharmaLite
                </h1>
                <p style={{ color: 'hsl(var(--text-muted))', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.7' }}>
                    PharmaLite is a next-generation online pharmacy platform committed to making high-quality, genuine healthcare accessible, fast, and secure. We combine advanced logistics with certified expertise.
                </p>
            </div>

            {/* Grid section */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                marginBottom: '5rem'
            }} className="animate-slide-up">
                <AboutCard
                    icon={ShieldCheck}
                    title="100% Genuine Medicine"
                    description="We source directly from licensed pharmaceutical companies and certified distributors. Every single item undergoes strict quality inspections."
                />
                <AboutCard
                    icon={Truck}
                    title="Drone Delivery Logistics"
                    description="Leveraging modern AI-driven drone delivery networks to bring vital medications to your doorstep in minutes, bypassing traffic frustrations."
                />
                <AboutCard
                    icon={Clock}
                    title="24/7 Expert Pharmacists"
                    description="Consult with certified pharmacists anytime. Get professional dosage guidelines, drug interactions warnings, and personalized customer care."
                />
            </div>

            {/* Trust & Achievements */}
            <div className="glass-panel" style={{
                padding: '3.5rem 2.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2.5rem',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.8)'
            }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))', marginBottom: '0.5rem' }}>1M+</h2>
                    <p style={{ color: 'hsl(var(--text-muted))', fontWeight: 600 }}>Happy Customers</p>
                </div>
                <div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))', marginBottom: '0.5rem' }}>99.9%</h2>
                    <p style={{ color: 'hsl(var(--text-muted))', fontWeight: 600 }}>Delivery Accuracy</p>
                </div>
                <div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))', marginBottom: '0.5rem' }}>50+</h2>
                    <p style={{ color: 'hsl(var(--text-muted))', fontWeight: 600 }}>Drone Depots</p>
                </div>
                <div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))', marginBottom: '0.5rem' }}>4.8/5</h2>
                    <p style={{ color: 'hsl(var(--text-muted))', fontWeight: 600 }}>TrustPilot Rating</p>
                </div>
            </div>
        </div>
    );
};

export default About;
