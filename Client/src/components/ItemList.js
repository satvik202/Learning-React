import { RES_IMG_KEY } from "../utils/constants";

const ItemList = ({ list }) => {
  // console.log(list);
  return (
    <div>
      {list.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 border-gray-400 m-2 p-2 flex justify-between"
        >
          <div className="p-2 pl-0 w-9/12">
            {item.card.info.name}
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
            src={RES_IMG_KEY + item.card.info.imageId}
          ></img>
          <button className="bg-white rounded-md text-green-500 font-bold border mt-[-1rem] p-1 px-2 hover:bg-gray-200 block mx-auto">Add +</button>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
