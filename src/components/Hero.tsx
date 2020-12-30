import React, { useState, useEffect } from 'react';
import Image from 'next/image';


export default function Hero({ src, data }) {
  const [mobile, setMobile] = useState(false)

  const handler = () => {
    window.innerWidth <= 600 ? setMobile(true) : setMobile(false);
  }

  useEffect(() => {
    handler();
    window.addEventListener("resize", handler);
    return () =>
      window.removeEventListener("resize", handler);
  }, []);

  console.log(data);
  return (
    <>
      {mobile ?
        <div className="flex xs:flex-col items-center justify-center sm:justify-between w-screen xs:h-5/6 sm:h-1/2 my-20">
          <div className="flex xs:flex-col items-center xs:w-5/5 align-center justify-evenly h-100 ">
            <h1 className="text-blue text-3xl text-center font-bold ">{data.header}</h1>
            <div >
              <Image src={src} width="573" height="767"  layout="intrinsic" quality={100} />
            </div>
            <button className="bg-yellow-400 shadow-xl w-button text-white py-3 px-5 rounded">{data.cta}</button>
          </div>
          <small className="text-center py-5 text-blue">{data.content}</small>
        </div>
        :

        <div className="flex justify-between w-screen xs:h-5/6 sm:h-1/2 my-20 min-h-full">
          <div className="flex xs:flex-col xs:w-3/5 md:w-2/5 mx-5 justify-evenly h-100 ">
            <h1 className="text-blue text-4xl font-extrabold ">{data.header}</h1>
            <p className="font-light text-blue sm:text-l md:text-xl">{data.content}</p>
            <button  className="bg-yellow-400 shadow-xl w-button text-white py-3 px-5 rounded">{data.cta}</button>
          </div>
          <div className="relative h-100 xs:w-3/5 w-2/5" >
            <Image src={src} layout="fill" objectFit="contain" quality={100} />
          </div>
        </div>
      }
    </>
  )
}

