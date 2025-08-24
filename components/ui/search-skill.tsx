import { Search } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

export const SearchSkill = () => {
  return (
    <div className="flex max-w-full h-full">
      <Input
        placeholder="Search for skill tests or internships"
        className="bg-white rounded-sm text-foreground focus:outline-none border-0 rounded-r-none h-12 focus-visible:ring-0 flex-1"
      />
      <Button className="rounded-sm rounded-l-none h-12 w-16 flex items-center justify-center">
        <Search strokeWidth={3} className="h-8 w-8" />
      </Button>
    </div>
  );
};
