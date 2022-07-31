import React from 'react'
import { useState } from 'react'

function AddTodo({ addTodo }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const createTodo = () => {
    addTodo(todoTitle, todoDescription)
    setTodoTitle("");
    setTodoDescription("");
  };
    
  return (
    <div className='mt-5 mx-3 mb-10'>
        <h2 className='text-3xl mx-4 mt-7 mb-5'>Add Todo</h2>
        <div>
            <input type="text" placeholder='Enter Todo Title' className='w-full mt-5 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' value={todoTitle} onChange={(e)=>{setTodoTitle(e.target.value)}} />
            <input type="text" placeholder='Enter Todo Description' className='w-full mt-5 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' value={todoDescription} onChange={(e)=>{setTodoDescription(e.target.value)}} />
            {todoTitle && todoDescription ? <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={createTodo}>Add Todo</button> : <button className="flex mx-auto mt-16 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none rounded text-lg" onClick={()=>{}}>Add Todo</button>}

        </div>
    </div>
  )
}

export default AddTodo