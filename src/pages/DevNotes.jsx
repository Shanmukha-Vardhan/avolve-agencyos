import React, { useState, useEffect } from 'react';

const DevNotes = () => {
    const [note, setNote] = useState('');

    useEffect(() => {
        const savedNote = localStorage.getItem('agencyos_dev_notes');
        if (savedNote) {
            setNote(savedNote);
        }
    }, []);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setNote(newValue);
        localStorage.setItem('agencyos_dev_notes', newValue);
    };

    const clearNotes = () => {
        if (window.confirm('Are you sure you want to clear your notes?')) {
            setNote('');
            localStorage.removeItem('agencyos_dev_notes');
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'monospace' }}>
            <h1>Dev Notes</h1>
            <p>A simple scratchpad for your thoughts (Auto-saved).</p>
            <textarea
                value={note}
                onChange={handleChange}
                style={{
                    width: '100%',
                    height: '60vh',
                    padding: '10px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    fontSize: '14px',
                    border: '1px solid #ccc'
                }}
                placeholder="Type your notes here..."
            />
            <button
                onClick={clearNotes}
                style={{
                    padding: '8px 16px',
                    background: '#ff4444',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                Clear Notes
            </button>
        </div>
    );
};

export default DevNotes;
