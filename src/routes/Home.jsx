import { Outlet } from "react-router-dom";
import Menu from "../Components/Menu";

export default function Home () {
    return(
      <div>
        <Menu />
        <h1>This is home</h1>

        <div>
        <Outlet />
        </div>
      </div> 
      
      
    ) 
      

}