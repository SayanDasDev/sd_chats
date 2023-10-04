import { generateAvatarFallback } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import { PiPhoneCallBold as Acall } from "react-icons/pi";
import { HiOutlineVideoCamera as Vcall } from "react-icons/hi";
import { BiMessageDots as Msg } from "react-icons/bi";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

import { MdEmail as Mail } from "react-icons/md";
import { IoCall as Phone } from "react-icons/io5";
// import { BsPersonVcard as Bio } from "react-icons/bs";

interface ContactProfileDialogProps {
  name: string;
  nickname?: string;
  avatar?: string;
  status?: string;
  email?: string;
  phoneNo?: string;
}

export default function ContactProfileDialog(props: ContactProfileDialogProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{props.name}</DialogTitle>
        <DialogDescription>{`@${props.nickname || "aaba"}`}</DialogDescription>
      </DialogHeader>
      <Separator />
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <div className="flex flex-col">
          <Avatar className="w-56 h-56 rounded-md">
            <AvatarImage
              className="w-56 h-56 rounded-md border-[6px] border-foreground/10 shadow-md"
              src={props.avatar}
            />
            <AvatarFallback className="w-56 h-56 rounded-md text-4xl">
              {generateAvatarFallback(props.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center gap-1">
            <div className="flex py-2 w-full justify-center">
              <Button
                className="bg-purple-200 w-1/2 flex gap-2 text-purple-800 dark:text-purple-200 hover:bg-purple-300 dark:bg-purple-600 dark:hover:bg-purple-600/75"
                variant="secondary"
              >
                <Msg /> Message
              </Button>
            </div>
            <div className="flex w-full justify-center gap-2">
              <Button
                className="bg-lime-200 w-1/3 text-lime-800 dark:text-lime-200 hover:bg-lime-300 dark:bg-lime-600 dark:hover:bg-lime-600/75"
                variant="secondary"
              >
                <Acall />
              </Button>
              <Button
                className="bg-sky-200 w-1/3 text-sky-800 dark:text-sky-200 hover:bg-sky-300 dark:bg-sky-600 dark:hover:bg-sky-600/75"
                variant="secondary"
              >
                <Vcall />
              </Button>
            </div>
          </div>
        </div>
        <Separator className="hidden sm:block" orientation="vertical" />
        <Separator className="block sm:hidden" />
        <div className="flex gap-2 py-2 text-lg flex-col">
          <div className="flex gap-2 items-center">
            <Mail /> {props.email || "abc@example.com"}
          </div>
          <Separator />
          <div className="flex gap-2 items-center">
            <Phone /> {props.phoneNo || "+91-123456789"}
          </div>
          <Separator />
          <div className="flex flex-col gap-[2px] items-center">
            {/* <div className="flex self-start items-center gap-2">
              <Bio /> Bio
            </div> */}
            <div className="flex w-full line-clamp-3 py-2 px-4 bg-muted-foreground/10 rounded-md text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              aliquam dolor voluptas debitis, vel quasi enim accusantium
              excepturi voluptatem tempora ea cumque ex. Nemo, totam.
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
