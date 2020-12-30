import React, {useEffect, useState} from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { getData } from '../services/hero';

function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState({})
  
  useEffect(() => {
    const fetchData = async () => {
      const heroData = await getData();
      setData(heroData)
    }
    fetchData();
    },[])

  return <Component
        data={data}
    {...pageProps} />;
}

export default MyApp;