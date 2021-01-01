import React from 'react';
import Hero from "../components/Hero";

export default function Home({data}) {

  
  return (
    <div className="xs:px-0 sm:px-10 container flex items-start mx-auto h-screen">
      <Hero
        data={data}
        src="/images/hero.png" />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/cms`)
  const data = await res.json()

  return {
    props: {
      data: data
    }
  }
}