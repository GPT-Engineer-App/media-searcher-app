import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import ReactPlayer from "react-player";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Search = () => {
  const { toast } = useToast();
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState({ genre: "", releaseDate: "", popularity: "" });

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
    // Mock search results
    setSearchResults([
      { id: 1, title: "Sample Media 1", url: "https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3" },
      { id: 2, title: "Sample Media 2", url: "https://www.sample-videos.com/audio/mp3/wave.mp3" },
    ]);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
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
        <div className="flex space-x-2">
          <Select onValueChange={(value) => handleFilterChange("genre", value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pop">Pop</SelectItem>
              <SelectItem value="rock">Rock</SelectItem>
              <SelectItem value="jazz">Jazz</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => handleFilterChange("releaseDate", value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Release Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => handleFilterChange("popularity", value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Popularity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-4">
        {searchResults.map((result) => (
          <div key={result.id} className="flex flex-col items-center">
            <h2>{result.title}</h2>
            <ReactPlayer url={result.url} controls width="100%" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;