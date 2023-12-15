import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-hot-toast";
import { add,remove } from "../redux/Slices/cartSlice";
import { useState } from "react";

const Product = ({post}) => {

  const {cart} = useSelector( (state) => state);

  const dispatch = useDispatch();

  const addToCart = () =>{
    dispatch(add(post));
    toast.success("Item Added To Cart");
  }

  const removeFromCart = () =>{
    dispatch(remove(post.id));
    toast.error("Item Removed From Cart");
  }

    const[readmore,setReadMore] = useState(false);
    const description = readmore ? post.description : `${post.description.substring(0,100)}....`;

    function readmoreHandler()
    {
        setReadMore(!readmore)
    }

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded  shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:outline hover:transition hover:duration-500">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>

      <div>
        <p className="w-40 text-gray-700 font-normal text-[10px] text-left">{description}<span className="text-[#12b0e8] cursor-pointer" onClick={readmoreHandler}>{readmore ? ' Show Less' : ' Read More'}</span></p>
      </div>

      <div className="h-[180px]">
         <img src={post.image} className="h-full w-full" />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
      
      {
          cart.some((p) => p.id == post.id) ? (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={removeFromCart}>Remove From Cart</button>) 
          : (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase " onClick={addToCart}>Add To Cart</button>)
      }
      </div>

    </div>
  );
};

export default Product;
