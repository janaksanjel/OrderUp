import React from 'react';
import { Menu_List } from '../../assets/assets';
import './ExploreMenu.css';

function ExploreMenu({ category, setcategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from our diverse menu, featuring a delectable array of dishes crafted to satisfy your cravings and elevate your dining experience. At our restaurant, we’re dedicated to delivering exceptional meals, ensuring each dining experience is memorable and delightful.
      </p>
      <div className="explore-menu-list">
        {Menu_List.map((menu, index) => (
          <div key={index} className="explore-menu-list-item" onClick={() => setcategory(prev => prev === menu.menu_name ? "All" : menu.menu_name)}>
            <img className={category === menu.menu_name ? "active" : ""} src={menu.menu_img} alt={menu.menu_name} />
            <p>{menu.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
