import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">

        <Link to='/'>
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Aashirwad</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        </Link>
        <form className="bg-slate-200 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
           
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
          <li className="hidden sm:inline text-slate-700 hover:underline"> About</li>
          <li className="hidden sm:inline text-slate-700 hover:underline">Sign in</li>
        </ul>
      </div>
    </header>
  );
}
