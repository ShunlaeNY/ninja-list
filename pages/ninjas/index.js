import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  //   console.log(data);

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>NinJa List | List</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <Link
            href={"/ninjas/" + ninja.id}
            key={ninja.id}
            className={styles.single}
          >
            <h3>{ninja.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
