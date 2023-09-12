'use client'

import { createContext, useEffect, Dispatch, useReducer } from 'react'

interface Props {
	children: React.ReactNode
}
type State = {
	theme: string | undefined
}
type Action = {
	type: 'TOGGLE_THEME'
}
/**
 *
 * @returns
 */
const getFromLocalStorage = () => {
	if (typeof window !== 'undefined') {
		const value = localStorage.getItem('theme')!
		return value || 'light'
	}
}
const initialState: State = {
	theme: getFromLocalStorage(),
}

export const ThemeContext = createContext<{
	state: State
	dispatch: Dispatch<Action>
}>({
	state: initialState,
	dispatch: () => null,
})

/**
 *
 * @param state
 * @param action
 * @returns
 */
const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'TOGGLE_THEME':
			return {
				...state,
				theme: state.theme === 'light' ? 'dark' : 'light',
			}
		default:
			return state
	}
}

/**
 *
 * @param param0
 * @returns
 */
const ThemeContextProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { theme } = state

	// /***
	//  * Toggle the theme
	//  */
	// const toggleTheme = () => {
	// 	const newTheme = theme === 'light' ? 'dark' : 'light'
	// 	setTheme(newTheme)
	// 	localStorage.setItem('theme', newTheme)
	// }

	useEffect(() => {
		localStorage.setItem('theme', theme!)
	}, [theme])

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
