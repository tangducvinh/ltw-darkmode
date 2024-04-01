import { useEffect, useState } from 'react'


const useDarkMode = () => {
    const [ isDark, setIsDark ] = useState(() => localStorage.theme === 'dark')

    useEffect(() => {
        const html = window.document.documentElement
        if(isDark) {
            html.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            html.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [isDark])
       
    return [isDark, setIsDark]
}

export default useDarkMode