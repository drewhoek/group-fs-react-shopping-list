
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../Header/Header.jsx'
import { ShoppingList } from '../ShoppingList/ShoppingList.jsx';
import { ShoppingListForm } from '../ShoppingListForm/ShoppingListForm.jsx';
import './App.css';


function App() {

    const [shoppingList, setShoppingList] = useState([]);

    useEffect(() => {
getList();
    }, [])

    const getList = () => {
        axios.get('/list/').then(response => {
            setShoppingList(response.data)
            console.log(response.data);
        }).catch(err => {
            alert('There was an error getting shopping list', err)
        })
    }


    return (
        <div className="App">
            <Header />
            <main>
                <container className="entry-form">
                    <ShoppingListForm />
                </container>
                <container>
                    <ShoppingList shoppingList={shoppingList}/>
                </container>
            </main>
        </div>
    );
}

export default App;
