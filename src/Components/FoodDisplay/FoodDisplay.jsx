import React, { useContext } from 'react'

import './FoodDisplay.css'

import { StoreContex } from '../../Context/StoreContex'
import Fooditem from '../Fooditem/Fooditem'

function FoodDisplay({category}) {

    const {food_list} =useContext(StoreContex)


    

  return (
    <>
    <div className='food-display' id='food display'>
        <h1>Top dishes near you!</h1>
        <div className='food-display-list'>
         {food_list.map((item,index)=>{
          console.log(item.Category)

          if(category==="All" || category===item.category)
            {
            return<Fooditem key={index} id={item._id} name={item.name}
            description={item.description}  price= {item.price} image={item.image}
            />
            

          }


           

         }
        
        )}

        </div>

    </div>
    
    
    </>
  )
}

export default FoodDisplay
