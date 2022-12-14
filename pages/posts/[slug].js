import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../helper/posts-util";

export default function PostDetailPage(props) {
    return <Fragment>
        <Head>
            <title>{props.post.title + ' - Minh Nguyen'}</title>
            <meta
                name="description" 
                content={props.post.excerpt}>    
            </meta>
        </Head>

        <PostContent post={props.post}/>
    </Fragment>
}

export function getStaticProps(context) {
    const { params } = context;
    const postSlug = params.slug;

    const postData = getPostData(postSlug);
    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postFilesNames = getPostsFiles();

    const slugs = postFilesNames.map(fileName => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => ({ params: {slug: slug} })),
        fallback: false  
    }
}