import React from "react";
import Section from "./Section";
import { socials } from "../constant";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <footer className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col" role="contentinfo">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <p className="caption text-n-4 lg:block">
          Designed &amp; Developed by{" "}
          <a
            href="https://www.infirexa.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-color-1 transition-colors"
          >
            Infirexa
          </a>
        </p>

        <ul className="flex gap-5 flex-wrap" aria-label="Social media links">
          {socials.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                aria-label={`Visit our ${item.title} page`}
              >
                <img src={item.iconUrl} width={16} height={16} alt="" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </Section>
  );
};

export default Footer;
