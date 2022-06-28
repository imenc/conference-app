import HomeList from '../components/home/home-list';
import { getAllHomes } from '../dummy-data'

function HomePage() {
    const allHomes = getAllHomes();
    return(        
        <div>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <div className="container px-4">
                    <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Header */}
            <header className="bg-primary bg-gradient text-white">
                <div className="container px-4 text-center">
                    <h1 className="fw-bolder">Welcome to Scrolling Nav</h1>
                    <p className="lead">A functional Bootstrap 5 boilerplate for one page scrolling websites</p>
                    <a className="btn btn-lg btn-light" href="#about">Start scrolling!</a>
                </div>
            </header>

            <div>
                <HomeList items={allHomes} />
            </div>
            
            
            {/* Footer */}
            <footer className="py-5 bg-dark">
                <div className="container px-4"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
            </footer>
        </div>
    );
}

export default HomePage;