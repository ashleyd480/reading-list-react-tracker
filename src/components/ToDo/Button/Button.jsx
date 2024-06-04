import "../ToDo.css" 
const Button = ({ color, children, onClickFunction }) => {
    return (
        <button className={`${color}`}  onClick={onClickFunction}>
            {children}
      </button>
            
          
    );
};

export default Button;

// button component has text and className which defines its color and event listener (all are props)
//<button className={color === red ? "redBtn" : "greenBtn"} onClick = {onClickFunction}> text  </button> */
//button accepts the color, text, and onClickFunction as props 
       

// "children is a special prop in React that represents the content between the opening and closing tags of a component. It's not a reserved keyword in JavaScript, but it's a convention widely used in React to handle component composition and nesting"