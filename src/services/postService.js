const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/posts`;

//show all
const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

   //show details
   const show = async (postId) => {
    try {
      const res = await fetch(`${BASE_URL}/${postId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  //post comment
  const createComment = async (postId, commentFormData) => {
    try {
      const res = await fetch(`${BASE_URL}/${postId}/comments`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  //delete post
  const deletePost = async (hootId) => {
    try {
      const res = await fetch(`${BASE_URL}/${hootId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };



  const create = async (postFormData) => {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  export {
    index,
    show,
<<<<<<< HEAD
    create,
=======
    createComment,
    deletePost,
>>>>>>> 14dc66c02f44518ebd2a3b2ddf847f83db112994
  }