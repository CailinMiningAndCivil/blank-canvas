import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarCheck } from "lucide-react";

export function useLocationNoticeDialog() {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
}

export function LocationNoticeDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-primary" />
            Appointment Required
          </DialogTitle>
          <DialogDescription className="pt-2 text-left">
            We do not allow on-site visits or walk-ins. All visits must be by
            appointment or through course bookings.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-2">
          <Button asChild variant="hero">
            <Link to="/book" onClick={() => onOpenChange(false)}>
              <CalendarCheck className="w-4 h-4 mr-2" />
              Book a Course
            </Link>
          </Button>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
