import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Search from "./containers/Search/Search";
import History from "./containers/History/History";
import TodoDetails from "./components/ToDoDetails/ToDoDetails";
import Error from "./containers/Error/Error";
import "./App.css";

const App = () => {
  //keep header heere so the nav bar persists
  /* //routes: if path is /search--> render search */


  // global props in app.jsx that are prop drilled down 
  // child elements can access thsoe values and update them, allowing for bidrectional flow 
  const [stuffToDo, setStuffToDo] = useState([]);
  const [history, setHistory] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  console.log(stuffToDo);
  return (
    <>
      <Header stuffToDo={stuffToDo} />
      <Routes>
        ›
        <Route
          path="/"
          element={
            <Home
              stuffToDo={stuffToDo}
              setStuffToDo={setStuffToDo}
              history={history}
              setHistory={setHistory}
              completedTasks={completedTasks}
              setCompletedTasks={setCompletedTasks}
            />
          }
        />
        <Route
          path="/history"
          element={
            <History history={history} completedTasks={completedTasks} />
          }
        />
        <Route path="/search" element={<Search stuffToDo={stuffToDo} />} />
        <Route
          path="/todos/:id"
          element={<TodoDetails stuffToDo={stuffToDo} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;

