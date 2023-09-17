import React from 'react'

function Item({todos, handleDelete}) {
  return (
    <section className="todoContainer">

    {todos.map((item, index) => {
        return (
          <article className="todoItem" key={index}>
            <p className='todoItem__p'>{item}</p> 

            <div className="todoItem__actions">
              <input type="checkbox" />
              <button className='todoItem__actions__btn globalBtn' onClick={() => handleDelete(index)}>Delete</button>
            </div>

          </article>
        )
      })}
        
    </section>
  )
}

export default Item
