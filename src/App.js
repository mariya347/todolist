import './App.css';
import React, { useState } from 'react'
import { ToDoList } from './ToDoList';

const App = () => {
  const [inputList, setInputList] = useState();
  const ItemEvent = (e)=>{
    setInputList(e.target.value);
  }
  const[items, setItems] = useState([]);
  const listItem = ()=>{
    setItems((oldItem)=>{
      return[...oldItem, inputList];
    });
    setInputList("");
  }
  const deleteItem =(id)=>{
    setItems((oldItem)=>{
      return oldItem.filter((aarElem, index)=>{
        return index !==id
      })
    })
}
  return (
    <div className="container-fluid w-100 main">
      <div className="container col-lg-3 col-sm-3 h-75 centered">
            <h1 className="text-center display-4 mt-2">ToDo List</h1>
            
            <div className="col-lg-10 col-sm-10 mx-auto my-4">
              <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Add an Item" onChange={ItemEvent} value={inputList}/>
              <span onClick={listItem} className="input-group-text plus fs-4">+</span>
              </div>
              <ol className="mt-3">
                { items.map((itemval,index)=>{
                  return <ToDoList Text= {itemval} key={index} id={index} onSelect = {deleteItem} />
                })}
              </ol>
            </div>

            
      </div>
      
    </div>
  )
}


export default App;

