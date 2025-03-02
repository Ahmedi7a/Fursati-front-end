import { Link } from 'react-router-dom';

const PostList = (props) => {
    return (
        <main>
            {props.posts.map((post) => (
                <Link key={post._id} to={`/posts/${post._id}`}>
                    <article>
                        <header>
                            <h2>{post.name} is looking for a job in the feild of {post.role}</h2>
                            <p>
                                {post.author.username} posted on 
                                {new Date(post.createdAt).toLocaleDateString()}
                            </p>
                        </header>
                        <p>{post.nationality}</p>
                    </article>
                </Link>
            ))}
        </main>
    );
};

export default PostList;