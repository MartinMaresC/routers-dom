import { Outlet } from "react-router-dom";
import Menu from "../Components/Menu";
import { items } from "../data/items";
import { Link } from 'react-router-dom';

export default function Home () {
    return(
      <div>
        <Menu />
        <h1>This is home</h1>

        <div>
          <div>
            {items.map((item) => (
              <div>
                <Link to={`/contacts/${item.id}`}>{item.name}</Link>
              </div>
            ))}
          </div>
        <Outlet />
        </div>
      </div> 
      
      
    ) 
      

}