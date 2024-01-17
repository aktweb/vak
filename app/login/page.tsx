"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";


const LoginPage = () => {
    const { toast } = useToast();

  const router = useRouter();
  async function loginAuth(formdata: FormData) {
    if (
      formdata.get("username") === "admin@123" &&
      formdata.get("password") === "admin@vak"
    ) {
      router.push("/dashboard");
    } else {
      toast({
        title: "Incorrect Password",
        description: "This Page is only for admin",
      });
      router.push("/login");
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
            <label htmlFor="password">Enter Password : </label>
            <input
              type="password"
              name="password"
              id=""
              className="w-1/2 border-2 rounded-sm h-8 text-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-[#fe9030] rounded-md p-1 justify-center cursor-pointer w-1/4 ms-4"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <span></span>
    </>
  );
};

export default LoginPage;
