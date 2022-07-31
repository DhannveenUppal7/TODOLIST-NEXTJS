import React from 'react'
import TodoItem from './TodoItem'

function Todos({ todos, deleteTodo, updateTodo }) {
    return (
        <div className='mx-5 mt-8 mb-10'>
            <div>
                {todos.length ? <div>
                    <h2 className='text-3xl'>Todos</h2>
                    <div>
                        {
                            todos.map((todo) => {
                                return (
                                    <TodoItem todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />

                                )
                            })
                        }
                    </div>
                </div> : <div>
                    <h2 className='text-3xl'>You have created No Todos yet, why don't you create one now</h2>

                </div>}
            </div>
        </div>
    )
}

export default Todos