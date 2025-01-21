import { AdminLoginForm } from "@/components/forms";
import { Toaster } from "@/components/ui/sonner";

const AdminLogin = () => {
  return (
    <section className="flex-center w-full h-screen flex-col bg-light-700">
      <div className="p-5 bg-light-900 rounded-3xl w-[28rem] flex-center flex-col">
        <h1 className="text-primary-500 text-3xl font-bold">Admin Login</h1>
        <p className="text-md text-light-400 my-2 font-semibold">
          Please login to continue
        </p>
        <AdminLoginForm />
      </div>
      <Toaster />
    </section>
  );
};

export default AdminLogin;
