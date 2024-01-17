"use server";

import { getXataClient } from "@/src/xata";
import { log } from "console";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Enter Valid phone number",
  }),
  email:z.string().email()
  ,
  desc: z.string(),
});

export async function QueryPost(values: z.infer<typeof formSchema> | any) {
  "use server";
  console.log(values);

  const xataClient = getXataClient();
  if (values.desc) xataClient.db.records.create(values);
  else {
    const value = {
      name: "General Query",
      phone: values,
      desc: "General Query",
      email:""
    };
    xataClient.db.records.create(value);
}
}
