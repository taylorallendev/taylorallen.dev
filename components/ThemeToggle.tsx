'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from 'lucide-react';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="fixed top-4 right-4 z-50 p-2 rounded-full bg-primary text-primary-foreground"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <SunIcon size={24} /> : <MoonIcon size={24} />}
        </button>
    );
}