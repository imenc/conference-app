import Link from "next/link";

function HomeItem(props) {
    const{ id, title, image, paragraph1, paragraph2, created_at, is_shown, user, article_cat } = props
    
    const humanReadableDate = new Date(created_at).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    const exploreLink = `/home/${id}`;
    
    return(
        <div>
            <li>
                <img src={'/' + image} alt={title} />
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div>
                        {paragraph1}
                    </div>
                    <div>
                        {paragraph2}
                    </div>
                </div>        
            </li>
        </div>
    );
}

export default HomeItem;