import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react';
import axiosApp from 'axios'

const Home = () => {

  const[data, setData] = useState([])
  useEffect(() => {
    console.log('here2');
    fetch("api/allUsers").then(response => response.json())
    .then(data => {
      setData(data)
    });
  }, []);

  return (
    <div>
      <h1>My name is {data.map((e,i)=>{
        const {id, email, name} = e
        return name
      })}</h1>
    </div>
  );
}
export default Home