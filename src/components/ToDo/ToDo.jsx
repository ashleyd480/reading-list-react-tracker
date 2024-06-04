import Button from "./Button/Button";
import List from "./List/List";
import Input from "../Input/Input";
import "./ToDo.css";

// import { useEffect } from "react";

//To Do uses the button and list component

const ToDo = ({
  onAddToTask,
  newTodoTextInput,
  errorMessage,
  stuffToDo,
  setStuffToDo,
  onDeleteTask,
  onDeleteAllTask,
  onHandleInput,
  setCompletedTasks,
  completedTasks,
}) => {


  return (
    <div className="to-do-list">
      <h1> My Books To Read List </h1>
      <p> Lose yourself in a good book. 📚 </p>
     
      <div>
        <input
          className="input-box"
          name="todo"
          placeholder="Enter book title here..."
          value={newTodoTextInput}
          onChange={onHandleInput} //callback to handleInputChange when user enters task
        />

        <section className="main-button-container">
          <Button
            color={"green"}
            onClickFunction={() => {
              onAddToTask(newTodoTextInput);
            }}
          >
            Add Book
          </Button>
          <Button color={"red"} onClickFunction={onDeleteAllTask}>
            Delete All
          </Button>
        </section>
        <p id="error-message"> {errorMessage} </p>
      </div>

      <List
        listMappingOver={stuffToDo}
        listFunction={onDeleteTask}
        setStuffToDo={setStuffToDo}
        setCompletedTasks={setCompletedTasks}
        completedTasks={completedTasks}
      />
    </div>
  );
};

export default ToDo;

// handleDeleteOneTask is passed the index of the element as an argument when the corresponding delete button is clicked, allowing you to identify and handle the specific element accordingly.
