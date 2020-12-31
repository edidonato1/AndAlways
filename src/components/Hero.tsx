import React, { useState, useEffect } from 'react';
import Image from 'next/image';


export default function Hero({ src, data }) {
  const [mobile, setMobile] = useState(false); // allow for conditional mobile rendiering 

  const handler = () => {
    window.innerWidth <= 600 ? setMobile(true) : setMobile(false); // toggle 600px mobile breakpoint
  }

  useEffect(() => {
    handler();
    window.addEventListener("resize", handler);
    return () =>
      window.removeEventListener("resize", handler);
  }, []);

  const imageStyles = { // I was unclear on how to accomplish this in Tailwind.  I hope I didn't overstep here.. 
    background: "url(https://i.imgur.com/fDJvUeX.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }

  return (
    <>
      {mobile ? // Rearrange containers for mobile layout
        <div className="flex xs:flex-col bg-lightPeach p-5 items-center justify-center sm:justify-between w-screen xs:h-5/6 sm:h-3/4 min-h-mobile my-20">
          <div className="min-h-mobile">
            <div className="flex xs:flex-col items-center xs:w-5/5 align-center justify-evenly">
              <h2 className="text-darkBlue text-3xl text-center font-title2 font-bold my-5">{data.header}</h2>
              <div className="w-4/5">
                <Image src={src} width="573" height="767" layout="intrinsic" quality={100} />
              </div>
              <button className="bg-deepGreen shadow-xl w-button h-button text-peach hover:text-pink py-3 px-5 my-5 rounded">{data.cta}</button>
            </div>
            <small className="text-center py-5 text-darkBlue">{data.content}</small>
          </div>
        </div>
        :
        <div style={imageStyles} className="flex justify-between w-screen xs:h-5/6 p-10 sm:h-1/2 my-20 min-h-full">
          <div className="relative h-100 xs:w-2/5 w-2/5" >
            <Image src={src} layout="fill" objectFit="contain" quality={100} />
          </div>
          <div className="flex xs:flex-col xs:w-3/5 sm:w-4/5 md:w-3/5 mx-5 justify-evenly h-100 ">
            <h1 className="sm:text-3xl md:text-4xl lg:text-5xl text-white font-title2 font-bold">{data.header}</h1>
            <p className="font-light text-white sm:text-l md:text-xl">{data.content}</p>
            <button className="bg-deepGreen shadow-xl w-button text-peach hover:text-pink py-3 px-5 rounded">{data.cta}</button>
          </div>
        </div>
      }
    </>
  )
}

