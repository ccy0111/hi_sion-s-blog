'use client';
import { useEffect, useState } from "react";

export default function ThemeToggler() {
    // color theme state 
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('color-theme', theme);
    }, [theme]);

    // local storage 사용해서 기존 테마값 저장해놓기
    return (
        <div>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                changeTheme
            </button>
        </div>
    );
}
