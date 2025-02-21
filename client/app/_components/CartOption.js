"use client";
import { useDispatch } from "react-redux";
import { Decorder, Incorder } from "../_store/cartSlice";

function CartOption({ currentCart }) {
  const dispatch = useDispatch();

  return (
    <div className="space-x-2 flex">
      <button
        onClick={() => dispatch(Decorder(currentCart.name))}
        className="bg-[#FF9900] text-white px-[9px] h-6 text-2xl rounded-full flex items-center"
      >
        -
      </button>
      <span className="text-xl rounded-full">{currentCart.quantity}</span>
      <button
        onClick={() => dispatch(Incorder(currentCart.name))}
        className="bg-[#FF9900] text-white px-[6px] h-6 text-2xl rounded-full flex items-center"
      >
        +
      </button>
    </div>
  );
}

export default CartOption;
