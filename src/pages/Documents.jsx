
import React, { useState } from 'react';
import {
    FolderOpen,
    Search,
    Upload,
    Folder,
    FileText,
    Image as ImageIcon,
    FileCode,
    MoreVertical,
    Download,
    Share2,
    Clock,
    Star,
    Trash2
} from 'lucide-react';
import '../styles/Documents.css';

const Documents = () => {
    const [activeTab, setActiveTab] = useState('all');

    const folders = [
        { id: 1, name: 'Client Contracts', items: 12, size: '25 MB' },
        { id: 2, name: 'Design Assets', items: 145, size: '2.4 GB' },
        { id: 3, name: 'Invoices 2024', items: 48, size: '15 MB' },
        { id: 4, name: 'Project Proposals', items: 8, size: '45 MB' }
    ];

    const files = [
        { id: 1, name: 'Tesla_Contract_Signed.pdf', type: 'pdf', size: '2.4 MB', date: 'Dec 10, 2024' },
        { id: 2, name: 'Q4_Marketing_Slide.pptx', type: 'ppt', size: '14.2 MB', date: 'Dec 09, 2024' },
        { id: 3, name: 'Logo_Pack_Final.zip', type: 'zip', size: '156 MB', date: 'Dec 08, 2024' },
        { id: 4, name: 'Homepage_Mockup_v2.fig', type: 'fig', size: '45 MB', date: 'Dec 05, 2024' },
        { id: 5, name: 'Meeting_Notes_Stark.txt', type: 'txt', size: '12 KB', date: 'Dec 02, 2024' },
    ];

    const getFileIcon = (type) => {
        switch (type) {
            case 'pdf': return <FileText color="#ef4444" size={20} />;
            case 'fig': return <FileCode color="#a855f7" size={20} />;
            case 'zip': return <FolderOpen color="#eab308" size={20} />;
            case 'txt': return <FileText color="#94a3b8" size={20} />;
            case 'ppt': return <FileText color="#f97316" size={20} />;
            default: return <FileText color="#94a3b8" size={20} />;
        }
    };

    return (
        <div className="documents-page">
            <header className="documents-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                        padding: '8px',
                        borderRadius: '12px',
                        display: 'flex'
                    }}>
                        <FolderOpen color="white" size={24} />
                    </div>
                    <div>
                        <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0, lineHeight: 1 }}>
                            Documents
                        </h1>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                    <div className="glass-panel" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Search size={18} color="var(--text-muted)" />
                        <input
                            type="text"
                            placeholder="Search files..."
                            style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none' }}
                        />
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
                        <Upload size={20} />
                        Upload
                    </button>
                </div>
            </header>

            <div className="documents-content">
                <aside className="docs-sidebar">
                    <div className="storage-card">
                        <h3 style={{ fontSize: '1rem', marginBottom: '4px' }}>Storage</h3>
                        <div className="storage-bar-bg">
                            <div className="storage-bar-fill" style={{ width: '65%' }}></div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            <span>65 GB used</span>
                            <span>100 GB total</span>
                        </div>
                    </div>

                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div className={`nav-category ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>
                            <FolderOpen size={18} /> All Files
                        </div>
                        <div className={`nav-category ${activeTab === 'recent' ? 'active' : ''}`} onClick={() => setActiveTab('recent')}>
                            <Clock size={18} /> Recent
                        </div>
                        <div className={`nav-category ${activeTab === 'starred' ? 'active' : ''}`} onClick={() => setActiveTab('starred')}>
                            <Star size={18} /> Starred
                        </div>
                        <div className={`nav-category ${activeTab === 'trash' ? 'active' : ''}`} onClick={() => setActiveTab('trash')}>
                            <Trash2 size={18} /> Trash
                        </div>
                    </nav>
                </aside>

                <main className="docs-main">
                    <div className="breadcrumb">
                        <span>Documents</span>
                        <span>/</span>
                        <span className="active">Home</span>
                    </div>

                    <div className="section-label">Folders</div>
                    <div className="folders-grid">
                        {folders.map(folder => (
                            <div key={folder.id} className="folder-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <Folder size={32} className="folder-icon" fill="#fbbf24" stroke="#fbbf24" fillOpacity={0.2} />
                                    <MoreVertical size={16} color="var(--text-muted)" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: '600', marginBottom: '2px' }}>{folder.name}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                        {folder.items} items • {folder.size}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="section-label">Recent Files</div>
                    <div className="files-list">
                        {files.map(file => (
                            <div key={file.id} className="file-row">
                                <div className="file-icon-box">
                                    {getFileIcon(file.type)}
                                </div>
                                <div className="file-info">
                                    <div className="file-name">{file.name}</div>
                                    <div className="file-meta">{file.size} • {file.date}</div>
                                </div>

                                <div style={{ display: 'flex', gap: '12px', marginRight: '16px' }}>
                                    {/* Additional info or avatars could go here */}
                                </div>

                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button className="action-btn" title="Share">
                                        <Share2 size={16} />
                                    </button>
                                    <button className="action-btn" title="Download">
                                        <Download size={16} />
                                    </button>
                                    <button className="action-btn" title="More">
                                        <MoreVertical size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Documents;
