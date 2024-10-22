import GoogleLogin from "@/components/shared/GoogleLogin";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const LoginPage = () => {
  return (
    <section className="">
      <MaxWidthWrapper className="flex justify-center items-center">
        <GoogleLogin />
      </MaxWidthWrapper>
    </section>
  );
};

export default LoginPage;
