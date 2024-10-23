import './bottle.css'
export default function Bottle({bottle,handleBottle}) {
    const {name, img, price} = bottle
  return (
    <div className="bottle-box">
        <h2>Name: {name}</h2>
        <img src={img} alt="" />
        <p>Price: {price}</p>
        <button onClick={()=>handleBottle(bottle)}>Phurchase</button>
    </div>
  )
}
