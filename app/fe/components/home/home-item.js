import Link from "next/link";
import Image from 'next/image';

function HomeItem(props) {
    const{ id, title, image, paragraph1, paragraph2, created_at, is_shown, user, article_cat } = props
    
    const humanReadableDate = new Date(created_at).toLocaleString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
        
    });

    const exploreLink = `/home/${id}`;
    
    return(
        <div>
            <li>
                <Image 
                    className="card-img-top mx-auto"
                    src = {image}
                    width = {170}
                    height = {170}
                    alt = {title}
                />
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time><strong>{humanReadableDate}</strong></time>
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