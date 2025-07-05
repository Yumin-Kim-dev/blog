"use client";

import {useState} from 'react';

export default function Footnote({id, text}: { id: string, text: string }) {
    const [visible, setVisible] = useState(false);

    return (
        <span
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            style={{cursor: 'pointer'}}
        >
            <sup>[{id}]</sup>
            {visible && (
                <span style={{
                    position: 'absolute',
                    background: '#333',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    marginLeft: '4px',
                    fontSize: '0.85rem',
                    whiteSpace: 'nowrap',
                    zIndex: 100
                }}>
                    {text}
                </span>
            )}
    </span>
    );
}