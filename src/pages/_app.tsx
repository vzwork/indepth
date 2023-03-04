import '@/styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import type { AppProps } from 'next/app'

// declare module '@mui/material/styles' {
//   interface Palette {
//     hello: Palette['background']
//   }
// }

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      background: {
        default: '#bdc7c9',
      },
      primary: {
        main: '#3c783c',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
