import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import './Home.css'

const Home = () => {
   return (
      <div className="contaner">
         <Header></Header>
         <h1>this is home page</h1>
         <p>please visit my home page</p>
         <Outlet></Outlet>
      </div>
   );
};

export default Home;