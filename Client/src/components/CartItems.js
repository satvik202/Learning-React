import { useDispatch } from "react-redux";
import { removeItem, addItem } from "../utils/cartSlice";

const CartItems = ({list}) =>{
    const dispatch = useDispatch();

    const handleAddItem = (item)=>{
        dispatch(addItem(item))
    }
    const handleRemoveItem = (item) =>{
        dispatch(removeItem(item))
    }

    const totalCost = ()=> {
        return list.reduce((total, item) =>{
            return total + (
                item.card.info.price ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100
            )
        }, 0);
    }

    const items = [...new Set(list)];
    Array.prototype.count = function(element) {
        return this.reduce((acc, curr) => curr === element ? acc + 1 : acc, 0);
    };
    console.log(list);
    // console.log(items);
    // {
    //     items.map((item)=>(
    //         <h1>{item.card.info.name} -------- {list.count(item)}</h1>
    //     ))
    // }
    
    return (
        <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 border-gray-400 m-2 p-2 flex justify-between"
        >
          <div className="p-2 pl-0 w-9/12">
            {item.card.info.name}
            {/* {console.log(item.card.info.id,item)} */}
            <div>
              {" ₹"}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
            <p className="text-sm text-gray-600">
              {item.card.info.description}
            </p>
          </div>
          <div className="flex flex-col justify-center">
          <div className="bg-white rounded-md text-green-500 font-bold border mt-[-1rem] p-1 px-2 flex mx-auto w-20 justify-between">
          <button onClick={()=> handleAddItem(item)} className="border-r border-gray-200 w-6 pr-2">+</button>
          <span className="px-2">{list.count(item)}</span>
          <button onClick={()=> handleRemoveItem(item)} className="border-l border-gray-200 w-6 pl-2">-</button>
          <button ></button>
          </div>
        </div>
        </div>
      ))}
      <div className="mt-10">
      total = ₹{totalCost()}
      </div>
    </div>

    )
}

export default CartItems;