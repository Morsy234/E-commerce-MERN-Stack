// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// const backendUrl = 'http://localhost:4000'

// const Login = () => {
//   const [currentState, setCurrentState] = useState("Login");
//   const { token, setToken, navigate } = useContext(ShopContext);
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
    

//     try {
//       if (currentState === "Sign Up") {
//         const response = await axios.post(backendUrl + "/api/users/register", {
//           name,
//           email,
//           password,
//         });
//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem("token", response.data.token);
//           console.log(response.data.success)
//         } else {
//           toast.error(response.data.message);
//         }
//       } else {
//         const response = await axios.post(backendUrl + "/api/users/login", {
//           email,
//           password,
//         });
//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem("token", response.data.token);
//         } else {
//           toast.error(response.data.message);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };
//   useEffect(() => {
//     if (token) {
//       navigate("/");
//     }
//   }, [token]);
//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
//     >
//       <div className=" inline-flex items-center gap-2 mb-2 mt-10">
//         <p className="prata-regular text-3xl">{currentState}</p>
//         <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
//       </div>
//       {currentState === "Login" ? (
//         ""
//       ) : (
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           type="text"
//           className="w-full px-3 py-2  border border-gray-800"
//           placeholder="Name"
//           required
//         />
//       )}
//       <input
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//         type="email"
//         className="w-full px-3 py-2  border border-gray-800"
//         placeholder="Email"
//         required
//       />
//       <input
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//         type="password"
//         className="w-full px-3 py-2  border border-gray-800"
//         placeholder="Password"
//         required
//       />
//       <div className="w-full flex justify-between text-sm mt-[-8px]">
//         <p className="cursor-pointer font-Outfit">Forgot your password</p>
//         {currentState === "Login" ? (
//           <p
//             onClick={() => setCurrentState("Sign Up")}
//             className="cursor-pointer"
//           >
//             Create account
//           </p>
//         ) : (
//           <p
//             onClick={() => setCurrentState("Login")}
//             className="cursor-pointer"
//           >
//             Login here
//           </p>
//         )}
//       </div>
//       <button className="bg-black text-white font-light px-8 py-2 mt-4">
//         {currentState === "Login" ? "Sign In" : "Sign Up"}
//       </button>
//     </form>
//   );
// };

// export default Login;



import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const backendUrl = "http://localhost:4000";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      let response;

      if (currentState === "Sign Up") {
        response = await axios.post(`${backendUrl}/api/users/register`, {
          name,
          email,
          password,
        });
      } else {
        response = await axios.post(`${backendUrl}/api/users/login`, {
          email,
          password,
        });
      }

      // ✅ Handle backend response
      if (response.data.success) {
        const token = response.data.token;
        if (token) {
          setToken(token);
          localStorage.setItem("token", token);

          toast.success(
            currentState === "Login"
              ? "Login successful!"
              : "Account created successfully!"
          );

          navigate("/");
        } else {
          toast.error("No token returned from backend.");
        }
      } else {
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Auth error:", error);
      toast.error(error.response?.data?.message || "Server error");
    }
  };

  // ✅ Restore token if it exists in localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, [setToken]);

  // ✅ Auto redirect when token exists
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Sign Up" && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer font-Outfit">Forgot your password</p>

        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
