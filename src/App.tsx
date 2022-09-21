import ShoppingCartProvider from "./context/ShoppingCartContext"
import AppRouter from "./router/AppRouter"

const App = () => {
  
  return (
    <div>
      <ShoppingCartProvider>
      <AppRouter/>
      </ShoppingCartProvider>
    </div>
  )
}

export default App