import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";

const SignIn = ({ onSuccess }) => {
  const navigate = useNavigate();

  const handleSignIn = (data) => {
    // Here you would typically validate credentials with your backend
    console.log("Sign In Data:", data);

    // Call onSuccess to update authentication state
    onSuccess();

    // Navigate to builder page after successful sign in
    navigate("/builder", { replace: true });
  };

  return <AuthForm isSignUp={false} onSubmit={handleSignIn} />;
};

export default SignIn;
