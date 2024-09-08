import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Use 'id' to fetch or display the specific post

  return (
    <div>
      <h2>Blog Post</h2>
      <p>Viewing post with ID: {id}</p>
    </div>
  );
};

export default BlogPost;
