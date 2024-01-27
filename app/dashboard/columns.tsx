import { ColumnDef } from "@tanstack/react-table";

export type Records = {
  id: string;
  name: string;
  phone: string;
  desc: string;
  email:string
};

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone No",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "desc",
    header: "Description",
  },
  
];
