"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createWebsite } from "@/server/actions/website.action";
import { AddWebsiteValidationSchema } from "@/server/validations/website.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const AddWebsiteForm = () => {
  // 1. Define the form.
  const form = useForm<z.infer<typeof AddWebsiteValidationSchema>>({
    resolver: zodResolver(AddWebsiteValidationSchema),
    defaultValues: {
      websiteName: "",
      websiteUrl: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof AddWebsiteValidationSchema>) {
    const res = await createWebsite({
      websiteName: values.websiteName,
      websiteUrl: values.websiteUrl,
    });

    // Check if response was unsuccessful
    if (!res.success) {
      toast.error(res.message);
      return;
    }

    form.reset();
    toast.success(res.message);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-sm mx-auto"
      >
        <FormField
          control={form.control}
          name="websiteName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>
                Website Name <span className="text-amber-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Website name"
                  className="py-6 text-sm no-focus border shadow-none outline-none focus-visible:border-2"
                />
              </FormControl>

              <FormMessage className="text-start text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="websiteUrl"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>
                Website URL <span className="text-amber-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="shooww.com"
                  className="py-6 text-sm no-focus border shadow-none outline-none focus-visible:border-2"
                />
              </FormControl>

              <FormMessage className="text-start text-red-500" />
            </FormItem>
          )}
        />
        <Button className="mt-4 w-full py-6">Add</Button>
      </form>
    </Form>
  );
};

export default AddWebsiteForm;
