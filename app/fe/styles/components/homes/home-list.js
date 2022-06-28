import HomeItem from "./home-item";

function HomeList(props){
    const { items } = props;
    return(
        <div>
        <ul>
            { items.map(home => <HomeItem/>) }
        </ul>
        </div>
    )
}