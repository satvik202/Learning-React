import { useDispatch } from "react-redux";
import { RES_IMG_KEY } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ list }) => {
  // console.log(list);

  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
    dispatch(addItem(item))
  }

  return (
    <div>
      {list.map((item) => (
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
          <div className="flex flex-col w-3/12 justify-center">
          <img
            className="h-5/6"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId}
          ></img>
          <button className="bg-white rounded-md text-green-500 font-bold border mt-[-1rem] p-1 px-2 hover:bg-gray-200 block mx-auto"
          onClick={()=> handleAddItem(item)}>Add +</button>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
