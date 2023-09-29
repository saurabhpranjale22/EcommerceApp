import {RxCross1} from "react-icons/rx"
import { useDispatch } from "react-redux";
import { remove,increaseQuantity,decreaseQuantity } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";


const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
   toast.error("Item Removed")
  }

  return (
    <div className="w-[97%]  m-auto my-2">
<hr class="h-px my-2 bg-gray-200 border-0 "></hr>
      <div className="flex flex-row relative ">

        <div>
          <img src={item.image} className="h-[7rem] w-[6rem] mr-2" />
        </div>
        <div
            onClick={removeFromCart} className="absolute right-1 cursor-pointer">
              <RxCross1/>
            </div>
        <div className=" m-auto flex flex-col ml-2 w-[70%] ">
          <h1 className="font-bold mb-2  max-w-[9rem]">{item.name}</h1>
          <h1 className="max-w-[16rem] md:max-w-[20rem] mb-2">{item.description.slice(0,40,)}</h1>
          <div className="flex flex-row my-2">
            
            <div className="flex flex-row justify-center items-center">
            <p className="text-[1rem] font-extrabold cursor-pointer border border-black w-6 flex items-center justify-center hover:bg-slate-200" onClick={() => dispatch(decreaseQuantity({ id: item.id }))}>-</p>
              <p className="px-4">{item.quantity}</p>
              <p className="text-[1rem] font-extrabold cursor-pointer border border-black w-6 flex items-center justify-center hover:bg-slate-200" onClick={() => dispatch(increaseQuantity({ id: item.id }))}>+</p>
             
            </div>

            <p className=" ml-6 sm:ml-[7rem]">${item.price * item.quantity}</p>
          
          </div>

        </div>


      </div>
      <hr class="h-px my-2 bg-gray-200 border-0 "></hr>
    </div>
  );
};

export default CartItem;