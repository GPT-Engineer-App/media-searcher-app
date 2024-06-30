import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Search = () => {
  const { toast } = useToast();

  const handleVoiceSearch = () => {
    toast({
      title: "Voice Search",
      description: "Voice search functionality will be implemented here.",
    });
  };

  const handleTextSearch = () => {
    toast({
      title: "Text Search",
      description: "Text search functionality will be implemented here.",
    });
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl text-center">Search Media</h1>
      <div className="space-y-4">
        <Button variant="outline" onClick={handleVoiceSearch}>
          Search by Voice
        </Button>
        <div className="flex space-x-2">
          <Input placeholder="Type your search here..." />
          <Button variant="outline" onClick={handleTextSearch}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;