import Button from "../../components/ToDo/Button/Button";
// import "../../ToDo.css" 
import { Link } from 'react-router-dom';


const ListContainer = ({ listMappingOver }) => {

   
    return (
        <ul id="task-list">
            {listMappingOver.map((item, index) => (
                    <div key={index} className="to-do-row">
                       
                    {console.log(listMappingOver)}
                 
                        <li>
                           Book: {item.task}
                        <br></br>
                        <Link to={`/todos/${item.id}`}>
                            Id: {item.id}
                            <br></br>
                            </Link>
                            Read: {`${item.completed}`}
                        </li>
              
                    </div>
              
            ))}
        </ul>
    );
}


export default ListContainer
