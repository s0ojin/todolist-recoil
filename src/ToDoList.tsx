import React, { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [todo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("")
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {currentTarget: {value}} = event;
    setToDoError("");
    setToDo(value);
  }
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(todo.length < 10) {
      return setToDoError("Todo should be longer");
    }
    console.log("submit");
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={todo} placeholder="Write a to do" onChange={onChange}/>
        <button>Add</button>
        {toDoError !== "" ? toDoError : null }
      </form>
    </div>
  );
} */

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data:any) => {
    console.log(data)
  };
  console.log(formState.errors)
  return(
    <div>
      <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
        <input {...register("Email", {required:true, minLength:10})} placeholder="Email" />
        <input {...register("FirstName", {required:true})} placeholder="FirstName" />
        <input {...register("LastName", {required:true})} placeholder="LastName" />
        <input {...register("Username", {required:true})} placeholder="Username" />
        <input {...register("Password", {required:"password is required", minLength:{
          value: 5,
          message: "your password is too short"
        }})} placeholder="Password" />
        <input {...register("Password1", {required:true, minLength:10})} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  )
}

export default ToDoList;