import data from "../data/data.json"
import { formatCurrency } from "../utils/formatCurrency"
import {FaTimes} from "react-icons/fa"

type CartItemProps = {
    id:number
    quantity:number
}

const CartItem = ({id,quantity}: CartItemProps) => {

  const item = data.find((item)=>item.id==id)
  if(item ==null){
    return null
  }
// console.log(item);
  return (
    <div>
      <div className="flex px-3 mt-7">
        <img src={item.imgUrl} alt={item.name} className="w-36" />
        <p className="flex flex-col items-start justify-center font-bold px-3 w-[90px]"><span>{item.name} {quantity>1 && "x "+quantity}</span> <span>{formatCurrency(item.price)}</span></p>
        <p className="flex justify-center items-center font-bold text-2xl px-2 text-teal-900 w-[125px]">{formatCurrency(item.price*quantity)}</p>
        <div className="flex items-center justify-center px-2 text-red-600">
        <button><FaTimes/></button>
        </div>
      </div>
    </div>
  )
}

export default CartItem