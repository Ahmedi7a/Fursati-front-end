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
            <main className="container mx-auto p-4">
                <h1 className="text-2xl font-bold">Post Details</h1>
                <div className="border p-4 rounded shadow-md mt-4">
                    <p><strong>Name:</strong> {post.name}</p>
                    <p><strong>Email:</strong> {post.email}</p>
                    <p><strong>About:</strong> {post.about}</p>
                    <p><strong>Education:</strong> {post.education}</p>
                    <p><strong>Role:</strong> {post.role}</p>
                    <p><strong>Experience:</strong> {post.experience}</p>
                    <p><strong>Status:</strong> {post.status}</p>
                    <p><strong>Nationality:</strong> {post.nationality}</p>
                </div>
                <Link to="/posts" className="mt-4 inline-block text-blue-500">Back to Posts</Link>
            </main>
        </>
    )
}

export default PostDetails