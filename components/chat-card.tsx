import * as React from "react";
import {
  BiMessageDots as Msg,
  BiVolumeMute as Mute,
  BiBlock as Block,
} from "react-icons/bi";
import { PiPhoneCallBold as Acall } from "react-icons/pi";
import {
  TiTickOutline as TickSent,
  TiTick as TickReceived,
} from "react-icons/ti";
import {
  HiOutlineVideoCamera as Vcall,
  HiOutlineClock as TickSending,
} from "react-icons/hi";
import { BsPerson as ViewProfile, BsPinAngle as Pin } from "react-icons/bs";
import { AiOutlineClear as Clear } from "react-icons/ai";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ChatCardProps {
  sender: string;
  avatar: string;
  message: string;
  state?: string;
  newMessageCount?: number;
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
          {props.state === "new" ? (
            <Badge
              className="absolute bg-primary text-primary-foreground hover:bg-primary right-3 top-3 group-hover:scale-105 transition-transform ease-linear duration-150"
              variant="secondary"
            >
              {props.newMessageCount
                ? props.newMessageCount > 999
                  ? "999+"
                  : props.newMessageCount
                : null}
            </Badge>
          ) : null}
          <Avatar className="w-24 h-24 select-none group-hover:scale-105 transition-transform ease-linear duration-150">
            <AvatarImage className="" src={props.avatar} />
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
            <CardContent className="relative p-0 w-full select-none text-muted-foreground">
              {props.state === "new" ? (
                <CardDescription className="text-primary font-bold line-clamp-1">
                  {props.message}
                </CardDescription>
              ) : (
                <>
                  <div className="absolute top-[17.5%]">
                    {props.state === "sent" ? (
                      <TickSent />
                    ) : props.state === "received" ? (
                      <TickReceived />
                    ) : props.state === "seen" ? (
                      <TickReceived className="text-primary" />
                    ) : (
                      <TickSending />
                    )}
                  </div>
                  <CardDescription className="pl-5 line-clamp-1">
                    {props.message}
                  </CardDescription>
                </>
              )}
            </CardContent>
          </CardHeader>
        </Card>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem className="focus:bg-transparent text-xl flex justify-between">
          <Button
            className="bg-purple-200 text-purple-800 dark:text-purple-200 hover:bg-purple-300 dark:bg-purple-600 dark:hover:bg-purple-600/75"
            variant="secondary"
          >
            <Msg />
          </Button>
          <Button
            className="bg-lime-200 text-lime-800 dark:text-lime-200 hover:bg-lime-300 dark:bg-lime-600 dark:hover:bg-lime-600/75"
            variant="secondary"
          >
            <Acall />
          </Button>
          <Button
            className="bg-sky-200 text-sky-800 dark:text-sky-200 hover:bg-sky-300 dark:bg-sky-600 dark:hover:bg-sky-600/75"
            variant="secondary"
          >
            <Vcall />
          </Button>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <ViewProfile />
          View Profile
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Pin />
          Pin to top
        </ContextMenuItem>
        <ContextMenuItem>
          <Clear />
          Clear Messages
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Mute />
            Mute
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>For 1 hour</ContextMenuItem>
            <ContextMenuItem>For 8 hours</ContextMenuItem>
            <ContextMenuItem>For 1 day</ContextMenuItem>
            <ContextMenuItem>For 1 week</ContextMenuItem>
            <ContextMenuItem>Forever</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem className="focus:bg-red-500 focus:text-background dark:focus:bg-red-700 dark:focus:text-foreground">
          <Block />
          Block
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
