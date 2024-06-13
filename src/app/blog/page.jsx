
import styles from "./blog.module.css";




export const metadata = {
  title: "Blog",
  description: "Elevate your social grace with our specialized etiquette courses. From dining decorum to professional protocol, our classes provide practical insights and hands-on learning experiences to ensure you navigate any social setting with finesse.",
  keywords: ['social', 'grace', 'professional', 'dining', 'classes', 'learning'],
  alternates: {
    canonical: "https://modernmannerism.com/blog"
  }
};



const BlogPage = async () => {

//   const posts = await getPosts();

  return (
    <div className={`styles.container mt-32 w-[90%] mx-auto`}>
      {/* {posts && posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))} */}

    <h1>Blog</h1>
    </div>
  );
};

export default BlogPage;
