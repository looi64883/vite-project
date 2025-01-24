import {Component} from 'react';

// class ItemListClassComp extends Component{

//     constructor() {
//         super();
//         this.state = {
//             itemList: [],
//         }
//     }

//     addItem(){
//         this.setState((prevState) => ({
//             itemList: [...prevState.itemList, "new Item"],
//         }))
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Item List in Class Component</h2>
//                 <ul>
//                     {this.state.itemList.map((item, index) =>(
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//                 <button onClick={this.addItem}>Add Item</button>
//             </div>
//         )
//     }
// }

export default ItemListClassComp;

class ItemListClassComp extends Component{

    constructor() {
        super();
        this.state = {
            itemList: [],
        }
    }

    addItem() {
        this.setState((prevState) => ({
            itemList: [...prevState.itemList, "new item"],
        }))
        
    }

    render() {
        return (
            <div>
                <h2>Item List in Class Component</h2>
                <ul>
                    {this.state.itemList.map((item, index) =>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <button onClick={this.addItem}>Add Item</button>
            </div>
        )
    }
}