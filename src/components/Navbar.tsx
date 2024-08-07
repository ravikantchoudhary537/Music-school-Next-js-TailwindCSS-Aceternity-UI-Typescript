"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem item="Home" setActive={setActive} active={active} />
        </Link>
        <Link href="courses">
        <MenuItem item="Courses" setActive={setActive} active={active}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">All courses</HoveredLink>
            <HoveredLink href="/interface-design">Basic music thoery</HoveredLink>
            <HoveredLink href="/seo">Song writing</HoveredLink>
            <HoveredLink href="/branding">Music Production</HoveredLink>
          </div>
        </MenuItem>
        </Link>
        <Link href="/contact">
          <MenuItem item="Contact" setActive={setActive} active={active} />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
