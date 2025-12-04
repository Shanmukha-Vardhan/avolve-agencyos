import React from 'react';
import {
    TrendingUp,
    Users,
    Briefcase,
    DollarSign,
    ArrowUpRight,
    ArrowDownRight,
    CheckCircle2,
    Clock,
    Calendar,
    MoreHorizontal
} from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
    const stats = [
        {
            label: 'Total Revenue',
            value: '$124,500',
            trend: '+12.5%',
            isUp: true,
            icon: DollarSign,
            color: 'var(--primary)'
        },
        {
            label: 'Active Clients',
            value: '45',
            trend: '+4 new',
            isUp: true,
            icon: Users,
            color: 'var(--accent)'
        },
        {
            label: 'Active Projects',
            value: '12',
            trend: '-2 completed',
            isUp: false,
            icon: Briefcase,
            color: '#10b981'
        },
        {
            label: 'Pending Invoices',
            value: '$8,200',
            trend: 'Due soon',
            isUp: true,
            icon: Clock,
            color: '#f59e0b'
        },
    ];

    const revenueData = [40, 65, 50, 80, 60, 90, 75];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const activities = [
        {
            title: 'New project started: FinTech App',
            time: '2 hours ago',
            icon: Briefcase,
            color: '#6366f1',
            bg: 'rgba(99, 102, 241, 0.1)'
        },
        {
            title: 'Client onboarding completed: Acme Corp',
            time: '4 hours ago',
            icon: CheckCircle2,
            color: '#10b981',
            bg: 'rgba(16, 185, 129, 0.1)'
        },
        {
            title: 'Meeting scheduled with Stark Industries',
            time: 'Tomorrow at 10:00 AM',
            icon: Calendar,
            color: '#f59e0b',
            bg: 'rgba(245, 158, 11, 0.1)'
        },
        {
            title: 'New team member joined: Sarah Connor',
            time: 'Yesterday',
            icon: Users,
            color: '#ec4899',
            bg: 'rgba(236, 72, 153, 0.1)'
        }
    ];

    return (
        <div className="home-page">
            <header style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '8px', fontWeight: '700' }}>
                            Dashboard
                        </h1>
                        <p style={{ color: 'var(--text-muted)' }}>Overview of your agency's performance.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button className="glass-panel" style={{ padding: '10px 16px', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: '500' }}>
                            Last 30 Days
                        </button>
                        <button style={{ background: 'var(--primary)', padding: '10px 20px', borderRadius: '12px', color: 'white', fontWeight: '600', boxShadow: '0 4px 12px var(--primary-glow)' }}>
                            + New Project
                        </button>
                    </div>
                </div>
            </header>

            <div className="dashboard-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-header">
                            <div className="stat-icon">
                                <stat.icon size={24} />
                            </div>
                            <div className={`stat-trend ${stat.isUp ? 'trend-up' : 'trend-down'}`}>
                                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                {stat.trend}
                            </div>
                        </div>
                        <div>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="charts-grid">
                <div className="chart-card">
                    <div className="section-title" style={{ marginBottom: '0' }}>
                        <TrendingUp size={20} color="var(--primary)" />
                        Revenue Overview
                    </div>
                    <div className="chart-placeholder">
                        {revenueData.map((height, i) => (
                            <div
                                key={i}
                                className="chart-bar"
                                style={{ height: `${height}%` }}
                                data-label={days[i]}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="chart-card">
                    <div className="section-title" style={{ justifyContent: 'space-between' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Clock size={20} color="var(--accent)" />
                            Recent Activity
                        </span>
                        <MoreHorizontal size={20} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                    </div>

                    <div className="activity-list">
                        {activities.map((activity, index) => (
                            <div key={index} className="activity-item">
                                <div className="activity-icon-box" style={{ color: activity.color, background: activity.bg }}>
                                    <activity.icon size={18} />
                                </div>
                                <div className="activity-content">
                                    <h4>{activity.title}</h4>
                                    <p>{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
