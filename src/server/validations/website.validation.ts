"use client";

import { z } from "zod";

export const AddWebsiteValidationSchema = z.object({
  websiteName: z
    .string()
    .min(2, { message: "Website name must be at least 2 characters long." })
    .max(15, { message: "Website name cannot exceed 15 characters." }),
  websiteUrl: z.string().refine(
    (url) => {
      // Check if URL does not start with "https://", "http://", or "www." and contains at least a domain name
      const urlPattern = /^(?!https?:\/\/|www\.)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return urlPattern.test(url);
    },
    {
      message:
        "URL should be a valid domain without 'https://', 'http://', or 'www.'",
    }
  ),
});
