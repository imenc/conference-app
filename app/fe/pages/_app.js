import 'bootstrap/dist/css/bootstrap.css';          // + Bootstrap
import '../styles/globals.css'
import { useEffect } from "react";                  // + Bootstrap



function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");      // + Bootstrap
        import("./scripts")                         // + Custom js scripts
    }, []);
    return <Component {...pageProps} />
}

export default MyApp
