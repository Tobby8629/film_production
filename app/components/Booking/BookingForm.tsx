"use client"
import React, { useState } from 'react'
import Mapping from '../reuseable/Mapping'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons/faAsterisk'
import { useQuery } from '@tanstack/react-query'
import { fetchQuery } from '@/app/api/QueryFn'
import { ServicesResponse } from '@/interfaces'

interface infoInt {
  [key: string]: string;
}

interface FormField {
  name: string;
  type: 'text' | 'email' | 'dropdown'; 
  important: boolean;
  placeholder?: string;
}

type All = FormField[]; 

const BookingForm = () => {
  const [info, setInfo] = useState<infoInt>({
    name: "",
    email: "",
    service: "",
  })

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const form: All = [
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
      name: "service",
      type: "dropdown",
      important: true,
    },
    {
      name: "comment",
      type: "text",
      important: false,
      placeholder: "drop a note (if you’d like)..."
    }
    
  ]
  const url = "/event_types?user=https://api.calendly.com/users/c8b10734-c82c-427e-9e11-7b9f3171db88"
  const { data,} = useQuery <ServicesResponse> ({
    queryKey: ["services"],
    queryFn: () => fetchQuery(url)
  })

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
            item.name === "service" ?
            <select>
              {data?.collection.map((e: unknown)=><option key={e.name}>{e.name}</option>)}
            </select>
            :
            <input type={item.type} onChange={update} value={info[item.name]} name={item.name} id={item.name} placeholder={item.placeholder}  />}
          </div>
        )}
      </Mapping>
      <button className='button rounded-sm !px-10 !py-3 font-medium capitalize' type="submit">Continue</button>
    </form>
  )
}

export default BookingForm