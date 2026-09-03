'use client';
import React, { useState } from 'react';

type TodoFormProps = {
    onAddTodo: (title: string) => void;
};

export default function TodoForm({ onAddTodo }: TodoFormProps) {
    // Local state untuk controlled unput form
    const [title, setTitle] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedTitle = title.trim();
        if (!trimmedTitle) return;

        onAddTodo(trimmedTitle);

        setTitle('');
    };
    return(
        <div className="mb-6 bg-white p-4 rounded-xl border border-gray-70">
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tambahkan tugas baru..."
                className="flex-1 bg-white"
                />
                <button
                type="submit"
                disabled={!title.trim()}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Tambah
                </button>
            </form>
        </div>
    );
}