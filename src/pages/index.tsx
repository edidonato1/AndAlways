import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import Hero from "../components/Hero";

export interface HeroData {
  header: string;
  content: string;
  cta: string;
  src: string;
}

interface Props {
  data: HeroData;
}

const Home: FC<Props> = ({ data }) => {

  return (
    <div className="px-0 sm:px-10 container flex items-start mx-auto h-screen">
      <Hero data={data} />
    </div>
  )
}

export  const getServerSideProps: GetServerSideProps = async() => {
  const res = await fetch(`http://localhost:3000/api/cms`);
  const data = await res.json();

  return {
    props: {
      data: data,
    }
  }
}

export default Home