"use client";

import * as React from "react";
import { BsPerson as ViewProfile } from "react-icons/bs";
import { LuHelpingHand as Support } from "react-icons/lu";
import { BiLogOutCircle as Logout } from "react-icons/bi";
import { AiOutlineInfoCircle as Help } from "react-icons/ai";
import { HiOutlineChatBubbleLeftRight as Chats } from "react-icons/hi2";
import {
  MdOutlineNotificationsNone as Notifications,
  MdOutlineLightMode as Light,
  MdOutlineModeNight as Dark,
  MdStorage as Storage,
} from "react-icons/md";
import {
  IoInvertMode as Mode,
  IoColorPaletteOutline as System,
} from "react-icons/io5";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { generateAvatarFallback as gaf } from "@/lib/utils";
import { useTheme } from "next-themes";

export function UserAvatar() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{gaf(`Sayan Das`)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem>
          <ViewProfile />
          View Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Chats />
            Chats
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Notifications />
            Notifications
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Mode />
              Mode
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <System />
                System
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Light />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Dark />
                Dark
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Storage />
            Storage
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Help />
            Help
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Support />
            Support us
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Logout />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
