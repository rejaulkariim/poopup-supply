import AddWebsiteModal from "@/components/shared/AddWebsiteModal";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const WebsiteDetailsPage = () => {
  const popups = [
    {
      name: "Shooww",
      message: "Shooww is a new way to turn visitors into customers",
      time: "3 minutes ago",
    },
    {
      name: "Shooww",
      message: "Shooww is a new way to turn visitors into customers",
      time: "3 minutes ago",
    },
    {
      name: "Shooww",
      message: "Shooww is a new way to turn visitors into customers",
      time: "3 minutes ago",
    },
  ];

  return (
    <section className="py-10">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-xl">0 Popup Notification</h3>
          </div>
          <div>
            <AddWebsiteModal />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {popups.map((popup) => (
            <div key={popup.name} className="border p-6 rounded-2xl bg-card">
              <h3 className="font-bold text-lg">{popup.name}</h3>
              <p>{popup.message}</p>
              <p className="text-sm">{popup.time}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default WebsiteDetailsPage;
