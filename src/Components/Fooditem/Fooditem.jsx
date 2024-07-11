import React, { useContext} from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContex } from '../../Context/StoreContex'

function Fooditem({id,name,price,description,image}) {


  // let [itemcount,setitemcount] =useState(0)
  const {cartItem,addTocart,removeFromCart,url}= useContext(StoreContex)

  return (
    <div className='foof-item'>
        <div className='food-item-img-container'>
            
            <img className='food-item-image' src={url+"/images/"+image} alt=''/>
            {
              !cartItem[id]
              ?<img   className='add'onClick={()=>addTocart(id)} src={assets.plus} alt=''/>

              :<div className='food-item-counter'>
                <img className='add-minus' onClick={()=>removeFromCart(id)}   src={assets.minus} alt='' />
                <p>{cartItem[id]}</p>
                <img className='add-plus-green' onClick={()=>addTocart(id)}   src={assets.plusgreen} alt='' />
              </div>
            }

        </div>
        <div className='food-item-info'>
           <div className='food-item-name-rating'>
            <p>{name}</p>
           <img src={assets.rating} alt='' />
           

           </div>
           <p className="food-item-description">
            {description}
           </p>
           <p className="food-item-price">Rs.{price}</p>
        </div>

      
    </div>
  )
}

export default Fooditem
