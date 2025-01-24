import { useState } from "react";

export default function ItemList(){
    const [itemList, setItemList] = useState([]);

    function addItem(){
        setItemList([...itemList, "new Item"])
    }

    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {itemList.map((item, index) =>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}