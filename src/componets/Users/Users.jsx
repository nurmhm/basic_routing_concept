
// state >>>>>>>>>> data
// state >>>>>>>>>> lodaer
// use Effect>>>>... 
// fetch >>>>>>>>     state set ----> set state

import { useLoaderData } from "react-router-dom";
import User from "./User";
import './'
// import { useLoaderData } from "react-router-dom";

// const users = useLoaderData();
// console.log(users);


const Users = () => {

   const users = useLoaderData();

  

   return (
      <div>
         <h1>Users {users.length}</h1>
         <p>our vodro usersssssssssssssssss</p>
         <div className="user">
            {
               users.map(user => <User key={user.id} user ={user}></User>)
            }
         </div>
      </div>
   );
};

export default Users;