import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css'
import { useEffect } from "react";              // Add this line



function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");  // Add this line
    }, []);
    return <Component {...pageProps} />
}

export default MyApp
