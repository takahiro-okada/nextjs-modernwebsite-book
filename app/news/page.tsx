import NewsList from "../_components/NewsList";
import { getNewsList } from "../_libs/microcms";

export default async function Home() {
  const { contents: news } = await getNewsList({ limit: 3 });

  return <NewsList news={news} />;
}
