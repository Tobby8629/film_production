"use client"
import React, { useState } from 'react'
import Mapping from '../reuseable/Mapping'
import { useQuery } from '@tanstack/react-query'
import { fetchQuery } from '@/app/api/QueryFn'
import { FormField, infoInt, ServicesResponse } from '@/interfaces'
import FormFieldRenderer from './FieldRenderer'

type All = FormField[];

const formFields: All = [
  { name: "name", type: "text", important: true, placeholder: "Name" },
  { name: "email", type: "email", important: true, placeholder: "Enter Email" },
  { name: "service", type: "dropdown", important: true },
  { name: "comment", type: "text", important: false, placeholder: "drop a note (if you’d like)..." },
];

const INITIAL_STATE = formFields.reduce((acc, field) => {
  acc[field.name] = "";
  return acc;
}, {} as infoInt);

const BookingForm = () => {
  const [info, setInfo] = useState<infoInt>(INITIAL_STATE);

  const { data } = useQuery<ServicesResponse>({
    queryKey: ["services"],
    queryFn: () => fetchQuery("/event_types?user=https://api.calendly.com/users/c8b10734-c82c-427e-9e11-7b9f3171db88"),
  });

  const hasEmptyValue = Object.entries(info).some(([key, value]) => {
    const field = formFields.find(f => f.name === key);
    return field?.important && !value;
  });

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInfo(prev => ({ ...prev, [name]: value }));
  };

  const redirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `${info.service}?name=${encodeURIComponent(info.name)}&email=${encodeURIComponent(info.email)}`;
    window.location.href = url;
  };

  return (
    <form className='checkout_form' onSubmit={redirect}>
      <h2 className='!text-xl'>Booking Information</h2>
      <Mapping array={formFields} className='my-3'>
        {(field) => (
          <FormFieldRenderer
            info={info}
            setInfo={setInfo}
            field={field}
            value={info[field.name]}
            onChange={update}
            options={field.name === "service" ? data?.collection : undefined}
          />
        )}
      </Mapping>
      <button
        disabled={hasEmptyValue}
        className={`${hasEmptyValue ? "bg-gray-400" : "button"} rounded-sm !px-10 !py-3 font-medium capitalize`}
      >
        Continue
      </button>
    </form>
  );
};

export default BookingForm;
