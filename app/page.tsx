import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div>
        <h1 className={styles.top}></h1>
        <p className={styles.title}>テクノロジーの力で世界を変える</p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        width={4000}
        height={1200}
        alt=""
      />
    </section>
  );
}
