import { useShoppingCartContext } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utils/formatCurrency'
import {FaPlus,FaMinus} from "react-icons/fa"
type StoreItemsProps = {
    id:number
    name:string
    price:number
    imgUrl:string
}

const SingleItem = ({id,name,price,imgUrl}:StoreItemsProps) => {
    const { getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    }=useShoppingCartContext()
    const quantity = getItemQuantity(id)

  return (
    <div className='flex flex-col justify-center items-center'>
        <img src={imgUrl} alt={name} className="w-full max-w-[444.438px]  h-[250px] object-cover hover:opacity-70"/>
        <div className=" flex justify-between items-center text-xl p-2 bg-yellow-100 font-bold w-full max-w-[444.438px]">
            <p className='text-gray-700'>{name}</p>
            <p className='text-gray-700'>{formatCurrency(price)}</p>
        </div>
        {
            !quantity ? (
                <div className='bg-yellow-100  text-center pb-2 w-full max-w-[444.438px]'>
                    <button className='bg-cyan-400 py-1 px-12 rounded-lg font-serif font-semibold text-gray-800 hover:bg-blue-600 hover:text-white' 
                    onClick={()=>increaseCartQuantity(id)} >Add To Cart</button>
                </div>
            ):(
                <div className='bg-yellow-100 w-[450px] text-center pb-2'>
                    <div>
                    <button className='text-2xl text-blue-500' onClick={()=>decreaseCartQuantity(id)}><FaMinus/></button>
                    <span className='text-4xl font-bold px-5'>{quantity}</span>
                    <button className='text-2xl text-blue-500' onClick={()=>increaseCartQuantity(id)}><FaPlus/></button>
                    </div>
                    <div>
                        <button className='bg-red-500 py-1 px-9 rounded-lg mt-2' onClick={()=>removeFromCart(id)}>Remove</button>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default SingleItem