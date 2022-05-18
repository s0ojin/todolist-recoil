import { useRecoilState, useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>ToDos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => <ToDo key={toDo.id} {...toDo}/> )}
      </ul>
    </div>
  );
}


export default ToDoList;