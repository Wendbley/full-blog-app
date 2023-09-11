'use client'

import { createContext, useEffect, useState } from 'react'

interface Props {
	children: React.ReactNode
}
export const ThemeContext = createContext({})

/**
 *
 * @returns
 */
const getFromLocalStorage = () => {
	if (typeof window !== 'undefined') {
		const value = localStorage.getItem('theme')
		return value || 'light'
	}
}
/**
 *
 * @param param0
 * @returns
 */
const ThemeContextProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState(() => getFromLocalStorage())

    /***
     * Toggle the theme
     */
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

	useEffect(() => {
		localStorage.setItem("theme", theme!);
	  }, [theme])

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
