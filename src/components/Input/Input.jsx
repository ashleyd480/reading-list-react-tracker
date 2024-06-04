import "./Input.css"
// input component recieves the props

const Input = ({  name, placeholder, value, onChange }) => {
    return (
      <input
        className = "input-box"
        name={name}
        placeholder={placeholder}
        value={value}
        type="text"
        onChange={onChange}
      />
    );
  };
  
export default Input;
  
//Note: When caling this - . Each instance of the Input component needs to receive its own className prop to apply specific styles to it.