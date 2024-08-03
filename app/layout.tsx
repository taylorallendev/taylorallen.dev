import { Manrope } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { cn } from '@/lib/utils'
import './globals.css'

const fontHeading = Manrope({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-heading',
})

const fontBody = Manrope({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
})

export default function RootLayout({ children }: any) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                'antialiased',
                fontHeading.variable,
                fontBody.variable
            )}
        >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}