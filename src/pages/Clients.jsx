
import React, { useState } from 'react';
import {
    Building2,
    Search,
    Filter,
    Plus,
    MoreHorizontal,
    Globe,
    Mail,
    Phone,
    LayoutGrid,
    List,
    Briefcase
} from 'lucide-react';
import '../styles/Clients.css';

const Clients = () => {
    const [viewMode, setViewMode] = useState('grid');

    const clients = [
        {
            id: 1,
            name: 'Tesla Inc.',
            industry: 'Automotive / Tech',
            status: 'Active',
            logo: 'T',
            revenue: '$145,000',
            projects: 3,
            contactName: 'Elon Musk',
            contactRole: 'CEO',
            email: 'elon@tesla.com'
        },
        {
            id: 2,
            name: 'Stark Ind.',
            industry: 'Defense / Tech',
            status: 'Active',
            logo: 'S',
            revenue: '$320,000',
            projects: 5,
            contactName: 'Tony Stark',
            contactRole: 'Owner',
            email: 'tony@stark.com'
        },
        {
            id: 3,
            name: 'Cyberdyne',
            industry: 'AI / Robotics',
            status: 'Lead',
            logo: 'C',
            revenue: '$0',
            projects: 0,
            contactName: 'Miles Dyson',
            contactRole: 'Director',
            email: 'miles@cyberdyne.com'
        },
        {
            id: 4,
            name: 'Acme Corp',
            industry: 'Retail / Looney',
            status: 'Churned',
            logo: 'A',
            revenue: '$12,500',
            projects: 8,
            contactName: 'Wile E. Coyote',
            contactRole: 'Chief Planner',
            email: 'wile@acme.com'
        },
        {
            id: 5,
            name: 'Wayne Ent.',
            industry: 'Conglomerate',
            status: 'Active',
            logo: 'W',
            revenue: '$98,000',
            projects: 2,
            contactName: 'Bruce Wayne',
            contactRole: 'Chairman',
            email: 'bruce@wayne.com'
        },
        {
            id: 6,
            name: 'Massive Dynamic',
            industry: 'Science',
            status: 'Lead',
            logo: 'M',
            revenue: '$0',
            projects: 1,
            contactName: 'Nina Sharp',
            contactRole: 'COO',
            email: 'nina@massive.com'
        }
    ];

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'active': return 'status-active';
            case 'lead': return 'status-lead';
            case 'churned': return 'status-churned';
            default: return '';
        }
    };

    return (
        <div className="clients-page">
            <header className="clients-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                        padding: '8px',
                        borderRadius: '12px',
                        display: 'flex'
                    }}>
                        <Building2 color="white" size={24} />
                    </div>
                    <div>
                        <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0, lineHeight: 1 }}>
                            Clients
                        </h1>
                    </div>
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
                    Add Client
                </button>
            </header>

            <div className="clients-filters-bar">
                <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
                    <div className="glass-panel" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', width: '300px' }}>
                        <Search size={18} color="var(--text-muted)" />
                        <input
                            type="text"
                            placeholder="Search clients..."
                            style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none', width: '100%' }}
                        />
                    </div>
                    <button className="glass-panel" style={{ padding: '8px 12px', color: 'var(--text-muted)', display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <Filter size={16} />
                        Filter
                    </button>
                </div>

                <div className="view-toggles">
                    <button
                        className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                        onClick={() => setViewMode('grid')}
                    >
                        <LayoutGrid size={18} />
                    </button>
                    <button
                        className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                        onClick={() => setViewMode('list')}
                    >
                        <List size={18} />
                    </button>
                </div>
            </div>

            <div className="clients-grid">
                {clients.map(client => (
                    <div key={client.id} className="client-card">
                        <div className="card-header">
                            <div className="client-logo-wrapper">
                                {client.logo}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                                <MoreHorizontal size={20} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                                <span className={`client-status ${getStatusClass(client.status)}`}>
                                    {client.status}
                                </span>
                            </div>
                        </div>

                        <div>
                            <h3 className="client-name">{client.name}</h3>
                            <div className="client-industry">
                                <Globe size={14} />
                                {client.industry}
                            </div>
                        </div>

                        <div className="card-stats">
                            <div className="stat-item">
                                <h4>LTV Revenue</h4>
                                <p>{client.revenue}</p>
                            </div>
                            <div className="stat-item">
                                <h4>Active Projects</h4>
                                <p style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Briefcase size={14} color="var(--primary)" />
                                    {client.projects}
                                </p>
                            </div>
                        </div>

                        <div className="contact-preview">
                            <div className="contact-avatar">
                                {client.contactName.charAt(0)}
                            </div>
                            <div className="contact-info">
                                <div>{client.contactName}</div>
                                <div>{client.contactRole}</div>
                            </div>
                            <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                                <div className="action-btn" title="Email" style={{ width: '32px', height: '32px', borderRadius: '8px' }}>
                                    <Mail size={14} />
                                </div>
                                <div className="action-btn" title="Call" style={{ width: '32px', height: '32px', borderRadius: '8px' }}>
                                    <Phone size={14} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clients;
