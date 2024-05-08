import { useSelector, useDispatch } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=> {
    const list= useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    // console.log(list)
    return (
        <div >
            <h1 className="font-bold m-5 p-5 text-2xl text-center">Cart</h1>

            <div className="w-6/12 m-auto">
            <div className="flex justify-end">
            <button className="border border-amber-400 rounded-lg p-2 bg-amber-500 hover:bg-amber-600 mr-4"
            onClick={()=> dispatch(clearCart())}>Clear Cart</button>
            </div>
            <ItemList list={list}/>
            </div>
        </div>
    )
}

export default Cart