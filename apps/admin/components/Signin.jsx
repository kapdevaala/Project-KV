"use client";
import Image from "next/image";
import link from "@/assets/login-page.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Signin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // State to hold form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log("Incoming Request");
    e.preventDefault();
    setLoading(true);
    

    try {
      const response = await fetch(
        "https://project-kv.onrender.com/api/v1/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(await response.json());
      if (response.ok) {
        router.push("/dashboard");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-[100%] max-w-[1500px]   min-h-[90vh]  flex justify-center items-center  ">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className=" border-red-950  p-2 flex justify-evenly  min-h-[700px] h-[100%] max-w-[1000px] w-[100%]">
          <div className=" border-green-800 max-w-[500px] w-[100%] flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="bg-[#e8d5f8] shadow-md  max-w-[500px] w-full flex flex-col gap-10 items-center  p-6 rounded-3xl h-[100%] text-2xl"
            >
              <h2 className="text-4xl  text-gray-800 mt-10  text-center font-bold">
                Welcome Back
              </h2>
              <div className="w-full">
                <label className="block  font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="w-full">
                <label className="block  font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              {/* <div className="w-full">
              <label className="block font-medium text-gray-700 mb-2">
                Secret-Code
              </label>
              <input
                type="code"
                placeholder="Enter Code"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div> */}
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 cursor-pointer"
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="hidden md:flex ml-4   max-w-[500px] w-[100%] relative">
            <div className="h-[100%] w-[100%] absolute">
              <Image
                src={link}
                alt="logo"
                className="h-[100%] w-[100%] cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
