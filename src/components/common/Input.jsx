import {useState,useEffect} from 'react'

const Input = ({label,name,type,value,onChange,clearOnSubmit}) => {

	const [inputValue,setInputValue] = useState(value);

	function onChangeHandler(e){
		setInputValue(e.target.value);
		onChange(e.target.value);
	}

	useEffect(() => {
		if (clearOnSubmit) {
			setInputValue("");
		}
	}, [clearOnSubmit]);

  return (
	<div className='input-wrap'>
		<label htmlFor={name}>{label}</label>
		<input placeholder={label} type={type} id={name} value={inputValue} onChange={onChangeHandler}/>
	</div>
  )
}

export default Input;