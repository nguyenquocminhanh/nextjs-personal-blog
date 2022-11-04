import classes from './hero.module.css';
import Image from 'next/image';

export default function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/avatar.jpeg" alt="An image showing Minh" width={300} height={300}/>
        </div>
        <h1>Hi, I&apos;m Minh</h1>
        <p>I blog about web development - especially frontend frameworks like Angular or React</p>
    </section>
}