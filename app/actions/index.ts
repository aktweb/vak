"use server";
import createSupabaseClient from "@/lib/supabase/server";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Enter Valid phone number",
  }),
  email: z.string().email(),
  desc: z.string(),
});

export async function UploadForm(values: z.infer<typeof formSchema> | any) {
  console.log("IN UPLOAD FORM");
  console.log(values);

  const supabase = await createSupabaseClient();

  const { data, error } = await supabase
    .from("records")
    .insert([
      {
        name: values.name,
        phone: values.phone,
        email: values.email,
        desc: values.desc,
      },
    ])
    .select();
  console.log(data);

  //   const result = await supabase.from("records").insert(values).single;
  return JSON.stringify(data);
}

export async function GetTableData() {
  const supabase = await createSupabaseClient();

  let { data: records, error } = await supabase.from("records").select("*");

  return records
}
