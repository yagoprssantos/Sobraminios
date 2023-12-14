// ./src/app/components/Sidebar.js

import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Sidebar({ collapsed, toggleSidebar }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full ${
        collapsed ? "w-20" : "w-64"
      } bg-gray-800 transition-width duration-300`}
    >
      <button onClick={toggleSidebar} className="text-white p-2">
        {collapsed ? (
          <MenuIcon className="h-5 w-5" />
        ) : (
          <XIcon className="h-5 w-5" />
        )}
      </button>
      {/* Sidebar content goes here */}
    </div>
  );
}
