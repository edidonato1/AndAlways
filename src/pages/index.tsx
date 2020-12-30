import React from 'react';
import Hero from "../components/Hero";

export default function Home(props) {
  const { data } = props
    return (
        <div className="xs:px-0 sm:px-10 container flex items-start mx-auto h-screen">
        <Hero
          data={data}
          src="/images/hero.png" />
        </div>
    )
}