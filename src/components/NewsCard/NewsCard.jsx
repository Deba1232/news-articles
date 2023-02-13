import { parse } from 'node-html-parser'

import './NewsCard.css'

function NewsCard({item}){
    let headline = parse(item.title.rendered).textContent;
    let author = item.parselyMeta['parsely-author'];
    let imgUrl = item.parselyMeta['parsely-image-url'];
    let excerpt = parse(item.excerpt.rendered).textContent;
    let newsUrl = item.link;

    return (
        <a href={newsUrl} target='_blank'>
        <article className='news-card'>
            <section className='news-header'>
                <h1 className='headline'>{headline}</h1>
                <h3>{author}</h3>
            </section>

            <img src={imgUrl} />
            <p className='excerpt'>{excerpt}</p>

        </article>

        </a>
    );
}

export default NewsCard