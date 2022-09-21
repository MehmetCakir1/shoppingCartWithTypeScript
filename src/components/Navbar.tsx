import {Link} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
import { useShoppingCartContext } from "../context/ShoppingCartContext"

const Navbar = () => {
  const {openCart,cartQuantity}=useShoppingCartContext()

  return (
    <nav className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold flex gap-x-5 text-cyan-700">
            <Link to="/" className="hover:opacity-70">Home</Link>
            <Link to="/store" className="hover:opacity-70">Store</Link>
            <Link to="/about" className="hover:opacity-70">About</Link>
        </div>
        <div className="rounded-3xl mx-5 relative" onClick={openCart}>
            <button className="text-3xl p-2 rounded-3xl outline outline-1 outline-cyan-700 text-cyan-700 flex justify-center items-center hover:bg-cyan-700 hover:text-white "><FaShoppingCart/></button>
            <h3 className="absolute right-[-15px] bottom-[-10px] rounded-3xl px-2 bg-red-500 text-xl text-white flex justify-center items-center">{cartQuantity}</h3>
        </div>
    </nav>
  ) 
}

export default Navbar