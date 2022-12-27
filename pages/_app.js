import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
            </Head>
            <Component {...pageProps} />
            <Script src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js' type = "module"></Script>
            <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        </>
    )
}

export default MyApp
