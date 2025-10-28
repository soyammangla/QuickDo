import React from "react";
import Image from "next/image";
import { type User } from "next-auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { AvatarProps } from "@radix-ui/react-avatar";

interface Props extends AvatarProps {
  user?: Pick<User, "name" | "image">; // mark optional for safety
}

const UserAvatar = ({ user, ...props }: Props) => {
  const initials =
    user?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "?";

  return (
    <Avatar {...props}>
      {user?.image ? (
        <div className="relative w-full h-full aspect-square overflow-hidden rounded-full">
          <Image
            fill
            src={user.image}
            alt={user.name || "User avatar"}
            referrerPolicy="no-referrer"
            className="object-cover"
            sizes="40px"
          />
        </div>
      ) : (
        <AvatarFallback className="bg-muted text-sm font-medium">
          {initials}
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
