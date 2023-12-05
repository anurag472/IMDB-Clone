import React from "react";
import Logo from "../MovieLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img src={Logo} alt="logo" className="w-[50px]" />
      <Link to="/" className="text-blue-400">
        Movies
      </Link>
      <Link to="watchlist" className="text-blue-400">
        Watchlist
      </Link>
    </div>
  );
}

export default Navbar;
