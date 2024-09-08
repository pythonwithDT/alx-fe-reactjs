import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();
  return <div>Viewing post {postId}</div>;
};

export default BlogPost;
