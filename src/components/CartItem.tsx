import data from "../data/data.json"
import { formatCurrency } from "../utils/formatCurrency"
import {FaTimes} from "react-icons/fa"
import { useShoppingCartContext } from "../context/ShoppingCartContext"

type CartItemProps = {
    id:number
    quantity:number
}

const CartItem = ({id,quantity}: CartItemProps) => {
const {removeFromCart}=useShoppingCartContext()

  const item = data.find((item)=>item.id==id)
  if(item ==null){
    return null
  }
// console.log(item);
  return (
    <div>
      <div className="flex pl-2 mt-7">
        <img src={item.imgUrl} alt={item.name} className="w-4/12 h-[90px] object-cover" />
        <p className="flex flex-col items-start justify-center font-bold pl-2 w-3/12 text-sm"><span>{item.name} {quantity>1 && "x "+quantity}</span> <span>{formatCurrency(item.price)}</span></p>
        <p className="flex justify-start items-center font-bold  px-1 text-teal-900 w-4/12 text-xl">{formatCurrency(item.price*quantity)}</p>
        <div className="flex items-center justify-center px-2 text-red-600">
        <button onClick={()=>removeFromCart(id)}><FaTimes/></button>
        </div>
      </div>

    </div>
  )
}

export default CartItem