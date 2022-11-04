import Image from "next/image";
import Link from "next/link";
import classes from './post-item.module.css';

export default function PostItem(props) {
    const { image, title, excerpt, date, slug } = props.post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPage = `/posts/${slug}`;

    return <li className={classes.post}>
        <Link href={linkPage}>
            <div className={classes.image}>
                <Image src={imagePath} alt={title} width={300} height={200} layout="responsive"/>
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <time>{formattedDate}</time>
                <p>{excerpt}</p>
            </div>
        </Link>
    </li>
}