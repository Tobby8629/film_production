import React from 'react'
import Mapping from '../reuseable/Mapping'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons/faAsterisk'

const BookingForm = () => {
  const form = [
    {
      name: "name",
      type: "text",
      important: true,
      placeholder: "Name"
    },
    {
      name: "email",
      type: "email",
      important: true,
      placeholder: "Enter Email"
    },
    {
      name: "date",
      type: "date",
      important: true,
      placeholder: "Choose a Date"
    },
    {
      name: "comment",
      type: "text",
      important: false,
      placeholder: "drop a note (if you’d like)..."
    }
    
  ]
  return (
    <form className='checkout_form'>
      <h2 className=' !text-xl'>Booking Information</h2>
      <Mapping array={form} className='my-3'>
        {(item)=>(
          <div className='my-4'>
            <label htmlFor={item.name}>
              <span>{item.name}</span>
              {item.important ? <FontAwesomeIcon icon={faAsterisk} size={"sm"} className='asterisk'/> : null}
            </label>
            {item.name === "comment" ? 
            <textarea name={item.name} id={item.name} placeholder={item.placeholder}  /> : 
            <input type={item.type} name={item.name} id={item.name} placeholder={item.placeholder}  />}
          </div>
        )}
      </Mapping>
      <button className='button rounded-sm !px-10 !py-3 font-medium capitalize' type="submit">Continue</button>
    </form>
  )
}

export default BookingForm