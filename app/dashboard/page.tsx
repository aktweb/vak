import { isAuthenticated } from "@/Utils/Auth";
import { redirect } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
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
import { XataRecord } from "@xata.io/client";

// async function getData(): Promise<Records[] | any> {
//   // Fetch data from your API here.
//   const xataClient = getXataClient();
//   const records = await xataClient.db.records.getAll();
//   let rec: any[] = [];
//   records.map((id) => {
//     rec.push({
//       id: id.id,
//       name: id.name,
//       phone: id.phone,
//       desc: id.desc,
//       email: id.email,
//     });
//   });
//   if (records) return rec;
// }
const fetchAndUpdateData = async (
  setData: React.Dispatch<React.SetStateAction<XataRecord[]|any>>
) => {
  const xataClient = getXataClient();
  const records = await xataClient.db.records.getAll();

  let rec = records.map((id) => ({
    id: id.id,
    name: id.name,
    phone: id.phone,
    desc: id.desc,
    email: id.email,
  }));

  setData(rec);
};

// const Dashboard = async () => {

//     const [data, setData] = useState([]);

//   //   useLayoutEffect(() => {
//   //     const isAuth = isAuthenticated;
//   //     if (!isAuth) {
//   //       redirect("/");
//   //     }
//   //   }, []);

//   const data = await getData();
//   const reversedData = data.slice().reverse();

//   return (
//     <div className=" min-h-screen">
//       <div className="container mx-auto py-10">
//         <DataTable columns={columns} data={reversedData} />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

const Dashboard: React.FC = () => {
  const [data, setData] = useState<XataRecord[]>([]);

  useEffect(() => {
    // Fetch initial data
    fetchAndUpdateData(setData);

    // Poll for updates every 5 seconds (adjust as needed)
    const pollInterval = setInterval(() => {
      fetchAndUpdateData(setData);
    }, 5000);

    // Cleanup on component unmount
    return () => {
      clearInterval(pollInterval);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-10">
        {/* Render your data here */}
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
