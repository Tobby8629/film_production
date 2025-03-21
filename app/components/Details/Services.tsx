import React from 'react';
import Mapping from '../reuseable/Mapping';
import { serve } from '@/app/utils/constants';
import Image from 'next/image';

const Services = () => {
  return (
    <section className='md:w-[90%] md:mx-auto'>
      <h2 className="header !my-5 !text-lg">What This Service Include:</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Mapping array={serve}>
          {(item) => (
            <div key={item.id} className="mb-10">
              <Image 
                src={item.image} 
                alt={item.name || 'Service image'} 
                width={300} 
                height={200} 
                className="rounded-lg object-cover w-full"
                loading="lazy" 
              />
              <p className="mt-3">{item.content}</p>
            </div>
          )}
        </Mapping>
      </div>
    </section>
  );
};

export default Services;
