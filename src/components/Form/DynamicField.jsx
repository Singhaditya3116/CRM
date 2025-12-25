import Input from '../common/Input';
import PhoneInputField from '../common/PhoneInputField';
import EmailInput from '../common/EmailInput';	

const DynamicField = ({ field, formData, setFormData }) => {
  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  let component = null;
  switch (field.type) {
    case 'text':
      component = (
        <Input
          label={field.label}
          name={field.name}
          type={field.type}
          value={formData[field.name] || ''}
          onChange={(value) => handleChange(field.name, value)}
        />
      );
      break;
    case 'tel':
      component = (
        <PhoneInputField
          label={field.label}
          name={field.name}
          type={field.type}
          value={formData[field.name] || ''}
          onChange={(value) => handleChange(field.name, value)}
        />
      );
      break;
    case 'email':
      component = (
        <EmailInput
          label={field.label}
          name={field.name}
          type={field.type}
          value={formData[field.name] || ''}
          onChange={(value) => handleChange(field.name, value)}
        />
      );
      break;
    default:
      component = null;
  }

  return <>{component}</>;
}

export default DynamicField;