import { Client } from "@notionhq/client";

// 初始化 Notion 客户端
const notion = new Client({ auth: process.env.NOTION_API_KEY }); // 使用你的 Notion API 密钥
console.log(JSON.stringify(notion, null, 2));
aaaa;
// 设置数据库 ID
const databaseId = "your-database-id"; // 在 Notion 中找到你的数据库 ID

// 更新数据库中的一个页面
export const updateDatabase = async (properties) => {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: properties.name, // 将传入的名字更新到数据库中
              },
            },
          ],
        },
        Status: {
          select: {
            name: properties.status, // 更新状态
          },
        },
        Date: {
          date: {
            start: properties.date, // 设置日期
          },
        },
      },
    });

    console.log("Page created: ", response);
    return response;
  } catch (error) {
    console.error("Error creating page: ", error);
  }
};
