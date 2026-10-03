import React from 'react';
import Link from 'next/link';
import { Badge } from '@/app/components/ui/badge';
import { Todo } from'@/types/todo';

type TaskDetailCardProps = {
    todo: Todo;
};

export default function TaskDetailCard({ todo }: TaskDetailCardProps) {
    return (
        <main className="min-h-screen p-8 bg-gray-100">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <header className="mb-6 border-b pb-4 flex item-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">Detail Tugas</h1>
                    <Link
                    href="/"
                    className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-7000 px-3 py-1.5 rounded-md transition"
                    >
                        Kembali ke Daftar
                    </Link>
                </header>

                <div className="space-y-4">
                    <div>
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            ID Tugas
                        </label>
                        <div className="mt-1">
                            <Badge variant="purple" size ="default">
                                #{todo.id}
                            </Badge>
                        </div>
                    </div>

                     <div>
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Judul Tugas
                        </label>
                        <h2 className="text-xl font-bold text-dark-130 mt-0.5">{todo.title}</h2>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Status
                        </label>
                        <div className="mt-1">
                            <Badge
                                variant={todo.completed ? 'green' : 'yellow'}
                                size="sm"
                            >
                                {todo.completed ? 'Selesai' : 'Belum Selesai'}
                            </Badge>
                        </div>
                    </div>
                
                <div>
                    <label className="text-xs font-semibold text-gray-400  uppercase tracking-wider">
                        Tanggal dibuat
                    </label>
                    <p className="text-muted text-sm mt-1">{todo.createdAt}</p>
                </div>
                </div>
            </div>
        </main>
    );
}