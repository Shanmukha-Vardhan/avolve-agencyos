import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    MoreHorizontal,
    Calendar,
    AlertCircle,
    CheckCircle2,
    Circle,
    Clock,
    Paperclip,
    MessageSquare,
    Filter,
    SortDesc
} from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'E-commerce Redesign',
            client: 'Nike',
            status: 'In Progress',
            priority: 'High',
            dueDate: 'Oct 24',
            members: ['JD', 'AL'],
            tags: ['Design', 'React'],
            progress: 65,
            comments: 3,
            files: 2
        },
        {
            id: 2,
            title: 'Marketing Dashboard',
            client: 'Spotify',
            status: 'Backlog',
            priority: 'Medium',
            dueDate: 'Nov 01',
            members: ['JD'],
            tags: ['Analytics'],
            progress: 0,
            comments: 1,
            files: 5
        },
        {
            id: 3,
            title: 'Mobile App MVP',
            client: 'Uber',
            status: 'Review',
            priority: 'High',
            dueDate: 'Oct 20',
            members: ['AL', 'MK', 'JD'],
            tags: ['Mobile', 'Flutter'],
            progress: 90,
            comments: 12,
            files: 8
        },
        {
            id: 4,
            title: 'Brand Identity',
            client: 'Airbnb',
            status: 'Done',
            priority: 'Low',
            dueDate: 'Oct 15',
            members: ['MK'],
            tags: ['Branding'],
            progress: 100,
            comments: 0,
            files: 1
        },
        {
            id: 5,
            title: 'SEO Optimization',
            client: 'Netflix',
            status: 'In Progress',
            priority: 'Medium',
            dueDate: 'Oct 30',
            members: ['AL'],
            tags: ['SEO'],
            progress: 45,
            comments: 5,
            files: 0
        }
    ]);

    const columns = ['Backlog', 'In Progress', 'Review', 'Done'];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Done': return <CheckCircle2 size={16} color="#10b981" />;
            case 'In Progress': return <Clock size={16} color="#3b82f6" />;
            case 'Review': return <AlertCircle size={16} color="#f59e0b" />;
            default: return <Circle size={16} color="#64748b" />;
        }
    };

    const moveProject = (id, currentStatus) => {
        const currentIndex = columns.indexOf(currentStatus);
        const nextIndex = (currentIndex + 1) % columns.length;
        const nextStatus = columns[nextIndex];

        setProjects(projects.map(p =>
            p.id === id ? { ...p, status: nextStatus } : p
        ));
    };

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.priority === filter);

    return (
        <div className="projects-page">
            <div className="projects-header">
                <div>
                    <h1 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '8px' }}>Projects</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Manage and track your ongoing projects.</p>
                </div>
                <button className="btn btn-primary" style={{ background: 'var(--primary)', color: 'white', padding: '10px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Plus size={20} />
                    New Project
                </button>
            </div>

            <div className="projects-filter-bar">
                <div className="filter-group">
                    {['All', 'High', 'Medium', 'Low'].map(f => (
                        <button
                            key={f}
                            className={`filter-btn ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f} Priority
                        </button>
                    ))}
                </div>
                <div className="filter-group">
                    <button className="filter-btn" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Filter size={16} /> Filter
                    </button>
                    <button className="filter-btn" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <SortDesc size={16} /> Sort
                    </button>
                </div>
            </div>

            <div className="kanban-board">
                {columns.map(column => (
                    <div key={column} className="kanban-column">
                        <div className="column-header">
                            <div className="column-title">
                                {getStatusIcon(column)}
                                {column}
                            </div>
                            <span className="column-count">
                                {filteredProjects.filter(p => p.status === column).length}
                            </span>
                        </div>

                        <div className="column-content">
                            <AnimatePresence>
                                {filteredProjects
                                    .filter(p => p.status === column)
                                    .map(project => (
                                        <motion.div
                                            key={project.id}
                                            layoutId={project.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="project-card"
                                            onClick={() => moveProject(project.id, project.status)}
                                        >
                                            <div className="project-tags">
                                                {project.priority === 'High' && (
                                                    <span className="tag high-priority">High Priority</span>
                                                )}
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="tag">{tag}</span>
                                                ))}
                                            </div>
                                            <h3 className="project-title">{project.title}</h3>
                                            <div className="project-client">{project.client}</div>

                                            <div className="project-progress-bar">
                                                <div
                                                    className="project-progress-fill"
                                                    style={{ width: `${project.progress}%` }}
                                                ></div>
                                            </div>

                                            <div className="project-meta">
                                                <div className="meta-left">
                                                    <div className="meta-item">
                                                        <Paperclip size={14} /> {project.files}
                                                    </div>
                                                    <div className="meta-item">
                                                        <MessageSquare size={14} /> {project.comments}
                                                    </div>
                                                </div>
                                                <div className="project-members">
                                                    {project.members.map((m, i) => (
                                                        <div key={i} className="member-avatar">{m}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
