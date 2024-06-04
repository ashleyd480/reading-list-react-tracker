import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ToDo from "./ToDo/ToDo";
// paranet of the ToDo component (lifting up lab)

const ToDoListManager = ({
  stuffToDo,
  setStuffToDo,
  history,
  setHistory,
  completedTasks,
  setCompletedTasks,
}) => {
  // we have todoText as a state variable so we can set its state
  const [newTodoTextInput, setNewToDoTextInput] = useState("");

  // to set error message
  const [errorMessage, setErrorMessage] = useState("");

  // we want it so that the ToDo component can alter the state of the stuffToDo therefore we define handleAddTask here which is done through ToDo List button being clicked

  // we then need to pass this function down to to ToDo

  const handleInput = (event) => {
    setNewToDoTextInput(event.target.value);
    console.log(newTodoTextInput);
  };

  // each time a task is added, we add a key value pair- generating an id, task being the user's input, and inital value of completed as false 
  const handleAddTask = (newTodoTextInput) => {
    if (newTodoTextInput != "") {
      console.log("New Task:", newTodoTextInput);
      const newTask = {
        //  id: uuidv4()
        id: stuffToDo.length + 1,
        task: newTodoTextInput,
        completed: false,
      };

      const updatedToDoListArray = [...stuffToDo, newTask];

      setStuffToDo(updatedToDoListArray);

      setNewToDoTextInput("");
      setErrorMessage(""); // Reset error message
    } else {
      setErrorMessage("Thou shalt not pass with a blank to-do ");
    }
  };

  const handleDeleteAllTasks = () => {
    if (stuffToDo.length > 0) {
      // Add all tasks to history before clearing stuffToDo
      // takes the existing history and adds the current stuffToDo we have before deleting all of the current stuffToDo
      setHistory([...history, ...stuffToDo]);
      setStuffToDo([]);
      setErrorMessage(""); // Reset error message
    } else {
      setErrorMessage("You have no books to delete. Silly human!");
    }
  };

  // We always want to make a copy of array
  const handleDeleteOneTask = (index) => {
    const deletedTask = stuffToDo[index];

    const currentTaskList = [...stuffToDo];
    // we want to remove that one element at the index parameter
    currentTaskList.splice(index, 1);
    console.log("deleted");
    setStuffToDo(currentTaskList);

    // Add the deleted task to the history
    setHistory([...history, deletedTask]);
  };

  // Return jsx with props
  return (
    <ToDo
      onHandleInput={handleInput}
      onAddToTask={handleAddTask}
      onDeleteTask={handleDeleteOneTask}
      onDeleteAllTask={handleDeleteAllTasks}
      setStuffToDo={setStuffToDo}
      stuffToDo={stuffToDo}
      newTodoTextInput={newTodoTextInput}
      errorMessage={errorMessage}
      setCompletedTasks={setCompletedTasks}
      completedTasks={completedTasks}
    />
  );
};

export default ToDoListManager;
