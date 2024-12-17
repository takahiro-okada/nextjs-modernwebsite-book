import styles from "./page.module.css";

export default function Home() {
  return (
    <section>
      <div>
        <h1 className={styles.top}></h1>
        <p className={styles.title}>テクノロジーの力で世界を変える</p>
      </div>
      <img className={styles.bgimg} src="/img-mv.jpg" alt="" />
    </section>
  );
}
