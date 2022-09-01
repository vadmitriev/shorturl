import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

interface SearchProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({
  placeholder = "Поиск контактов",
  onSearch,
}) => {
  return (
    <Input
      prefix={<SearchOutlined />}
      onChange={(e) => onSearch(e.target.value)}
      placeholder={placeholder}
      allowClear
    />
  );
};

export default Search;
