"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavigationProps {
  activeItem?: string;
}

export default function Navigation({ activeItem }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle body scroll locking, Escape key, and focus trap
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on open
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        triggerRef.current?.focus();
        return;
      }

      if (e.key === "Tab") {
        if (!dialogRef.current) return;
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!dialogRef.current.contains(document.activeElement)) {
          e.preventDefault();
          firstElement.focus();
          return;
        }

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  const handleClose = () => {
    closeMenu();
    // Return focus to trigger
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 0);
  };

  const navItems = [
    { name: "Our Story", href: "/our-story" },
    { name: "Menu", href: "/menu" },
    { name: "Reservations", href: "/reservations" },
    { name: "Moments", href: "/moments" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-surface/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 hidden lg:flex">
        <div className="flex justify-between items-center px-margin-desktop py-6 max-w-container-max mx-auto w-full">
          <Link href="/" className="flex items-center gap-4 group cursor-pointer">
            <div className="relative h-16 w-16">
              <Image
                src="/images/amit-cafe/logo.jpg"
                alt="Amit Cafe Logo"
                fill
                className="object-contain rounded-sm transition-transform group-hover:scale-105"
                sizes="64px"
              />
            </div>
            <span className="font-headline text-[32px] font-semibold leading-[1.3] tracking-tighter text-primary transition-colors group-hover:text-[#705a4c]">
              Amit Cafe
            </span>
          </Link>

          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`font-body text-[16px] font-semibold transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    activeItem === item.name
                      ? "text-primary after:scale-x-100 after:origin-bottom-left"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/#visit"
            className="font-body text-[12px] uppercase bg-primary text-on-primary px-8 py-4 rounded hover:bg-[#705a4c] hover:shadow-lg transition-all active:scale-95 duration-200 ease-out font-bold tracking-[0.1em]"
          >
            Find Us
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 flex lg:hidden justify-between items-center px-margin-mobile py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10">
            <Image
              src="/images/amit-cafe/logo.jpg"
              alt="Amit Cafe Logo"
              fill
              className="object-contain rounded-sm"
              sizes="40px"
            />
          </div>
          <span className="font-headline text-[22px] font-semibold tracking-tighter text-primary transition-colors group-hover:text-[#705a4c]">
            Amit Cafe
          </span>
        </Link>
        <button
          ref={triggerRef}
          onClick={() => setIsOpen(true)}
          className="text-primary flex items-center justify-center p-2 rounded hover:bg-surface-container-low transition-colors min-w-[44px] min-h-[44px]"
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Full-Screen Overlay Dialog */}
      {isOpen && (
        <div
          ref={dialogRef}
          id="mobile-navigation-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-[60] bg-surface flex flex-col justify-between p-6 sm:p-8"
        >
          {/* Top Bar inside Menu */}
          <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
            <Link href="/" onClick={handleClose} className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/amit-cafe/logo.jpg"
                  alt="Amit Cafe Logo"
                  fill
                  className="object-contain rounded-sm"
                  sizes="40px"
                />
              </div>
              <span className="font-headline text-[22px] font-semibold tracking-tighter text-primary">
                Amit Cafe
              </span>
            </Link>
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              className="text-primary p-2 rounded-full hover:bg-surface-container-low transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div className="my-auto py-8">
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = activeItem === item.name;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={handleClose}
                      className={`font-headline text-[28px] sm:text-[34px] font-semibold tracking-tight transition-colors block py-2 ${
                        isActive
                          ? "text-primary border-l-4 border-primary pl-4"
                          : "text-on-surface-variant hover:text-primary pl-0"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Bottom Action */}
          <div className="border-t border-outline-variant/30 pt-6">
            <Link
              href="/#visit"
              onClick={handleClose}
              className="font-body text-[12px] uppercase bg-primary text-on-primary py-4 px-6 rounded font-bold tracking-[0.1em] text-center w-full block hover:bg-[#705a4c] transition-colors"
            >
              Find Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
