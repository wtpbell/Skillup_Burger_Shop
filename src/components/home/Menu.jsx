// Write all the code here
import React, { useContext, useState, useEffect }from 'react';
import { CartContext } from '../../context/cart';
import MenuCard from './MenuCard';
import cheeseBurger from '../../assets/burger1.png'
import vegCheeseBurger from '../../assets/burger2.png'
import burgerSet from '../../assets/burger3.png'

export const menuItems = [
    {
        id: 1,
        burgerImage: cheeseBurger,
        price: 200,
        title: 'cheese burger',  
        quatity: 0
    },
    {
        id: 2,
        burgerImage: vegCheeseBurger,
        price: 500,
        title: 'veg cheese burger',  
        quatity: 0
    },
    {
        id: 3,
        burgerImage: burgerSet,
        price: 1800,
        title: 'cheese burger with frensh fries', 
        quatity: 0 
    },
]


const Menu = () => {
    const { cartItems, addToCart } = useContext(CartContext);


    return (
        <>
            <div id='menu'>
                <h1>MENU</h1>
                <div>
                    {menuItems.map(item => (
                        <MenuCard
                        key={item.id}
                        id={item.id} 
                        burgerSrc= {item.burgerImage}
                        price={item.price}
                        title={item.title}
                        onAdd={() => addToCart(item)}
                        />
                    ))}

                </div>
            </div>
            
        </>
    )
    
}

export default Menu;