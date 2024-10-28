import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import AddWebsiteForm from "./AddWebsiteForm";

const AddWebsiteModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Website</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new website</DialogTitle>
        </DialogHeader>
        <AddWebsiteForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddWebsiteModal;
