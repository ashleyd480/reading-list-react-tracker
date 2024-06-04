import { useParams } from "react-router-dom";

const TodoDetails = ({ stuffToDo }) => {
  const { id } = useParams(); // Get the ID parameter from the URL
  console.log(stuffToDo);
  // Convert id from useParams (string) to a number if necessary
  const todoId = parseInt(id);

  // Fetch todo item details based on the ID
  const todoItem = stuffToDo.find((t) => t.id === todoId);
    console.log(stuffToDo.id);
    
    if (!todoItem) {
        return <div>book item not found!</div>;
      }

  return (
    <div>
      <h2>Book Item Details</h2>
      <p>Here are details</p>
      <ul>
        <li>Book: {todoItem.task} </li>
        <li>Id: {todoItem.id} </li>

        <li>Completed: {`${todoItem.completed}`} </li>
      </ul>
    </div>
  );
};

export default TodoDetails;
