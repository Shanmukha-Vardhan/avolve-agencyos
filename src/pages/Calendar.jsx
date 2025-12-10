
import React, { useState } from 'react';
import {
    Calendar as CalendarIcon,
    ChevronLeft,
    ChevronRight,
    Plus,
    Clock,
    Video,
    MapPin,
    MoreHorizontal
} from 'lucide-react';
import '../styles/Calendar.css';

const Calendar = () => {
    const [currentDate] = useState(new Date());

    // Mock data for the calendar grid
    const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
    const startDayOffset = 2; // Starts on a Wednesday (example)

    const events = [
        { id: 1, day: 5, title: 'Client Meeting: Tesla', type: 'meeting', time: '10:00 AM' },
        { id: 2, day: 8, title: 'Project Deadline: Apex', type: 'deadline', time: '5:00 PM' },
        { id: 3, day: 12, title: 'Team Sync', type: 'internal', time: '11:00 AM' },
        { id: 4, day: 15, title: 'Website Launch', type: 'launch', time: 'All Day' },
        { id: 5, day: 15, title: 'Post-Launch Review', type: 'internal', time: '4:00 PM' },
        { id: 6, day: 22, title: 'Discovery Call', type: 'meeting', time: '2:00 PM' },
        { id: 7, day: 28, title: 'Invoice Due: Nike', type: 'deadline', time: 'EOD' }
    ];

    const upcomingEvents = [
        {
            id: 1,
            title: 'Client Meeting: Tesla',
            date: 'Dec 05',
            time: '10:00 AM - 11:00 AM',
            type: 'meeting',
            location: 'Google Meet',
            participants: [1, 2, 3]
        },
        {
            id: 2,
            title: 'Project Deadline: Apex',
            date: 'Dec 08',
            time: '5:00 PM',
            type: 'deadline',
            location: 'Asana Board'
        },
        {
            id: 3,
            title: 'Website Launch: Horizon',
            date: 'Dec 15',
            time: '9:00 AM',
            type: 'launch',
            location: 'Production Server'
        }
    ];

    const getEventStyle = (type) => {
        switch (type) {
            case 'meeting': return { borderLeftColor: '#6366f1', background: 'rgba(99, 102, 241, 0.15)', color: '#a5b4fc' };
            case 'deadline': return { borderLeftColor: '#ef4444', background: 'rgba(239, 68, 68, 0.15)', color: '#fca5a5' };
            case 'launch': return { borderLeftColor: '#10b981', background: 'rgba(16, 185, 129, 0.15)', color: '#6ee7b7' };
            default: return { borderLeftColor: '#94a3b8', background: 'rgba(148, 163, 184, 0.15)', color: '#cbd5e1' };
        }
    };

    const renderCalendarDays = () => {
        const slots = [];

        // Empty slots for previous month
        for (let i = 0; i < startDayOffset; i++) {
            slots.push(<div key={`prev-${i}`} className="calendar-day another-month" />);
        }

        // Days of current month
        daysInMonth.forEach(day => {
            const dayEvents = events.filter(e => e.day === day);
            const isToday = day === 10; // Mock "today" as the 10th

            slots.push(
                <div key={day} className={`calendar-day ${isToday ? 'today' : ''}`}>
                    <div className="day-number">{day}</div>
                    <div className="day-events">
                        {dayEvents.map(event => (
                            <div
                                key={event.id}
                                className="event-pill"
                                style={getEventStyle(event.type)}
                                title={event.title}
                            >
                                {event.title}
                            </div>
                        ))}
                    </div>
                </div>
            );
        });

        // Fill remaining slots
        const totalSlots = 35; // 5 rows * 7 cols
        const remaining = totalSlots - slots.length;
        for (let i = 0; i < remaining; i++) {
            slots.push(<div key={`next-${i}`} className="calendar-day another-month">{i + 1}</div>);
        }

        return slots;
    };

    return (
        <div className="calendar-page">
            <header className="calendar-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                        padding: '8px',
                        borderRadius: '12px',
                        display: 'flex'
                    }}>
                        <CalendarIcon color="white" size={24} />
                    </div>
                    <div>
                        <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0, lineHeight: 1 }}>
                            Schedule
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
                    New Event
                </button>
            </header>

            <div className="calendar-wrapper">
                <div className="main-calendar">
                    <div className="calendar-nav">
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>December 2024</h2>
                        <div className="nav-controls">
                            <button className="nav-btn"><ChevronLeft size={20} /></button>
                            <button className="nav-btn" style={{ fontSize: '0.9rem', width: 'auto', padding: '0 12px' }}>Today</button>
                            <button className="nav-btn"><ChevronRight size={20} /></button>
                        </div>
                    </div>

                    <div className="weekdays-grid">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                            <div key={d} className="weekday-header">{d}</div>
                        ))}
                    </div>

                    <div className="days-grid">
                        {renderCalendarDays()}
                    </div>
                </div>

                <aside className="events-sidebar">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 className="section-title" style={{ margin: 0, fontSize: '1.2rem' }}>
                            <Clock size={18} color="var(--accent)" />
                            Upcoming
                        </h3>
                        <MoreHorizontal size={18} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                    </div>

                    <div className="upcoming-list">
                        {upcomingEvents.map(event => (
                            <div key={event.id} className="sidebar-event-card">
                                <div className="date-box">
                                    <div className="date-day">{event.date.split(' ')[1]}</div>
                                    <div className="date-month">{event.date.split(' ')[0]}</div>
                                </div>
                                <div className="event-info" style={{ flex: 1 }}>
                                    <h4>{event.title}</h4>
                                    <p><Clock size={12} /> {event.time}</p>
                                    {event.location && (
                                        <p style={{ marginTop: '2px', color: 'var(--primary)', fontWeight: '500' }}>
                                            {event.location.includes('Meet') ? <Video size={12} /> : <MapPin size={12} />}
                                            <span style={{ marginLeft: '4px' }}>{event.location}</span>
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '12px' }}>Calendars</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', cursor: 'pointer' }}>
                                <input type="checkbox" defaultChecked />
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6366f1' }}></span>
                                Meetings
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', cursor: 'pointer' }}>
                                <input type="checkbox" defaultChecked />
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></span>
                                Deadlines
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', cursor: 'pointer' }}>
                                <input type="checkbox" defaultChecked />
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
                                Launches
                            </label>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Calendar;
