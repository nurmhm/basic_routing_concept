
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
   const user = useLoaderData();
   const  {name,website} = user;
   return (
      <div>
         <h1>this is user details 

         </h1>

         <h2>user name: {name}</h2>
         <h3>user website: {website}</h3>
      </div>
   );
};

export default UserDetails;