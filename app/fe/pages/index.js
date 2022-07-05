import Home from '../components/Home';
import Layout from '../components/layout/layout';

import { getAllHomes } from '../redux/actions/homeActions';
import { wrapper } from '../redux/store';

export default function Index() {
    return(        
        <Layout>
            <Home />
        </Layout>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    await store.dispatch(getAllHomes())
})