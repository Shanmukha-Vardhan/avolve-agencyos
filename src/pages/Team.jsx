import React from 'react';
import { Plus, Mail, Phone } from 'lucide-react';
import '../styles/Team.css';

const Team = () => {
    const team = [
        {
            name: 'Alex Carter',
            role: 'Founder & CEO',
            initials: 'AC',
            status: 'online',
            projects: 12,
            tasks: 5
        },
        {
            name: 'Sarah Jones',
            role: 'Lead Designer',
            initials: 'SJ',
            status: 'busy',
            projects: 8,
            tasks: 14
        },
        {
            name: 'Mike Ross',
            role: 'Senior Developer',
            initials: 'MR',
            status: 'online',
            projects: 6,
            tasks: 9
        },
        {
            name: 'Emily Chen',
            role: 'Project Manager',
            initials: 'EC',
            status: 'away',
            projects: 15,
            tasks: 3
        },
        {
            name: 'David Kim',
            role: 'UX Researcher',
            initials: 'DK',
            status: 'online',
            projects: 4,
            tasks: 7
        }
    ];

    return (
        <div className="team-page">
            <header style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Team</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Manage your agency members and roles.</p>
                </div>
                <button className="btn btn-primary" style={{ background: 'var(--primary)', color: 'white', padding: '10px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Plus size={20} />
                    Invite Member
                </button>
            </header>

            <div className="team-grid">
                {team.map((member, index) => (
                    <div key={index} className="team-card">
                        <div className="member-avatar-lg">{member.initials}</div>
                        <div className="member-name">{member.name}</div>
                        <div className="member-role">{member.role}</div>

                        <div className={`member-status status-${member.status}`}>
                            <div className="status-dot"></div>
                            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                        </div>

                        <div className="member-stats">
                            <div className="stat-item">
                                <div className="stat-num">{member.projects}</div>
                                <div className="stat-desc">Projects</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-num">{member.tasks}</div>
                                <div className="stat-desc">Tasks</div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="team-card add-member-card">
                    <div className="add-icon">
                        <Plus size={32} />
                    </div>
                    <div className="member-name" style={{ color: 'var(--text-muted)' }}>Add New Member</div>
                </div>
            </div>
        </div>
    );
};

export default Team;
