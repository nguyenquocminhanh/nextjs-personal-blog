import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helper/posts-util";

export default function AllPostsPage(props) {
    return <Fragment>
        <Head>
            <title>All My Blogs</title>
            <meta
                name="description" 
                content="A list of all programming-related tutorials and blogs">    
            </meta>
        </Head>
        <AllPosts posts={props.posts}/>
    </Fragment>
}

export function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    }
}