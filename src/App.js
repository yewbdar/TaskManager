import React , {useState, useEffect} from 'react';


import './App.css';
import Task from './component/Task'
import { saveSnapshotFile } from 'jest-snapshot/build/utils';


function App() {
  const [task, setTask] = useState('')
  const [arrayOfTask,setArrayOfTask] = useState([])
  const [selectToEdit,setSelectToEdit] = useState(false)
  // useEffect(()=> {
  //       // setTask('one')

  // },[setTask])
  const saveTheValue =()=>{
    setArrayOfTask([...arrayOfTask,{value:task , complited:false}])
    setTask('')
  }
  
  const deleteTask = (val) => {
    setArrayOfTask(...[arrayOfTask.filter(value => value.value!== val)])
  }
  const editTask = (val) => {
        console.log(val)
  }
  const selectTask = (val) => {
     arrayOfTask.map(value =>  { if(value.value === val)  return value.complited = !value.complited})
     setArrayOfTask([...arrayOfTask])
  }
  return (
    <div className="App">
      <input value={task} onChange={(e)=> setTask(e.target.value)}/>
      <button name='add' onClick={saveTheValue}>add</button>
      
     <Task task = {arrayOfTask} deleteT={deleteTask} editT={editTask} selectT={selectTask}/>
    </div>
  );
}

export default App;
