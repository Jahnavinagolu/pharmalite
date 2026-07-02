import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your PharmaLite virtual assistant. How can I help you today?", isBot: true }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: inputValue,
            isBot: false
        };

        setMessages(prev => [...prev, userMessage]);
        const input = inputValue.toLowerCase().trim();
        setInputValue('');

        // Generate response after a short delay
        setTimeout(() => {
            let replyText = "";
            if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
                replyText = "Hi there! I am your PharmaLite virtual helper. Ask me about our delivery modes, pharmacist consultations, or product guarantees!";
            } else if (input.includes('delivery') || input.includes('speed') || input.includes('drone') || input.includes('shipping')) {
                replyText = "We offer same-day courier delivery. If you are eligible, our premium Autonomous Drone Delivery takes only 15 to 30 minutes!";
            } else if (input.includes('consult') || input.includes('pharmacist') || input.includes('doctor') || input.includes('support')) {
                replyText = "You can speak with a certified pharmacist 24/7. Call us directly at 1-800-PHARMA-LITE or email support@pharmalite.com.";
            } else if (input.includes('genuine') || input.includes('real') || input.includes('fake') || input.includes('quality')) {
                replyText = "Rest assured! 100% of our products are sourced directly from certified manufacturers and undergo vetting in certified depots.";
            } else if (input.includes('cart') || input.includes('checkout') || input.includes('pay') || input.includes('buy')) {
                replyText = "Simply add items using the '+' button on product cards, open the Cart panel in the top-right corner, and click 'Checkout'!";
            } else {
                replyText = "I see! To help you best, you can view our Shop catalog or reach our 24/7 pharmacist customer team at 1-800-PHARMA-LITE.";
            }

            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: replyText,
                isBot: true
            }]);
        }, 600);
    };

    return (
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999 }}>
            {/* Floating Action Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(250, 84, 165, 0.3)',
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 12px 28px rgba(250, 84, 165, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(250, 84, 165, 0.3)';
                    }}
                >
                    <MessageSquare size={26} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div style={{
                    width: '360px',
                    height: '480px',
                    background: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.9)',
                    borderRadius: '24px',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    animation: 'fadeIn 0.25s ease-out'
                }} className="glass-panel">
                    {/* Header */}
                    <div style={{
                        background: 'linear-gradient(135deg, hsl(var(--primary)/0.9), hsl(var(--secondary)/0.9))',
                        color: 'white',
                        padding: '1.2rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Bot size={22} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>PharmaLite Support</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <span style={{ width: '6px', height: '6px', background: '#34d399', borderRadius: '50%', display: 'inline-block' }}></span>
                                    Online Support
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{ background: 'transparent', border: 'none', color: 'white', display: 'flex', alignItems: 'center', cursor: 'pointer', opacity: 0.8 }}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div style={{
                        flex: 1,
                        padding: '1rem',
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        {messages.map(msg => (
                            <div
                                key={msg.id}
                                style={{
                                    display: 'flex',
                                    flexDirection: msg.isBot ? 'row' : 'row-reverse',
                                    alignItems: 'flex-start',
                                    gap: '8px'
                                }}
                            >
                                <div style={{
                                    width: '28px',
                                    height: '28px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: msg.isBot ? 'hsl(var(--primary)/0.1)' : 'hsl(var(--secondary)/0.1)',
                                    color: msg.isBot ? 'hsl(var(--primary))' : 'hsl(var(--secondary))'
                                }}>
                                    {msg.isBot ? <Bot size={16} /> : <User size={16} />}
                                </div>

                                <div style={{
                                    maxWidth: '75%',
                                    background: msg.isBot ? 'white' : 'hsl(var(--primary))',
                                    color: msg.isBot ? 'hsl(var(--text-main))' : 'white',
                                    padding: '0.6rem 0.9rem',
                                    borderRadius: msg.isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                                    fontSize: '0.85rem',
                                    lineHeight: '1.4',
                                    boxShadow: msg.isBot ? '0 2px 8px rgba(0,0,0,0.03)' : '0 4px 12px hsl(var(--primary)/0.2)',
                                    border: msg.isBot ? '1px solid rgba(0,0,0,0.04)' : 'none'
                                }}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Form */}
                    <form
                        onSubmit={handleSend}
                        style={{
                            padding: '1rem',
                            borderTop: '1px solid rgba(0,0,0,0.06)',
                            background: 'rgba(255,255,255,0.4)',
                            display: 'flex',
                            gap: '8px'
                        }}
                    >
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ask anything..."
                            style={{
                                flex: 1,
                                padding: '0.6rem 0.8rem',
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '12px',
                                outline: 'none',
                                fontSize: '0.85rem',
                                background: 'white'
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: 'hsl(var(--primary))',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                border: 'none',
                                transition: 'all 0.2s'
                            }}
                        >
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
