import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Notes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3050/notes')
            .then(
                (res) => setData(res.data));
    }, []);
    return (
        <div>
            <h1>Your notes</h1>
            <ul>
                {data.map((note) => (
                    <li key={note.id}>
                        {note.firstname} {note.lastname} {note.phone}{note.role} {note.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notes;