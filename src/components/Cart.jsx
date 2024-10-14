import { useDispatch, useSelector } from "react-redux";
import CatagoryItems from "./CatagoryItems";
import { clearCart } from "../utils/CartSlice";

const Cart = () =>{
    const addToCartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    // console.log(addToCartItems)
    const ClearCartItems = () =>{
        dispatch(clearCart());
    }
    return (
        <div className="text-center  m-auto font-bold">
            <div>Cart</div>
            <button className="border bg-black text-white border-black p-auto m-auto" onClick={ClearCartItems}>ClearCart</button>
            <div className="w-6/12 m-auto">
                <CatagoryItems items={addToCartItems} />
            </div>
            {addToCartItems.length === 0 && <h1>There is no Items in the Cart. Please add Something.</h1>}
        </div>
    )
}

export default Cart;