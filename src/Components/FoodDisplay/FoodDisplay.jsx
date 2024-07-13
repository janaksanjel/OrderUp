import React, { useContext, useEffect, useState } from 'react';
import './FoodDisplay.css';
import { StoreContex } from '../../Context/StoreContex';
import Fooditem from '../Fooditem/Fooditem';

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContex);

  // State to manage sorted and filtered food list
  const [filteredFoodList, setFilteredFoodList] = useState([]);
  const [sortOption, setSortOption] = useState('default'); // Default: no sorting
  const [searchTerm, setSearchTerm] = useState('');

  // Sorting and filtering food_list based on sortOption, category, and searchTerm
  useEffect(() => {
    let sortedList = [...food_list];

    // Filtering by category
    if (category !== 'All') {
      sortedList = sortedList.filter(item => item.category === category);
    }

    // Sorting based on sortOption
    switch (sortOption) {
      case 'lowToHigh':
        sortedList.sort((a, b) => a.price - b.price);
        break;
      case 'highToLow':
        sortedList.sort((a, b) => b.price - a.price);
        break;
      case 'recentList':
        sortedList.reverse(); // Reverse the order assuming recent items are at the end
        break;
      default:
        // No sorting
        break;
    }

    // Filtering based on searchTerm
    const filteredList = sortedList.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredFoodList(filteredList);
  }, [food_list, sortOption, searchTerm, category]);

  // Handle change in sort option
  const handleSortChange = e => {
    setSortOption(e.target.value);
  };

  // Handle change in search term
  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  return (


    


<>



    
    <div className='food-display'>
      <h1>Top Dis For Yoou!</h1>

      {/* Sorting dropdown menu */}

      <div className='sort-dropdown'>
    <label htmlFor='sort-select'>Sort By:</label>
    <select id='sort-select' value={sortOption} onChange={handleSortChange}>
      <option value='default'>Default</option>
      <option value='lowToHigh'>Price: Low to High</option>
      <option value='highToLow'>Price: High to Low</option>
      <option value='recentList'>Recent Items</option>
    </select>
  </div>
     

      {/* Search bar */}
      <div className='search-bar'>
        <input class="input"
          type='text'
          placeholder='Search Food...'
          value={searchTerm}
          onChange={handleSearchChange}
        />



        
      </div>

      {/* Food items list */}
      <div className='food-display-list'>
        {filteredFoodList.length > 0 ? (
          filteredFoodList.map(item => (
            <Fooditem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
    </>
  );
 
}


export default FoodDisplay;
