"use client";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  async function loginAuth(formdata: FormData) {
    if (
      formdata.get("username") === "admin@123" &&
      formdata.get("password") === "admin@vak"
    ) {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }

  return (
    <>
      <span className=" flex justify-center m-4 text-xl"> Admin Login </span>
      <div className=" h-80 mb-[400px] flex justify-center ">
        <form
          action={(formdata: FormData) => {
            loginAuth(formdata);
          }}
        >
          <div className="m-3 space-x-3">
            <label htmlFor="username">Enter Username :</label>
            <input
              name="username"
              type="text"
              className="w-1/2 border-2 rounded-sm h-8 text-lg"
            />
          </div>
          <div className="m-3 space-x-3">
            <label htmlFor="password">Enter Password :</label>
            <input
              type="password"
              name="password"
              id=""
              className="w-1/2 border-2 rounded-sm h-8 text-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-[#fe9030] rounded-md p-1 cursor-pointer w-1/4 ms-4"
          >
            Login
          </button>
        </form>
      </div>
      <span></span>
    </>
  );
};

export default LoginPage;
