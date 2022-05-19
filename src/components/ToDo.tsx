import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atoms";

function ToDo({text, category, id}:IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    const {currentTarget:{name}} = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id)
      const newToDo = {text, id, category:name as any};
      const newToDos = [...oldToDos];
      if(category === Categories.Delete) {
        newToDos.splice(targetIndex,1);
        return newToDos;
      } else {
      newToDos.splice(targetIndex,1,newToDo);
      return newToDos;
      }
    });
  }
  return(
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>To Do</button>)}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>Doing</button>)}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>Done</button>)}
      <button name={Categories.Delete} onClick={onClick}>delete</button>
    </li>
  )
}

export default ToDo;
