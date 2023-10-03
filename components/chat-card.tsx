import * as React from "react";
import { BiMessageDots as Msg } from "react-icons/bi";
import { PiPhoneCallBold as Acall } from "react-icons/pi";
import { HiOutlineVideoCamera as Vcall } from "react-icons/hi";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ChatCardProps {
  sender: string;
  message: string;
}

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { generateAvatarFallback as gaf } from "@/lib/utils";
import { Badge } from "./ui/badge";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./ui/context-menu";
import { Button } from "./ui/button";

export function ChatCard(props: ChatCardProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Card className="w-full cursor-pointer group hover:scale-95 transition-transform ease-linear duration-150 flex flex-col items-center justify-between px-4 py-6 relative">
          <Badge
            className="absolute bg-purple-200 text-purple-800 dark:text-foreground dark:bg-purple-700 right-3 top-3 group-hover:scale-105 transition-transform ease-linear duration-150"
            variant="secondary"
          >
            999+
          </Badge>
          <Avatar className="w-24 h-24 select-none group-hover:scale-105 transition-transform ease-linear duration-150">
            <AvatarImage className="" src="https://github.com/shadcn.png" />
            <AvatarFallback className="font-semibold text-xl capitalize">
              {gaf(props.sender)}
            </AvatarFallback>
          </Avatar>
          <CardHeader className="px-2 pt-2 pb-0 flex flex-col items-center">
            <CardTitle className="text-center text-xl">
              {props.sender}
            </CardTitle>
            <Badge
              variant="outline"
              className="font-thin text-center w-fit text-foreground/70 capitalize"
            >
              last seen yesterday
            </Badge>
            <CardDescription className="line-clamp-1 w-full select-none">
              {props.message}
            </CardDescription>
          </CardHeader>
        </Card>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem className="focus:bg-transparent text-xl flex justify-between">
          <Button variant="secondary">
            <Msg />
          </Button>
          <Button variant="secondary">
            <Acall />
          </Button>
          <Button variant="secondary">
            <Vcall />
          </Button>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>View Profile</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Pin to top</ContextMenuItem>
        <ContextMenuItem>Clear Messages</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Mute</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>For 1 hour</ContextMenuItem>
            <ContextMenuItem>For 8 hours</ContextMenuItem>
            <ContextMenuItem>For 1 day</ContextMenuItem>
            <ContextMenuItem>For 1 week</ContextMenuItem>
            <ContextMenuItem>Forever</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Block</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
