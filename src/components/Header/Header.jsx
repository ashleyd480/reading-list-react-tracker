import "./Header.css"
import Counter from "../Counter/Counter";
import NavBar from "../NavBar/NavBar";


const Header = ({ stuffToDo }) => {
    return (
      <div className="header">
        <NavBar stuffToDo={stuffToDo} />
        <Counter stuffToDo={stuffToDo} />
      </div>
    );
  };
  

export default Header;