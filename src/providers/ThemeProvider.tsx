'use client'

import { ThemeContext } from '@/context/ThemeContext'
import { useContext, useEffect, useState } from 'react'

type Props = {
	children: React.ReactNode
}

/**
 * 
 * @param param0 
 * @returns 
 */
const ThemeProvider = ({ children }: Props) => {
	const { state } = useContext(ThemeContext)
	const { theme } = state
	const [ mounted, setMounted ] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [setMounted])
	if (mounted) {
		return <div className={theme}>{children}</div>
	}
}

export default ThemeProvider
