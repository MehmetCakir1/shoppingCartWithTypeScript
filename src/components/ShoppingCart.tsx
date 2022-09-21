import { useShoppingCartContext } from '../context/ShoppingCartContext'
import {FaTimes} from "react-icons/fa"
import CartItem from './CartItem'

type ShoppingCartProps = {
    isOpen: boolean
  }  

const ShoppingCart = ({isOpen}: ShoppingCartProps) => {
    const {closeCart,cartItems}=useShoppingCartContext()
    // console.log(cartItems);

  return (
<>
{
  isOpen &&
    <div className='w-[26rem] h-screen bg-cyan-200 absolute right-0 top-0 transition-width 1s easy'>
    <div className='flex justify-between items-center px-3 py-3 text-2xl font-bold'>
        <h1>CART</h1>
        <button onClick={closeCart} className="text-red-600"><FaTimes/></button>
    </div>
    <div>
        {cartItems?.map((item)=>{
            return(
                <CartItem key={item.id} {...item}/>
            )
        })}
    </div>
</div>
}
</>
  )
}

export default ShoppingCart