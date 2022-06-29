import 'bootstrap/dist/css/bootstrap.css';          // + Bootstrap
import '../styles/globals.css'
import { useEffect } from "react";                  // + Bootstrap
import Layout from '../components/layout/layout';
import { wrapper, store } from '../store/store';
import { Provider } from 'react-redux';



function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");      // + Bootstrap
        import("./scripts")                         // + Custom js scripts
    }, []);
    
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default wrapper.withRedux(MyApp);
