import HomeList from '../components/home/home-list';
import { getAllHomes } from '../dummy-data'
import Footer from '../components/layout/footer';

function HomePage() {
    const allHomes = getAllHomes();
    return(        
        <div>
            <div>
                <HomeList items={allHomes} />
            </div>
            <Footer></Footer>            
        </div>
    );
}

export default HomePage;