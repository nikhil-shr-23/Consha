"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const FloatingBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="flex items-center justify-between bg-white/85 backdrop-blur-lg rounded-full shadow-md px-5 py-2.5">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-blue-500 shrink-0">
          C
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-5 text-sm font-medium text-gray-800">
          <a href="/product" className="hover:text-blue-500 transition-colors">Product</a>
          <a href="/download" className="hover:text-blue-500 transition-colors">Download</a>
          <a href="/testimonials" className="hover:text-blue-500 transition-colors">Testimonials</a>
          <a href="/help" className="hover:text-blue-500 transition-colors">Help</a>
          <a href="/about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="/pricing" className="hover:text-blue-500 transition-colors">Pricing</a>
        </div>

        {/* Buttons - Desktop */}
        <div className="hidden md:flex gap-2 items-center shrink-0">
          <a
            href="/signup"
            className="px-4 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-colors text-sm"
          >
            Sign up
          </a>
          <a
            href="/login"
            className="px-4 py-1.5 rounded-full bg-black text-white hover:bg-gray-900 font-medium transition-colors text-sm"
          >
            Log in
          </a>
        </div>

        {/* Hamburger - Mobile only */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5 rounded-full hover:bg-gray-100"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full mt-2 w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-lg py-4 flex flex-col gap-2 items-center text-gray-800 font-medium md:hidden">
          <a href="/product" onClick={() => setMobileOpen(false)} className="py-1">Product</a>
          <a href="/download" onClick={() => setMobileOpen(false)} className="py-1">Download</a>
          <a href="/testimonials" onClick={() => setMobileOpen(false)} className="py-1">Testimonials</a>
          <a href="/help" onClick={() => setMobileOpen(false)} className="py-1">Help</a>
          <a href="/about" onClick={() => setMobileOpen(false)} className="py-1">About</a>
          <a href="/pricing" onClick={() => setMobileOpen(false)} className="py-1">Pricing</a>

          <div className="flex gap-2 pt-3">
            <a
              href="/signup"
              className="px-4 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Sign up
            </a>
            <a
              href="/login"
              className="px-4 py-1.5 rounded-full bg-black text-white hover:bg-gray-900 font-medium text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Log in
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default FloatingBar;
