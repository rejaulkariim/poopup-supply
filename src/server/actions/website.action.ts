"use server";

import { db } from "@/lib/db";
import { getUserFromDB } from "@/server/actions/auth.action";

interface WebsiteProps {
  websiteName: string;
  websiteUrl: string;
}

export async function createWebsite(params: WebsiteProps) {
  const user = await getUserFromDB();
  const { websiteName, websiteUrl } = params;

  if (!user) {
    return { success: false, message: "User not authenticated" };
  }

  try {
    // Check if the website URL already exists
    const existingWebsite = await db.website.findUnique({
      where: { websiteUrl },
    });

    if (existingWebsite) {
      return { success: false, message: "Domain already exists" };
    }

    // Create the website
    const website = await db.website.create({
      data: {
        websiteName,
        websiteUrl,
        authorId: user.id,
      },
    });

    return {
      success: true,
      message: "Website created successfully",
      data: JSON.parse(JSON.stringify(website)),
    };
  } catch (error) {
    console.error("Database error:", error);
    return {
      success: false,
      message: "Database error: failed to create website",
    };
  }
}
