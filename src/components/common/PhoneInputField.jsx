import {useState} from 'react'

const PhoneInputField = ({label,name,type,value,onChange}) => {

	const [inputValue,setInputValue] = useState(formatPhoneNumber(value));

	function formatPhoneNumber(value) {
	  const cleaned = value.replace(/\D/g, ""); // Remove non-numeric characters
	  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
	  if (!match) return value;
	  const [, areaCode, prefix, lineNumber] = match;
	  let formatted = "";
	  if (areaCode) formatted = `(${areaCode}`;
	  if (prefix) formatted += `) ${prefix}`;
	  if (lineNumber) formatted += `-${lineNumber}`;
	  return formatted;
	}

	function onChangeHandler(e) {
	  const formattedValue = formatPhoneNumber(e.target.value);
	  setInputValue(formattedValue);
	  onChange(formattedValue);
	}

  return (
	<div className='input-wrap'>
		<label htmlFor={name}>{label}</label>
		<input type={type} id={name} value={inputValue} onChange={onChangeHandler}/>
	</div>
  )
}

export default PhoneInputField;