import React from 'react';
import Image from 'next/image';


export default function Hero({ src, data }) {

  console.log(data);
  return (
    <>
      <Image src={src} width="792" height="373" />
    </>
  )
}

