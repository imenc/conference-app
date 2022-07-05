import HomeItem from "./home-item"

function HomeList(props) {
    const { homes } = props;    // Object destructuring

    return(
        <ul>
            { homes.map((home) => (
                <HomeItem 
                    key={home.id} 
                    id={home.id} 
                    title={home.title} 
                    image={home.image} 
                    paragraph1={home.paragraph1} 
                    paragraph2={home.paragraph2} 
                />
            ))}

        </ul>
    );
}

export default HomeList;