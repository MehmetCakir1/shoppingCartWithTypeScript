import { useShoppingCartContext } from '../context/ShoppingCartContext'
import {FaTimes} from "react-icons/fa"
import CartItem from './CartItem'
import { formatCurrency } from '../utils/formatCurrency'
import data from "../data/data.json"

type ShoppingCartProps = {
    isOpen: boolean
  }  

const ShoppingCart = ({isOpen}: ShoppingCartProps) => {
    const {closeCart,cartItems}=useShoppingCartContext()
    // console.log(cartItems);
    

  return (
    <>
    {
      isOpen && (
      <div className="w-full max-w-[26rem] h-[100vh] bg-cyan-200 absolute right-0 top-0 z-[100]">
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
      <h1 className='text-end p-5 text-3xl font-bold absolute bottom-10 right-2'>
      Total<span className='px-2 '>:</span> 
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = data.find(i => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
              )}
          </h1>
  </div>
      )
    }
    </>
    

  )
}

export default ShoppingCart