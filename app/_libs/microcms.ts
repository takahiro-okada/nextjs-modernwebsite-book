import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQuries,
  MicoCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Member = {
  id: string;
  name: string;
  position: string;
  image: MicoCMSImage;
} & MicroCMSListContent;

export type Category = {
  name: string;
} & MicroCMSListContent;

export type News = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: MicoCMSImage;
  createdAt: string;
  category: Category;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required.");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required.");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getMembersList = async (queries?: MicroCMSQuries) => {
  const listData = await client.get<Member>({
    endpoint: "members",
    queries,
  });
  return listData;
};

export const getNewsList = async (queries?: MicroCMSQuries) => {
  const listData = await client.get<News>({
    endpoint: "news",
    queries,
  });
  return listData;
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQuries
) => {
  const detailData = await client.get<News>({
    endpoint: `news`,
    contentId,
    queries,
  });
  return detailData;
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQuries
) => {
  const detailData = await client.get<Category>({
    endpoint: `categories`,
    contentId,
    queries,
  });
  return detailData;
};
