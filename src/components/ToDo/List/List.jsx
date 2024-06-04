import Button from "../Button/Button";
import "../ToDo.css"; // navigating up to List folder- which is on same level where ToDo.css is located
import { Link } from "react-router-dom";
import { useState } from "react";

const List = ({
  listMappingOver,
  listFunction,
  setStuffToDo,
  setCompletedTasks,
  completedTasks,
}) => {
  const handleCheckboxChange = (index) => {
    const toDoListArray = [...listMappingOver];
    toDoListArray[index].completed = !toDoListArray[index].completed; // Toggle completion status and the .completed is a attribute from the key-value pair
    // !toDoListArray[index].completed: The ! operator negates the current value of completed. If completed is true, !completed will be false, and vice versa. This effectively toggles the completion status of the task.
    // toDoListArray[index].completed = !toDoListArray[index].completed;: This line assigns the toggled completion status back to the completed property of the task object in toDoListArray. So, if the task was completed, it will now be marked as incomplete, and vice versa.

    // Setting stuffToDo using setStuffToDo(toDoListArray) in the handleCheckboxChange function is necessary to update the state of the to-do list with the modified completion status of the task. This ensures that the changes made to the completion status are reflected in the UI.
    setStuffToDo(toDoListArray);
    if (toDoListArray[index].completed) {
      setCompletedTasks([...completedTasks, toDoListArray[index]]);
    }
  };

  return (
    <ul id="task-list">
      {listMappingOver.map((item, index) => (
        <div key={index} className="to-do-row">
          {console.log(listMappingOver)}
          <Link to={`/todos/${item.id}`}>
            <li className={item.completed ? "completed-task" : ""}>
              {item.task}
            </li>
          </Link>
          <div className="action-items">
            <input
              type="checkbox"
              className="checkbox"
              // When the checkbox is initially rendered, the checked attribute determines its initial state. If checked={true}, the checkbox will be rendered as checked; if checked={false}, it will be rendered as unchecked.
              // Once rendered, the user can interact with the checkbox by clicking on it to toggle its state. This interaction triggers the onChange event, allowing you to capture the user's action and update the checkbox's state accordingly.
              checked={item.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <Button color={"gray"} onClickFunction={() => listFunction(index)}>
              {" "}
              🗑️{" "}
            </Button>
          </div>
        </div>
      ))}
    </ul>
  );
};
// By using the children prop, your List component becomes more flexible and reusable. You can use it to render different types of content or components as children, depending on your needs. This makes your code more modular and easier to maintain, as you can use the same component in

export default List;
// In React, when you pass props to a functional component, they are received as an object. This means that when you define your component, you receive all the props as properties of a single object.
// Destructuring props object to access 'toDoItem' prop
