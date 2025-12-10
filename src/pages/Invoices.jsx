
import React from 'react';
import {
    FileText,
    Plus,
    Search,
    Filter,
    Download,
    MoreVertical,
    CheckCircle2,
    Clock,
    AlertCircle,
    DollarSign,
    TrendingUp
} from 'lucide-react';
import '../styles/Invoices.css';

const Invoices = () => {
    const stats = [
        {
            label: 'Total Receivables',
            value: '$42,500',
            trend: '+8.2%',
            icon: DollarSign,
            color: 'var(--primary)',
            bg: 'rgba(99, 102, 241, 0.1)'
        },
        {
            label: 'Pending Invoices',
            value: '5',
            trend: '$12,800',
            icon: Clock,
            color: 'var(--warning)',
            bg: 'rgba(245, 158, 11, 0.1)'
        },
        {
            label: 'Paid This Month',
            value: '$28,400',
            trend: '+12%',
            icon: CheckCircle2,
            color: 'var(--success)',
            bg: 'rgba(16, 185, 129, 0.1)'
        }
    ];

    const invoices = [
        {
            id: 'INV-2024-001',
            client: 'TechNova Systems',
            date: 'Oct 24, 2024',
            dueDate: 'Nov 07, 2024',
            amount: '$8,500.00',
            status: 'paid',
            items: 'UI/UX Design, Frontend Dev'
        },
        {
            id: 'INV-2024-002',
            client: 'Alpha Stream',
            date: 'Oct 28, 2024',
            dueDate: 'Nov 11, 2024',
            amount: '$4,200.00',
            status: 'pending',
            items: 'Logo Design, Brand Guidelines'
        },
        {
            id: 'INV-2024-003',
            client: 'Quantum Labs',
            date: 'Oct 15, 2024',
            dueDate: 'Oct 29, 2024',
            amount: '$12,000.00',
            status: 'overdue',
            items: 'Full Stack Application'
        },
        {
            id: 'INV-2024-004',
            client: 'Blue Horizon',
            date: 'Nov 01, 2024',
            dueDate: 'Nov 15, 2024',
            amount: '$2,800.00',
            status: 'pending',
            items: 'Landing Page Optimization'
        },
        {
            id: 'INV-2024-005',
            client: 'CyberPeak',
            date: 'Oct 20, 2024',
            dueDate: 'Nov 03, 2024',
            amount: '$6,500.00',
            status: 'paid',
            items: 'Mobile App Development'
        }
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'paid': return 'status-paid';
            case 'pending': return 'status-pending';
            case 'overdue': return 'status-overdue';
            default: return '';
        }
    };

    return (
        <div className="invoices-page">
            <header className="invoice-header">
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <div style={{
                            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                            padding: '8px',
                            borderRadius: '12px',
                            display: 'flex'
                        }}>
                            <FileText color="white" size={24} />
                        </div>
                        <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>
                            Invoices
                        </h1>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        Manage your agency's billing and payments.
                    </p>
                </div>

                <button
                    className="btn"
                    style={{
                        background: 'var(--primary)',
                        padding: '12px 24px',
                        borderRadius: '12px',
                        color: 'white',
                        fontWeight: '600',
                        boxShadow: '0 4px 12px var(--primary-glow)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    <Plus size={20} />
                    Create Invoice
                </button>
            </header>

            <div className="invoice-stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="invoice-stat-card">
                        <div className="stat-icon-box" style={{ background: stat.bg, color: stat.color }}>
                            <stat.icon size={28} />
                        </div>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '4px' }}>
                                {stat.value}
                            </div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '4px' }}>
                                {stat.label}
                            </div>
                            {stat.trend && (
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: stat.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    fontWeight: '500'
                                }}>
                                    <TrendingUp size={14} />
                                    {stat.trend}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="invoice-list-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <h2 className="section-title" style={{ margin: 0 }}>Recent Invoices</h2>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <div className="glass-panel" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Search size={18} color="var(--text-muted)" />
                            <input
                                type="text"
                                placeholder="Search..."
                                style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none' }}
                            />
                        </div>
                        <button className="glass-panel" style={{ padding: '8px 12px', color: 'var(--text-muted)' }}>
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                <table className="invoice-table">
                    <thead>
                        <tr>
                            <th>INVOICE ID</th>
                            <th>CLIENT</th>
                            <th>AMOUNT</th>
                            <th>DUE DATE</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((inv) => (
                            <tr key={inv.id}>
                                <td style={{ fontFamily: 'monospace', color: 'var(--primary)' }}>{inv.id}</td>
                                <td>
                                    <div className="client-cell">
                                        <div className="client-avatar">
                                            {inv.client.substring(0, 2).toUpperCase()}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '500' }}>{inv.client}</div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{inv.items}</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ fontWeight: '600' }}>{inv.amount}</td>
                                <td style={{ color: 'var(--text-muted)' }}>{inv.dueDate}</td>
                                <td>
                                    <span className={`status-badge ${getStatusClass(inv.status)}`}>
                                        {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
                                    </span>
                                </td>
                                <td>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <button className="action-btn" title="Download">
                                            <Download size={16} />
                                        </button>
                                        <button className="action-btn" title="More">
                                            <MoreVertical size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Invoices;
