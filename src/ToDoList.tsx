import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { isNativeError } from "util/types";

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

interface IForm {
  Email: string;
  FirstName: string;
  LastName?: string;
  Username: string;
  Password: string;
  Password1: string;
  extraError?: string;
}

function ToDoList() {
  const { register, handleSubmit, formState:{errors}, setError } = useForm<IForm>({
    defaultValues: {
      Email: "@naver.com",
    }
  });
  const onValid = (data: IForm) => {
    if(data.Password !== data.Password1) {
      setError("Password1", { message:"Password are not the same",}, {shouldFocus: true});
    }
    //setError("extraError", { message:"Server offline."}, );
  };
  return(
    <div>
      <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
        <input {...register("Email", {
          required:"Email required", 
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: "Only 'naver.com' emails allowed",
          },
          })} 
          placeholder="Email" />
        <span>{errors?.Email?.message}</span>
        <input {...register("FirstName", {required:true, validate:(value) => value.includes("nico") ? "no nicos allowed" : true})} placeholder="FirstName" />
        <span>{errors?.FirstName?.message}</span>
        <input {...register("LastName")} placeholder="LastName" />
        <span>{errors?.LastName?.message}</span>
        <input {...register("Username")} placeholder="Username" />
        <span>{errors?.Username?.message}</span>
        <input {...register("Password", {required:"password is required", minLength:{
          value: 5,
          message: "your password is too short"
        }})} placeholder="Password" />
        <span>{errors?.Password?.message}</span>
        <input {...register("Password1", {required:true, minLength:10})} placeholder="Password1" />
        <span>{errors?.Password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  )
}

export default ToDoList;