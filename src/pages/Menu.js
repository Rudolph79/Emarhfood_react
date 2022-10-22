import React from 'react';
import { MenuList } from '../data/data';
import '../styles/Menu.css';
import MenuItem from '../components/MenuItem';

const Menu = () => {
  return (
    <div className='menu'>
        <div className='menuTitle'>
            <h1>Nos Menus</h1>
            <div className='menuList'>
                {MenuList.map((menuItem, key) => {
                    return (
                        <MenuItem 
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            price={menuItem.price}
                        />
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Menu;