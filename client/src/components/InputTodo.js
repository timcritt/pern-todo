import React, { Fragment, useState } from 'react';


const InputTodo = () => {

  const [description, setDescription] = useState("")
  
  const onSumbitForm = async(e) => {
    e.preventDefault();
    
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {"content-Type": "application/json" },
        body: JSON.stringify(body)

      });

      window.location = "/";
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
  <Fragment>
    <h1 className="text-center mt-5">PERN stack Todo List</h1>
    <form className="d-flex" onSubmit={onSumbitForm}>
      <input type="text" className="form-control" placeholder="enter new todo" value={description} onChange={e => 
        setDescription(e.target.value)}
        />
      <button className="btn btn-success">Add</button>
    
    </form>
  </Fragment>
  )
}

export default InputTodo;

