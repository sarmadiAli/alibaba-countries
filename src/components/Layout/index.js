import React, { Children } from 'react'
import Header from '../Header'
import ThemeProvider from '../ThemeProvider'

export default function Layout({ children }) {
    return (
        <ThemeProvider>
            <Header />
            <main className='main' >
                {children}
            </main>
        </ThemeProvider>
    )
}
