import * as postService from '../../services/postService';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import CommentForm from '../CommentForm/CommentForm';




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
    const handleAddComment = async (commentFormData) => {
        const newComment = await postService.createComment(postId, commentFormData);
        setPost({ ...post, comments: [...post.comments, newComment] });
    };

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
                {post.author && user && post.author._id === user._id && (
                    <div className="mt-4">
                        <Link to={`/posts/${post._id}/edit`} className="text-blue-500 mr-2">Edit</Link>
                        <button onClick={() => props.handleDeletePost(post._id)} className="text-red-500">Delete</button>
                    </div>
                )}
                <Link to="/posts" className="mt-4 inline-block text-blue-500">Back to Posts</Link>
                <section>
                <h2>Comments</h2>
                <CommentForm handleAddComment={handleAddComment} />

                {!post.comments.length && <p>There are no comments.</p>}

                {post.comments.map((comment) => (
                    <article key={comment._id}>
                        <header>
                            <p>
                                {comment.author.username} posted on   &nbsp; 
                                {new Date(comment.createdAt).toLocaleDateString()}
                            </p>
                        </header>
                        <p>{comment.text}</p>
                    </article>
                ))}
            </section>
            </main>
        </>
    );
}

export default PostDetails