import Link from "next/link";
import SiteLogo from "./ui/site-logo";
import { UserAvatar } from "./user-avatar";

export default function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex justify-between h-14 items-center">
        <Link href="/">
          <SiteLogo />
        </Link>
        <div className="flex gap-2 md:gap-6">
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
