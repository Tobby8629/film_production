import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons/faAsterisk'
import Dropdown from '../reuseable/Dropdown';
import { infoInt } from '@/interfaces';

interface FieldOption {
  name: string;
  scheduling_url: string;
}

interface Props {
  field: {
    name: string;
    type: 'text' | 'email' | 'dropdown';
    important: boolean;
    placeholder?: string;
  };
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  options?: FieldOption[];
  info: infoInt 
  setInfo: React.Dispatch<React.SetStateAction<infoInt>>

}

const FormFieldRenderer = ({ field, setInfo, info, value, onChange, options }: Props) => {
  const { name, type, important, placeholder } = field;

  return (
    <div className='my-4'>
      <label htmlFor={name}>
        <span>{name}</span>
        {important && <FontAwesomeIcon icon={faAsterisk} size="sm" className="asterisk" />}
      </label>
      {name === "comment" ? (
        <textarea name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} />
      ) : name === "service" && options ? (
        <Dropdown
        name="service"
        value={info.service}
        onChange={(name, value) => setInfo(prev => ({ ...prev, [name]: value }))}
        options={options}
      />
      
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormFieldRenderer;


// <select name={name} id={name} onChange={onChange} value={value}>
//           <option value="" disabled>Select a service</option>
//           {options.map(opt => (
//             <option key={opt.name} value={opt.scheduling_url}>
//               {opt.name}
//             </option>
//           ))}
//         </select>
