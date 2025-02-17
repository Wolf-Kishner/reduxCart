import { Navbar } from "./components/Navbar";
import { CartContainer } from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calulateTotals , getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { Modal } from "./components/Modal";
function App() {
  const { cartItems  , isLoading} = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calulateTotals());
  }, [cartItems]);

  useEffect(()=> {
     dispatch(getCartItems());
  },[])
 if(isLoading) {
  return (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  )
 }
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
