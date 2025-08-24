import * as React from "react";
import { SearchSkill } from "./ui/search-skill";

export function HeroImage() {
  return (
    <div className="w-full border-b pb-6 bg-[url('/avatar-hero-image.avif')] min-h-[min(100vh,900px)] bg-center bg-no-repeat bg-cover flex items-center">
      <div className="container flex max-w-7xl items-center mx-auto px-3 sm:px-0 h-full">
        <div className="flex max-w-2xl flex-col space-y-6">
          <div className="space-y-9 w-full">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl text-white">
              Start your <span className="italic font-serif">internship</span>{" "}
              from anywhere, anytime
            </h1>

            <SearchSkill />
          </div>
        </div>
      </div>
    </div>
  );
}
