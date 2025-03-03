import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate  } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import * as authService from '../src/services/authService'; // import the authservice
//posts stuff
import PostList from './components/PostList/PostList';
import PostDetails from './components/PostDetails/PostDetails';
import PostForm from './components/PostForm/PostForm';
import * as postService from './services/postService';


export const AuthedUserContext = createContext(null);

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser()); // using the method from authservice


  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };
  //===================================================================================
  //anything related to posts:
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchAllPosts = async () => {
      const postsData = await postService.index();
      setPosts(postsData);
    };
    if (user) fetchAllPosts();
  }, [user]); // we added this so when another user sign in, use effect again because another user 

  //delete post
  const handleDeletePost = async (postId) => {
    // Call upon the service function:
    const deletedPost = await postService.deletePost(postId);
    // Filter state using deletedpost._id:
    setPosts(posts.filter((post) => post._id !== deletedPost._id));
    // Redirect the user:
    navigate('/posts');
  };

  //update post
  const handleUpdatePost = async (postId, postFormData) => {
    const updatedPost = await postService.update(postId, postFormData);

    setPosts(posts.map((post) => (postId === post._id ? updatedPost : post)));

    navigate(`/posts/${postId}`);
  }

  const handleAddPost = async (formData) => {
    const newPost = await postService.create(formData)
    const newPostList = [ newPost, ...posts];

    setPosts(newPostList)
    navigate('/posts');
  };


  //===================================================================================

  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
          {user ? (
            //protected routes
            <>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/posts" element={<PostList posts={posts} />} />
            <Route path="/posts/new" element={<PostForm handleAddPost={handleAddPost} />} />
            <Route path="/posts/:postId" element={<PostDetails handleDeletePost={handleDeletePost} />} />
            </>
          
          ) : (
            //public
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;


