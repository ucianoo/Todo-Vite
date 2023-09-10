import { useState } from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai';

function TaskForm ({onAdd})  {
    const [taskName, setTaskName] = useState('')

    function handleSubmit (ev) {
        ev.preventDefault(ev);
       if(!taskName) return;
        onAdd(taskName)
        setTaskName('')
    }

  return (
    <form onSubmit = {handleSubmit}>
      <div className='form-control'>
        <input
          type='text'
          value={taskName}
          className='form-input'
          name='item'
          onChange={(ev) => setTaskName(ev.target.value)}
          placeholder='Enter Task..'
        />
      </div>

      <div>
        <button type='submit' className='btn'>
          <AiOutlinePlusCircle /> Add Item
        </button>
      </div>
    </form>
  );
}
export default TaskForm