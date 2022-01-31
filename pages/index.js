import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home({ data }) {
  // console.log(data);
  // data.data && data.data.map(data => {
  //   console.log(data.id);
  // });
  // console.log('í am on the client');
  return <>
    <h1>
      hi everybody
    </h1>

    {data.data && data.data.map(data => (
      <div key={data.id}>
        <h2> {data.attributes.Title}</h2>
        <p>{data.attributes.Content}</p>
      </div>
    ))}

  </>;
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch('http://localhost:1337/api/posts');
  const data = await res.json();

  return {
    props: { data },
  };
}
