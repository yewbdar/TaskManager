import React from 'react';

const Task = (props) =>{
    const {task ,deleteT,editT,selectT} = props
   
    return (
        <div>
            {task.map((item,i) => ( <div key={i}><input type='checkbox' checked={item.complited} 
            onChange={()=>selectT(item.value)} key={i} />
            <span >{item.value}</span>
            <button name='delete' value={item.value} onClick={()=>deleteT(item.value)}>delete</button>
            <button name='edit' value={item.value} onClick={()=>editT(item.value)}>select to  edit</button>
      </div>))}
        </div>
        
    )
}
export default Task