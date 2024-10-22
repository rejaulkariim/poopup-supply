import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { signIn } from "@/lib/auth";

const LoginPage = () => {
  return (
    <section className="w-full">
      <MaxWidthWrapper className="flex justify-center items-center">
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button type="submit">Signin with Google</button>
        </form>
      </MaxWidthWrapper>
    </section>
  );
};

export default LoginPage;
