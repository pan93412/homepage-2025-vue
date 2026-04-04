import { z } from "zod";

const friendshipObjectSchema = z.object({
  name: z.string().describe("網站名字"),
  description: z.string().describe("網站描述"),
  url: z.url().describe("個人網站連結"),
  avatar: z.url().describe("頭貼/Logo 連結"),
  published: z.boolean().describe("是否上架"),
});

const friendshipApiSchema = z.array(friendshipObjectSchema);

export default defineCachedEventHandler(async (event) => {
  const { friendshipApiUrl } = useRuntimeConfig(event);

  try {
    const response = await $fetch(friendshipApiUrl, {
      method: "GET",
      redirect: "follow",
    });

    const friendshipData = friendshipApiSchema.parse(response);

    return friendshipData;
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
