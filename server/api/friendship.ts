import { parse } from "csv-parse/sync";
import { z } from "zod";

const csvObjectSchema = z.object({
  '時間戳記': z.string(),
  '網站名字': z.string(),
  '網站描述': z.string(),
  '個人網站連結': z.url(),
  '頭貼/Logo 連結': z.url(),
  '上架': z.enum(['TRUE', 'FALSE']).transform(value => value === 'TRUE'),
}).transform((obj) => ({
  name: obj['網站名字'],
  description: obj['網站描述'],
  url: obj['個人網站連結'],
  avatar: obj['頭貼/Logo 連結'],
}));

const csvListSchema = z.array(csvObjectSchema);

export default defineCachedEventHandler(async (event) => {
  const { friendshipGoogleSheetId, friendshipGoogleSheetName } = useRuntimeConfig(event);

  // Headers: 時間戳記, 網站名字, 網站描述, 個人網站連結, 頭貼/Logo 連結, 上架
  // Query: select * where F = true (F is the "上架" column)
  const url = `https://docs.google.com/spreadsheets/d/${friendshipGoogleSheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(friendshipGoogleSheetName)}&tq=select%20*%20where%20F%20%3D%20true`;

  try {
    const response = await $fetch<string>(url, {
      method: "GET",
      responseType: "text",
    });
    const parsedResult = parse(response, { columns: true });

    const records = csvListSchema.parse(parsedResult);

    return records;
  } catch (error) {
    console.error("Error fetching friendship data:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch friendship data",
    });
  }
}, {
  maxAge: 15 * 60, // 15 minutes
  staleMaxAge: 60 * 60 * 24, // 24 hours
});
