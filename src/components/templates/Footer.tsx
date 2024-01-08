import React from "react";
import { DefaultLink } from "../atom/Link";

export interface FooterProps {
  wave?: boolean;
}

function Footer() {
  return (
    <footer>
      <div className="mt-8 bg-secondary py-8 text-white">
        <div
          className="container flex flex-col justify-between md:flex-row 
        "
        >
          <div className="mt-3 flex flex-col md:mt-0">
            <h3 className="my-1 text-lg font-bold md:my-0">Reviews</h3>
            <DefaultLink
              name="Best gaming laptops"
              href="/reviews/best-gaming-laptops"
            />
            <DefaultLink
              name="Best gaming laptops under 1000$"
              href="/reviews/best-gaming-laptops-under-1000-usd"
            />
            <DefaultLink
              name="Best gaming laptops under 2000$"
              href="/reviews/best-gaming-laptops-under-2000-usd"
            />
          </div>

          <div className="mt-3 flex flex-col md:mt-0">
            <h3 className="my-1 text-lg font-bold md:my-0">Informations</h3>
            <DefaultLink name="Privacy Policy" href="/policy" />
            <DefaultLink
              name="Terms of Service (ToS)"
              href="/terms-of-service"
            />
            <span>contact@yournextlaptop.com</span>
            <span>© {new Date().getFullYear()} Pierek</span>
            <span>
              As an Amazon Associate, I earn from qualifying purchases.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
