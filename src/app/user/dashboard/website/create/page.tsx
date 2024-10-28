import AddWebsiteForm from "@/components/shared/AddWebsiteForm";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const CreateWebsitePage = () => {
  return (
    <section className="flex justify-center items-center min-h-[80vh]">
      <MaxWidthWrapper>
        <AddWebsiteForm />
      </MaxWidthWrapper>
    </section>
  );
};

export default CreateWebsitePage;
