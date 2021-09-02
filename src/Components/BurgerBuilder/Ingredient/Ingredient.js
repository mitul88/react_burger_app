import React from 'react';
import './Ingredient.css';
import BunTop from '../../../assets/images/top.png';
import BunBottom from '../../../assets/images/bottom.png';
import Meat from '../../../assets/images/meat.png';
import Salad from '../../../assets/images/salad.png';
import Cheese from '../../../assets/images/cheese.png';

const Ingredient = props => {

    let ingredient = null;

    switch(props.type) {
        case 'bun-bottom':
            ingredient = <div><img src={BunBottom} alt="Bottom Bun" /></div>
            break;
        case 'bun-top':
            ingredient = <div><img src={BunTop} alt="Top Bun" /></div>
            break;
        case 'meat':
            ingredient = <div><img src={Meat} alt="Meat" /></div>
            break;
        case 'salad':
            ingredient = <div><img src={Salad} alt="salad" /></div>
            break;
        case 'cheese':
            ingredient = <div><img src={Cheese} alt="Cheese" /></div>
            break;
        default:
            ingredient = null;
    }

    return (
        <div className="Ingredient">
            {ingredient}
        </div>
    )
}

export default Ingredient;