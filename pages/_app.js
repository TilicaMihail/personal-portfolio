import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Script src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js' type = "module"></Script>
            <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        </>
    )
}

export default MyApp
