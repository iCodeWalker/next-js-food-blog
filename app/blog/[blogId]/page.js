const BlogPostPage = ({ params }) => {
  // we can access the dynamic route value using "params" props
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.blogId}</p>
    </main>
  );
};

export default BlogPostPage;
