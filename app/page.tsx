import ButtonLink from "./_components/ButtonLink";
import styles from "./page.module.css";
import Image from "next/image";
import { News } from "@/app/_libs/microcms";
import NewsList from "./_components/NewsList";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "記事タイトル",
      category: {
        name: "カテゴリ名",
      },
      publishedAt: "2021-01-01T00:00:00Z",
      createdAt: "2021-01-01T00:00:00Z",
    },
    {
      id: "2",
      title: "記事タイトル",
      category: {
        name: "カテゴリ名",
      },
      publishedAt: "2021-01-01T00:00:00Z",
      createdAt: "2021-01-01T00:00:00Z",
    },
    {
      id: "3",
      title: "記事タイトル",
      category: {
        name: "カテゴリ名",
      },
      publishedAt: "2021-01-01T00:00:00Z",
      createdAt: "2021-01-01T00:00:00Z",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);

  return (
    <>
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

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
