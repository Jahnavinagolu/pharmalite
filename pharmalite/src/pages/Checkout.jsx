import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShieldCheck, CreditCard, User, Mail, MapPin, ArrowLeft, CheckCircle, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        cardName: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvv: '',
        deliveryMethod: 'drone'
    });

    const [orderComplete, setOrderComplete] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [completedOrderTotal, setCompletedOrderTotal] = useState(0);
    const [completedOrderItems, setCompletedOrderItems] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cart.length === 0) return;

        // Generate random order ID
        const randomId = 'PL-' + Math.floor(100000 + Math.random() * 900000);
        setOrderId(randomId);
        setCompletedOrderTotal(cartTotal);
        setCompletedOrderItems([...cart]);

        // Clear cart and show completion state
        clearCart();
        setOrderComplete(true);
    };

    if (orderComplete) {
        return (
            <div className="container" style={{ paddingTop: '120px', paddingBottom: '5rem', maxWidth: '600px' }}>
                <div className="glass-panel animate-fade-in" style={{
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: 'var(--glass-shadow)'
                }}>
                    <div style={{
                        color: 'hsl(140, 70%, 50%)',
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '1.5rem'
                    }}>
                        <CheckCircle size={64} fill="rgba(34, 197, 94, 0.1)" />
                    </div>

                    <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Order Placed!</h1>
                    <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '2rem' }}>
                        Thank you for choosing PharmaLite. Your healthcare is our priority.
                    </p>

                    {/* Receipt Breakdown */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.4)',
                        borderRadius: '16px',
                        padding: '1.5rem',
                        textAlign: 'left',
                        marginBottom: '2rem',
                        border: '1px solid rgba(0, 0, 0, 0.05)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'hsl(var(--text-muted))' }}>
                            <span>Order Number</span>
                            <strong style={{ color: 'hsl(var(--text-main))' }}>{orderId}</strong>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'hsl(var(--text-muted))' }}>
                            <span>Delivery Method</span>
                            <span style={{ textTransform: 'capitalize', color: 'hsl(var(--primary))', fontWeight: 600 }}>
                                {formData.deliveryMethod === 'drone' ? '⚡ Autonomous Drone (15-30 min)' : 'Standard Courier (Same day)'}
                            </span>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ fontSize: '0.9rem', color: 'hsl(var(--text-muted))', display: 'block', marginBottom: '0.5rem' }}>Items</span>
                            {completedOrderItems.map(item => (
                                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                                    <span>{item.name} <span style={{ color: 'hsl(var(--text-muted))' }}>x{item.quantity}</span></span>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '0.75rem', fontWeight: 700, fontSize: '1.1rem' }}>
                            <span>Total Paid</span>
                            <span style={{ color: 'hsl(var(--primary))' }}>${completedOrderTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Link to="/" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                            Go Back Home
                        </Link>
                        <Link to="/shop" style={{ color: 'hsl(var(--primary))', fontWeight: 600, fontSize: '0.95rem' }}>
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '5rem' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--text-muted))', fontWeight: 600, marginBottom: '2rem', transition: 'color 0.2s' }}>
                <ArrowLeft size={16} /> Back to Shop
            </Link>

            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Checkout</h1>

            {cart.length === 0 ? (
                <div className="glass-panel" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                    <Package size={48} style={{ color: 'hsl(var(--text-muted))', opacity: 0.3, marginBottom: '1rem' }} />
                    <h3>Your cart is empty</h3>
                    <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '1.5rem' }}>Add some products before proceeding to checkout.</p>
                    <Link to="/shop" className="btn btn-primary">Browse Medicines</Link>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 400px',
                    gap: '2.5rem',
                    alignItems: 'start'
                }}>
                    {/* Checkout Form */}
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {/* Section 1: Customer Details */}
                        <div className="glass-panel" style={{ padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.7)' }}>
                            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <User size={20} color="hsl(var(--primary))" /> Customer Information
                            </h2>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'hsl(var(--text-muted))' }}>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)' }}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'hsl(var(--text-muted))' }}>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)' }}
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Delivery Details */}
                        <div className="glass-panel" style={{ padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.7)' }}>
                            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <MapPin size={20} color="hsl(var(--primary))" /> Shipping Address
                            </h2>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'hsl(var(--text-muted))' }}>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)' }}
                                    placeholder="123 Health Street"
                                />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'hsl(var(--text-muted))' }}>City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)' }}
                                        placeholder="New York"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'hsl(var(--text-muted))' }}>ZIP Code</label>
                                    <input
                                        type="text"
                                        name="zip"
                                        value={formData.zip}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)' }}
                                        placeholder="10001"
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'hsl(var(--text-muted))' }}>Delivery Mode</label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <label style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        border: '2px solid',
                                        borderColor: formData.deliveryMethod === 'drone' ? 'hsl(var(--primary))' : 'rgba(0,0,0,0.06)',
                                        background: formData.deliveryMethod === 'drone' ? 'hsl(var(--primary)/0.05)' : 'white',
                                        cursor: 'pointer'
                                    }}>
                                        <input
                                            type="radio"
                                            name="deliveryMethod"
                                            value="drone"
                                            checked={formData.deliveryMethod === 'drone'}
                                            onChange={handleChange}
                                            style={{ accentColor: 'hsl(var(--primary))' }}
                                        />
                                        <div>
                                            <strong style={{ fontSize: '0.9rem', display: 'block' }}>⚡ Drone Delivery</strong>
                                            <span style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>15-30 min | Free</span>
                                        </div>
                                    </label>
                                    <label style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        border: '2px solid',
                                        borderColor: formData.deliveryMethod === 'standard' ? 'hsl(var(--primary))' : 'rgba(0,0,0,0.06)',
                                        background: formData.deliveryMethod === 'standard' ? 'hsl(var(--primary)/0.05)' : 'white',
                                        cursor: 'pointer'
                                    }}>
                                        <input
                                            type="radio"
                                            name="deliveryMethod"
                                            value="standard"
                                            checked={formData.deliveryMethod === 'standard'}
                                            onChange={handleChange}
                                            style={{ accentColor: 'hsl(var(--primary))' }}
                                        />
                                        <div>
                                            <strong style={{ fontSize: '0.9rem', display: 'block' }}>🚗 Standard courier</strong>
                                            <span style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>Same day | Free</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Payment Details */}
                        <div className="glass-panel" style={{ padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.7)' }}>
                            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <CreditCard size={20} color="hsl(var(--primary))" /> Payment Info
                            </h2>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'hsl(var(--text-muted))' }}>Name on Card</label>
                                <input
                                    type="text"
                                    name="cardName"
                                    value={formData.cardName}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)' }}
                                    placeholder="JOHN DOE"
                                />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'hsl(var(--text-muted))' }}>Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    required
                                    maxLength={19}
                                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)' }}
                                    placeholder="4111 2222 3333 4444"
                                />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'hsl(var(--text-muted))' }}>Expiry Date</label>
                                    <input
                                        type="text"
                                        name="cardExpiry"
                                        value={formData.cardExpiry}
                                        onChange={handleChange}
                                        required
                                        maxLength={5}
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)' }}
                                        placeholder="MM/YY"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'hsl(var(--text-muted))' }}>Security Code (CVV)</label>
                                    <input
                                        type="password"
                                        name="cardCvv"
                                        value={formData.cardCvv}
                                        onChange={handleChange}
                                        required
                                        maxLength={3}
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)' }}
                                        placeholder="123"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* Order Summary Sidebar */}
                    <div className="glass-panel" style={{
                        padding: '2rem',
                        position: 'sticky',
                        top: '120px',
                        border: '1px solid rgba(255, 255, 255, 0.7)'
                    }}>
                        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.5rem' }}>Order Summary</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem', maxHeight: '300px', overflowY: 'auto' }}>
                            {cart.map(item => (
                                <div key={item.id} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.name}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))' }}>Qty: {item.quantity}</div>
                                    </div>
                                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1rem', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 700 }}>
                            <span>Total</span>
                            <span style={{ color: 'hsl(var(--primary))' }}>${cartTotal.toFixed(2)}</span>
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="btn btn-primary"
                            style={{ width: '100%', justifyContent: 'center' }}
                        >
                            Order & Pay
                        </button>

                        <span style={{ display: 'block', textAlign: 'center', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', marginTop: '1rem' }}>
                            🔒 Secured 256-bit SSL transaction
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;
