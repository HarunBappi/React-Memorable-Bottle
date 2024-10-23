import './cart.css';
const Cart = ({cart,handleRemove}) => {
    return (
        <div>
            <h2>Phurchase Bottle: {cart.length}</h2>
            <div className="cart-container">
            {
                cart.map((bottle,idx)=> <div key={idx}>
                    <img  src={bottle.img}></img>
                    <button onClick={()=>handleRemove(bottle.id)}>Remove</button>
                    </div>)
            }
            </div>
        </div>
    );
};

export default Cart;