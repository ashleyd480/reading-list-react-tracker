import "../Container.css";
import ListContainer from "../ListContainer/ListContainer";

const History = ({ history, completedTasks }) => {
  return (
    <div className="any-container to-do-list">
      <h2>Books Finished:</h2>
      {completedTasks.length === 0 ? (
        <p>There are no books you finished reading. 🥺 </p>
      ) : (
        <ListContainer listMappingOver={completedTasks} />
      )}

      <h2>Books Removed:</h2>
      {history.length === 0 ? (
        <p>There are no books removed.👍 </p>
      ) : (
        <ListContainer listMappingOver={history} />
      )}
    </div>
  );
};

export default History;
