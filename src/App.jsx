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
import * as postService from './services/postService';


export const AuthedUserContext = createContext(null);

const App = () => {
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
            <Route path="/posts/:postId" element={<PostDetails />} />
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


