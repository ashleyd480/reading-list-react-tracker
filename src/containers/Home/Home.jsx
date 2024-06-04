import { Link } from "react-router-dom";
import { useState } from "react";
import Main from "../../components/Main/Main";
import ToDoListManager from "../../components/ToDoListManager";
import "../Container.css";

const Home = ({ stuffToDo, setStuffToDo, history, setHistory, completedTasks, setCompletedTasks }) => {


  return (
    <div className="any-container to-do-list">
      <Main />
      <ToDoListManager
        stuffToDo={stuffToDo}
        setStuffToDo={setStuffToDo}
        history={history}
        setHistory={setHistory}
        setCompletedTasks={setCompletedTasks}
        completedTasks={completedTasks}
      />
    </div>
  );
};

export default Home;

// we pass along the function handleAddTask to the child through giving it the prop with variable of onAddToCounter
