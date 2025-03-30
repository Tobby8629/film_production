import { service } from '@/interfaces';
import { play } from '@/public/png';
import Image, { StaticImageData } from 'next/image';
import React, { useCallback } from 'react';

const Video = ({ service }: { service: service }) => {
  const handleClick = useCallback(() => {
    console.log('i clicked');
  }, []);

  if (!service?.icon) return null;

  return (
    <section className="relative my-5 w-full max-md:min-h-[250px] md:w-[90%] md:mx-auto md:h-[500px] xl:min-h-[520px]">

      <Image
        src={service.icon as StaticImageData}
        alt="header"
        className="rounded-lg h-full w-full object-cover"
        loading="lazy"
      />

      <div
        onClick={handleClick}
        className="absolute inset-0 z-10 flex items-center justify-center bg-white/50 transition hover:bg-white/40"
      >
        <Image
          src={play}
          alt="play video"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default React.memo(Video);
