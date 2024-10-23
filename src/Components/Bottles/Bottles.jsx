import { useEffect, useState } from "react"
import { addToLocalStorage, getStoredCart, removeLS } from "../../utilities/LocalStorage"
import Bottle from "../bottle/bottle"
import Cart from "../Cart/Cart"
import './bottles.css'

export default function Bottles() {
    const [bottles, setBottles] =useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=> res.json())
        .then(data => setBottles(data))
    },[])
    // Load to Local Storage
    useEffect(()=>{
        console.log('empty bottle', bottles.length)
        if(bottles.length > 0){
            const storedCart = getStoredCart()
            const saveCart = []
            for (const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id===id)
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            setCart(saveCart)
        }
    },[bottles])
    // Handle Phursase Button
    const handleBottle = bottle => {
       const newCart = [...cart, bottle]
       setCart(newCart)
       addToLocalStorage(bottle.id)
    }
    // remove from Local Storage
    const handleRemove = id =>{
        const remaining = cart.filter(bottle => bottle.id !==id)
        setCart(remaining)
        removeLS(id);
    }
  return (
    <div>
       <h1>Memorable Bottles</h1>
        <h2>Available Bottles: {bottles.length}</h2>
        <Cart cart={cart} handleRemove={handleRemove}></Cart>
        <div className="bottles-container">
        {
            bottles.map(bottle=> <Bottle 
                key={bottle.id} 
                bottle={bottle}
                handleBottle = {handleBottle}
                >
                </Bottle>)
        }
        </div>
    </div>
  )
}

