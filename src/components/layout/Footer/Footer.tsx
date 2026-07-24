"use client";

import Link from "next/link";
import Image from "next/image";
import {
  contactList,
  footerInfo,
  footerSections,
  socialLinks,
} from "@/data/FooterData";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e21] text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 py-10">
          {/* Logo & Contact */}
          <div>
            <div className="mb-5">
              <Image
                src="/images/Logo/logo-white.png"
                alt="Multikart Logo"
                width={160}
                height={40}
                priority
              />
            </div>

            <p className="mb-5 text-sm text-[rgba(255,255,255,0.9)]">
              {footerInfo.description}
            </p>

            <div className="space-y-3 text-sm text-[rgba(255,255,255,0.9)]">
              {contactList.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-start gap-3 hover:text-gray-400"
                  >
                    <Icon
                      size={18}
                      className="mt-0.5 shrink-0 text-[rgba(255,255,255,0.9)] "
                    />
                    <span className="hover:rgba(255,255,255,0.1)">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-sm font-bold tracking-widest text-[rgba(255,255,255,0.9)]">
                {section.title}
              </h3>

              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.url}
                      className=" relative inline-block pb-1 after:absolute after:left-0 after:bottom-0
                                  after:h-[3px] after:w-0 after:bg-[#e06b42] after:transition-all after:duration-300
                                  after:ease-in-out hover:after:w-full " >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold tracking-widest text-[rgba(255,255,255,0.9)]">
              FOLLOW US
            </h3>

            <p className="text-sm text-[rgba(255,255,255,0.9)]">
              Never Miss Anything From Store By Signing Up To Our Newsletter.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-3"
            >
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full bg-white px-4 py-3 text-base text-[#222] outline-none"
              />

              <button
                type="submit"
                className="w-40 py-3 text-lg font-semibold border border-[#f07c53]
    shadow-[inset_1px_1px_0_#000] text-white
    bg-[linear-gradient(30deg,#ec8951_50%,#ffffff_50%)] bg-[length:850px] bg-[position:0_50%]
    bg-no-repeat tracking-[0.71px] transition-[background-position,color,border-color] duration-400 
    ease-in-out hover:bg-[position:100%_50%] hover:text-[#ec8951] hover:border-[#ec8951]"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              {socialLinks.map(({ icon: Icon, platform, url }) => (
                <Link
                  key={platform}
                  href={url}
                  aria-label={platform}
                >
                  <div className="flex h-8 w-8 items-center justify-center bg-[#2d2d31] 
                  transition hover:text-[#f07c53]">
                    <Icon size={18} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#333333]">
        <div className="container mx-auto flex flex-col lg:items-center
         justify-between gap-4 px-4 py-5 text-sm lg:flex-row lg:px-20">
          <span className="text-left">
            © 2024-25 Themeforest Powered by Pixelstrap
          </span>

          <Image
            src="/images/payment.png"
            alt="Payment Methods"
            width={270}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
}