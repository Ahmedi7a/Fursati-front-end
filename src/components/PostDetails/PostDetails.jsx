import * as postService from '../../services/postService';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';



const PostDetails = (props) => {

    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const user = useContext(AuthedUserContext);

    useEffect(() => {
        const fetchPost = async () => {
            const postData = await postService.show(postId);
            console.log('postData', postData);
            setPost(postData);
        };
        fetchPost();
    }, [postId]);
    //======================================


    //======================================
    if (!post) return <main>Loading...</main>;


    return (
        <>
            details jhjhjjjhjjhjjjhj
        </>
    )
}

export default PostDetails