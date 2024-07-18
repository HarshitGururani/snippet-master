import { SignIn } from "@clerk/nextjs";

const SignINPage = () => {
  return (
    <div className={`w-full h-screen flex justify-center items-center`}>
      <SignIn />
    </div>
  );
};
export default SignINPage;
