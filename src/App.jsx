import  {useEffect, useState} from 'react'
import TaskForm from "./TaskForm";
import Task from './Task'
import Header from "./Header";

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (tasks.length === 0) return;
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks || []);
  }, []);

  function addTask(name) {
    setTasks(prev => {
      return[...prev, {
        name:name, 
        done:false, 
      }]
    })
    
  }

  function removeTask(indexToRemove) {
    if (confirm('Are you sure?')) {
    setTasks(prev =>{
      return prev.filter((taskObject, index) => index !== indexToRemove)
    })
  }
  }

  function updateTaskDone(taskIndex, newDone ) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  function renameTask (index, newName) {
    setTasks((prev) => {
      const newTask = [...prev];
      newTask[index].name = newName
      return [...prev]
    })
  }

  return (
    <div className='container'>
      <Header />
      <TaskForm onAdd={addTask}/>
      {tasks.map((task, index) => (
        <Task {...task} 
        onRename={newName => renameTask(index, newName)}
        onTrash={() => removeTask(index)}
        onToggle={done => updateTaskDone(index, done)}/>
      ))}

      
    </div>
  );
}

export default App
