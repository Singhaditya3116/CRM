import {useState} from 'react'

const Input = ({label,name,type,value,onChange}) => {

	const [inputValue,setInputValue] = useState(value);

	function onChangeHandler(e){
		setInputValue(e.target.value);
		onChange(e.target.value);
	}

  return (
	<div className='input-wrap'>
		<label htmlFor={name}>{label}</label>
		<input type={type} id={name} value={inputValue} onChange={onChangeHandler}/>
	</div>
  )
}

export default Input;