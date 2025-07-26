import React, { useState } from 'react'
import Button from '../button/button'
import './inputForm.css'
import { useNavigate } from 'react-router-dom';
const inputForm = ({label,type}) => {
    const [show , setShow] = useState(false);
    const [inputValue, setInputValue] = useState();
     const navigate = useNavigate()
    function visibility(){
        setShow(!show);
    }   

    function handleSumbit(e){
       e.preventDefault();
       console.log('Form submitted', inputValue); 
       navigate('/play', {state : inputValue})
   }

   function handleChange(e){
    setInputValue(e.target.value);
    console.log(e.target.value);
   }
   
 return (
<>
    <div className='Input'>
      <input type={show ? "text" : "password"} placeholder={label} onChange={handleChange}/>
      <Button value={show ? "Hide" : "Show"} onClick={visibility} color={show?'var(--errorColor)':'var(--successColor)'}/>
      <Button value="ok" onClick={handleSumbit} color="var(--btnColor)" />
    </div>
</>
  )
}

export default inputForm