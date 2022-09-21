import { useShoppingCartContext } from '../context/ShoppingCartContext'
import {FaTimes} from "react-icons/fa"
import CartItem from './CartItem'

type ShoppingCartProps = {
    isOpen: boolean
  }  

const ShoppingCart = ({isOpen}: ShoppingCartProps) => {
    const {closeCart,cartItems}=useShoppingCartContext()

  return (
    <div>
        <div>
            <h1>CART</h1>
            <button onClick={()=>closeCart}><FaTimes/></button>
        </div>
        <div>
            {cartItems?.map((item)=>{
                return(
                    <CartItem key={item.id} {...item}/>
                )
            })}
        </div>
    </div>
  )
}

export default ShoppingCart