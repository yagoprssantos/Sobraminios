import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { SlHome, SlExclamation, SlUser } from "react-icons/sl";

import logo from "@/app/img/logo_sobra.png";

export default function Sidebar({ show, setter }) {
  const router = useRouter();

  // Define our base class
  const className =
    "bg-primarySystemPage p-8 w-[300px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  // Append class based on state of sidebar visiblity
  const appendClass = show ? " ml-0" : " ml-[-300px] md:ml-0";

  // Clickable menu items
  const MenuItem = ({ icon, name, route }) => {
    // Highlight menu item based on currently displayed route
    const colorClass =
      router.pathname === route
        ? "text-white"
        : "text-white/50 hover:text-white";

    return (
      <Link
        href={route}
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div>{name}</div>
      </Link>
    );
  };

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="p-2 flex mb-8">
          <Link href="/sistema/inicio">
            {/*eslint-disable-next-line*/}
            <img src={logo.src} alt="Company Logo" width={300} height={300} />
          </Link>
        </div>
        <div className="flex flex-col">
          <MenuItem
            name="Condomínio"
            route="/sistema/condominios"
            icon={<SlHome />}
          />
          <MenuItem
            name="Ocorrências"
            route="/sistema/ocorrencias/1"
            icon={<SlExclamation />}
          />
          <MenuItem
            name="Usuários"
            route="/sistema/usuarios"
            icon={<SlUser />}
          />
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
