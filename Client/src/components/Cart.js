import { useSelector } from "react-redux"
import ItemList from "./ItemList";

const Cart = ()=> {
    const list= useSelector((store) => store.cart.items);
    // console.log(list)
    return (
        <div >
            <h1 className="font-bold m-5 p-5 text-2xl text-center">Cart</h1>

            <div className="w-6/12 m-auto">
            <ItemList list={list}/>
            </div>
        </div>
    )
}

export default Cart