import { useLoaderData } from "react-router-dom";


const Posts = () => {
   const posts = useLoaderData();
   // console.log(posts);

   return (
      <div>
         <h1>ALL PSOTS</h1>
         <h2>PostID : {posts.length}</h2>
      </div>
   );
};

export default Posts;