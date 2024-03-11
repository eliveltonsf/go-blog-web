import React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export default function Menu({
  ...rest
}: NavigationMenuProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <NavigationMenu {...rest}>
      <NavigationMenuList className="hidden sm:flex sm:gap-32">
        <NavigationMenuItem>
          <Link href="/feed" legacyBehavior passHref>
            <NavigationMenuLink className="hover:text-primary">
              Notícias
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
