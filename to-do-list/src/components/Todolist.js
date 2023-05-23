import React, { useState } from "react";

export default function Todolist() {  

  let [activity, setActivity] = useState("");
  let [listData, setlistData] = useState([]);

 const addActivity = () => {
    setlistData((listData) => {
      const updatedList = [...listData, activity]
      console.log(updatedList)
      setActivity('');
      return updatedList
    })
  }
  const removeItem = (index) => {
      const updatedListData = listData.filter((element,id) => {
        //  return element!==index;
         return index!==id;
      })
      setlistData(updatedListData);
  }

  function removeAll(){
    setlistData([])
  }
   
  return (
  <div>
      <div className="TodoWrapper ">
        <h1> To-Do list</h1>
        <input
          type="text"
          className="todo-input"
          placeholder="todays Task"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        ></input>
        <button type="submit" className="todo-btn" onClick={() => {addActivity()}}>Add-Activity</button>
        <h1 >Today's Task</h1>
  
        {listData!==[] && listData.map((data,index) => {
          return(
            <div  className="Todo">
                <div key={index}>{data}</div>
                <button type='submit'  className="btn btn-outline-dark" onClick={() => {removeItem(index)}}>Delete</button>
            </div>
          )
        })}
        {listData.length >= 1 && <button type="submit" class="btn btn-outline-danger" onClick={() => {removeAll()}}>Delete all</button>}
      </div>
      
  </div>
  
  );
}
