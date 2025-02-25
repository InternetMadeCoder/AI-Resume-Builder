import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    console.log("Sign Up Data:", data);
    alert("Signed Up Successfully!");
    navigate("/signin");
  };

  return <AuthForm isSignUp={true} onSubmit={handleSignUp} />;
};

export default SignUp;
