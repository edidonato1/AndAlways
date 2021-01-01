import React from 'react';
import Hero from "../components/Hero";

interface HeroData {
  header: string;
  content: string;
  cta: string;
  src: string;
}

interface Props {
  data: HeroData;
}

export default function Home(props: Props) {
  const { data } = props;

  return (
    <div className="px-0 sm:px-10 container flex items-start mx-auto h-screen">
      <Hero
        data={data} />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/cms`);
  const data = await res.json();

  return {
    props: {
      data: data,
    }
  }
}