"use client";

import React from 'react';
import { useState } from 'react';
import { Menu, X } from "lucide-react";

const FloatingBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="flex items-center justify-between bg-white/90 backdrop-blur-md rounded-full shadow-lg px-9 py-5">
        {/* Logo */}
        <a href="/" className="text-4xl font-bold text-blue-500 shrink-0">
          C
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-lg font-medium text-gray-800">
          <a href="/product" className="hover:text-blue-500 transition-colors">Product</a>
          <a href="/download" className="hover:text-blue-500 transition-colors">Download</a>
          <a href="/testimonials" className="hover:text-blue-500 transition-colors">Testimonials</a>
          <a href="/help" className="hover:text-blue-500 transition-colors">Help</a>
          <a href="/about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="/pricing" className="hover:text-blue-500 transition-colors">Pricing</a>
        </div>

        {/* Buttons - Desktop */}
        <div className="hidden md:flex gap-3 items-center shrink-0">
          <a
            href="/signup"
            className="px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-colors"
          >
            Sign up
          </a>
          <a
            href="/login"
            className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-gray-900 font-medium transition-colors"
          >
            Log in
          </a>
        </div>

        {/* Hamburger - Mobile only */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-full hover:bg-gray-100"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full mt-3 w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-lg py-6 flex flex-col gap-4 items-center text-gray-800 font-medium md:hidden">
          <a href="/product" onClick={() => setMobileOpen(false)} className="py-2">Product</a>
          <a href="/download" onClick={() => setMobileOpen(false)} className="py-2">Download</a>
          <a href="/testimonials" onClick={() => setMobileOpen(false)} className="py-2">Testimonials</a>
          <a href="/help" onClick={() => setMobileOpen(false)} className="py-2">Help</a>
          <a href="/about" onClick={() => setMobileOpen(false)} className="py-2">About</a>
          <a href="/pricing" onClick={() => setMobileOpen(false)} className="py-2">Pricing</a>

          <div className="flex gap-3 pt-4">
            <a
              href="/signup"
              className="px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Sign up
            </a>
            <a
              href="/login"
              className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-gray-900 font-medium"
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