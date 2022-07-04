import HomeList from '../components/home/home-list';
import Layout from '../components/layout/layout';
import { getAllHomes } from '../dummy-data'

function Index() {
    const allHomes = getAllHomes();
    return(        
        <Layout>
            <HomeList items={allHomes} />
        </Layout>
    );
}

export default Index;