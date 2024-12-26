import NewsList from "../_components/NewsList";
import { getNewsList } from "../_libs/microcms";
import { NEWS_LIST_LIMIT } from "../_constants";
import Pagination from "../_components/Pagination";
import SearchField from "../_components/SearchField";

export const revalidate = 60;

export default async function Home() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
