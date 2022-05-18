import { useRecoilState, useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <div>
      <h1>ToDos</h1>
      <hr />
      <CreateToDo />
      <h2>TO DO</h2>
      <ul>
        {toDo.map((toDo) => <ToDo key={toDo.id} {...toDo}/> )}
      </ul>
      <hr />
      <h2>DOING</h2>
      <ul>
        {doing.map((toDo) => <ToDo key={toDo.id} {...toDo}/> )}
      </ul>
      <hr />
      <h2>DONE</h2>
      <ul>
        {done.map((toDo) => <ToDo key={toDo.id} {...toDo}/> )}
      </ul>
      <hr />
    </div>
  );
}


export default ToDoList;