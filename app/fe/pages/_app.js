import 'bootstrap/dist/css/bootstrap.css';          // + Bootstrap
import '../styles/globals.css'
import { useEffect } from "react";                  // + Bootstrap
import Layout from '../components/layout/layout';



function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");      // + Bootstrap
        import("./scripts")                         // + Custom js scripts
    }, []);
    
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp
