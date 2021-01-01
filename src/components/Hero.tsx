import React, { FC } from 'react';
import { HeroData } from '../pages/index'

interface Props {
  data: HeroData;
}

const Hero: FC<Props> = ({ data }) => {

  const backgroundImageStyles = {
    background: "url(https://i.imgur.com/fDJvUeX.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }

  return (
    <div
      className="flex xs:flex-col sm:flex-row items-center sm:items-stretch justify-between px-2 py-7 sm:p-10 sm:h-1/2 h-5/6 my-20 max-h-mobile min-h-mobile sm:min-h-full"
      style={backgroundImageStyles} >
      <h1 className="sm:hidden text-2xl text-white font-title font-bold mx-0">{data.header}</h1>
      <img
        className="h-100 w-4/5 sm:w-2/5 object-contain"
        src={data.src}
        alt="star map" />
      <div className="flex xs:flex-col items-center sm:items-start lg:items-center w-4/5 md:w-3/5 sm:m-5  justify-around h-100">
        <h1 className="hidden sm:block  sm:text-3xl md:text-4xl lg:text-5xl text-white font-title font-bold">{data.header}</h1>
        <p className="w-6/5 text-sm md:text-xl font-light text-white sm:text-l  sm:my-2 md:my-5">{data.content}</p>
        <button className="bg-deepGreen shadow-xl w-button text-peach hover:text-pink py-3 px-5 my-5 sm:my-2 rounded">{data.cta}</button>
      </div>
    </div>
  )
}

export default Hero
