import { Client } from "@notionhq/client";
import { config } from "dotenv";

config();

async function main() {
  // 读取环境变量
  const date = new Date(1728272654618);
  const month = date.getMonth();
  console.log(month);

  // const NOTION_API_KEY = process.env.NOTION_API_KEY;
  // const NOTION_PAGE_ID = process.env.NOTION_PAGE_ID;
  // const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

  // // 初始化 Notion 客户端
  // const notion = new Client({ auth: process.env.NOTION_API_KEY });

  // const { results } = await notion.databases.query({
  //   database_id: NOTION_DATABASE_ID,
  // });
  // const pageIds = results.map((page) => page.id);

  // for (const pageId of pageIds) {
  //   const {
  //     child_page: { title },
  //   } = await notion.blocks.retrieve({ block_id: pageId });
  //   console.log(title);
  // }
  // console.log(results);
  //   // 获取页面信息
  //   const response = await notion.blocks.retrieve({ block_id: NOTION_PAGE_ID });

  //   // 输出页面信息
  //   console.log(response);
}

main();
