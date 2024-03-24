import { Link } from "react-router-dom";


const User = ({user}) => {
   const {id, name, phone,email} = user;
   const userStyle = {
      border: '2px solid red',
      padding: '20px',

   }
   return (
    
      <div style={userStyle}>
         <h1>{name}</h1>
         <p>email: {email}</p>
         <p>Phone : {phone} </p>
         <Link to={`/user/${id}`}> Show details</Link>
      </div>
   );
};

export default User;