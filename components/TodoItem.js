import { useState } from 'react'
import UpdateModal from './UpdateModal'

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  return (
    <div className='mt-10'>
        <div className='p-6' style={{ borderRadius: "30px", border: "0px solid gray", boxShadow: "5px 10px 25px #888" }}>
            <h3 className='text-2xl mb-4 mt-4'>{todo.title}</h3>
            <p>{todo.description}</p>
            <div className="mt-10">
            <button class="flex mx-auto mt-7 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded" onClick={()=>{setShowUpdateModal(true)}}>Update Todo</button>
            <button class="flex mx-auto mt-7 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded" onClick={()=>{deleteTodo(todo)}}>Delete Todo</button>
            </div>
        </div>
        {showUpdateModal ? <UpdateModal todo={todo} setShowUpdateModal={setShowUpdateModal} updateTodo={updateTodo} /> : <></>}
    </div>
  )
}

export default TodoItem