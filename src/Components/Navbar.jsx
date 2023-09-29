import {BiShoppingBag} from "react-icons/bi"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SP from '../Images/SP.jpg'

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div className="bg-slate-950" >
      <nav className="flex justify-between items-center h-20 max-w-6xl  mx-auto">

        <NavLink to="/">
          <div className="ml-5">
          <img src={SP} className="h-12 md:h-14 lg:h-14"/>
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            

            <NavLink to="/cart">
              <div className="relative">
                  <BiShoppingBag size={35} className="text-2xl hover:scale-105"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs font-bold w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >   {cart.length}  </span>
                  }
                  
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;