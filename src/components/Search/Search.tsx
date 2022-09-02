import React from "react";

interface SearchProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({
  placeholder = "Найти ссылку",
  onSearch,
}) => {
  return (
    <input
      onChange={(e) => onSearch(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Search;
