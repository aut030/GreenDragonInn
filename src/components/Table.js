import React, {useState} from 'react'
import './Table.css'; 

function Table() {
    const [items, setItems] = useState([
        { itemName: 'Sword', price: '$25', quantity: 0},
        { itemName: 'Shield', price: '$20', quantity: 0},
        { itemName: 'Bow', price: '$15', quantity: 0},
    ]);

    const handleQuantityIncrease = (index) => {
        const newItems = [...items];
        newItems[index].quantity++;
        setItems(newItems);
    };

    const handleQuantityDecrease = (index) => {
        const newItems = [...items];
        newItems[index].quantity--;
        setItems(newItems);
    };    

    return(
        <div className='table'>
            <div className='table-head'>
                <div className='title-name'>Item</div>
                <div className='title-price'>Price</div>
                <div className='title-quantity'>Quantity</div>
            </div>
            <div className='item-list'>
                {items.map((item, index) => (
                <div className='item-container'>
                    <div className='item-name'>
                        {item.itemName}
                    </div>
                    <div className='item-price'>
                        {item.price}
                    </div>
                    <div className='quantity'>
                        <button className='quantity-button' onClick={() => handleQuantityDecrease(index)}>-</button>
                        <span> {item.quantity} </span>
                        <button className='quantity-button' onClick={() => handleQuantityIncrease(index)}>+</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Table;