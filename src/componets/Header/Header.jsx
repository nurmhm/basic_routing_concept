import { Link } from "react-router-dom";


const Header = () => {
   return (
      <div>
         <h2>Navber</h2>

         <nav>
            <Link to="/">home </Link>
            <Link to="/contact"> contact us</Link>
            <Link to="about"> about </Link>
            <Link to="/users"> Users</Link>
            <Link to={"/posts"}>Posts</Link>
         </nav>
         
      </div>
   );
};

export default Header;