import React , {useState } from 'react';
import {useDispatch} from 'react-redux';

const Header = ()=>{
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	const changeHandler = (e)=>{
		console.log('change in input');
		setText(e.target.value)
	}


  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()
    // If the user pressed the Enter key:
    if (e.key === 'Enter' && trimmedText) {
      // Dispatch the "todo added" action with this text
      dispatch({ type: 'todos/todoAdded', payload: trimmedText })
      // And clear out the text input
      setText('')
    }
  }	

	return (

		<div onKeyDown={handleKeyDown} >
			<input onChange={changeHandler} value={text}/>
		</div>
		)
}

export default Header;
