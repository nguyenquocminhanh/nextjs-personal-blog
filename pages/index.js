import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../helper/posts-util";

export default function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Minh&apos;s blog</title>
                <meta
                    name="description" 
                    content="I post about programming and web development">    
                </meta>
            </Head>

            <Hero/>
            <FeaturedPosts posts={props.posts}/>
        </Fragment>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        },
        // revalidate: 30   if data changes after deployment, we still regenerate our posts and 
        // reflect that latest data without rebuilding and redeploy
    }
}