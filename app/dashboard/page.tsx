import { isAuthenticated } from "@/Utils/Auth";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Records, columns } from "./columns";
import { getXataClient } from "@/src/xata";
import { DataTable } from "./data-table";

async function getData(): Promise<Records[] | any> {
  // Fetch data from your API here.
  const xataClient = getXataClient();
  const records = await xataClient.db.records.getAll();
  let rec: any[] = [];
  records.map((id) => {
    rec.push({
      id: id.id,
      name: id.name,
      phone: id.phone,
      desc: id.desc,
      email: id.email,
    });
  });
  if (records) return rec;
}

const Dashboard = async () => {
  //   useLayoutEffect(() => {
  //     const isAuth = isAuthenticated;
  //     if (!isAuth) {
  //       redirect("/");
  //     }
  //   }, []);

  const data = await getData();
  console.log(data)
  const reversedData = data.slice().reverse();
  console.log(reversedData);
  
  return (
    <div className=" min-h-screen">
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={reversedData} />
      </div>
    </div>
  );
};

export default Dashboard;
