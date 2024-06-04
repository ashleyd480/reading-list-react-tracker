import { LuListTodo } from "react-icons/lu";

const Counter = ({ stuffToDo }) => {
    const notCompletedCount = stuffToDo.filter(task => !task.completed).length;

    return (

      <div className="todo-icon">
            <LuListTodo size={"3em"} />
            
        {notCompletedCount > 0 && <span className="todo-count">{notCompletedCount}</span>}
      </div>
    );
  }
  
  export default Counter