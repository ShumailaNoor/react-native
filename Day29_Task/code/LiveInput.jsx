//----------------- Practice 1 -----------------
import {useState} from 'react';
function LiveText() {
  const [text, setText] = useState('');

  const handleChange = (event) =>{
    setText(event.target.value);
  }

  return (
    <div>
      <label>Type something: </label>
      <input type="text" value ={text} onChange={handleChange} />
      <h4>{text}</h4>
    </div>
  );
}

export default LiveText;