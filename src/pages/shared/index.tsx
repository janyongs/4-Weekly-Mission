import { FolderInfo } from "@/src/components/folder/folderInfo";
import styled from "./SharedPage.module.scss";
import { useEffect, useState } from "react";
import { folderDataType } from "@/src/types/folderTypes";
import { useFolder } from "@/src/hooks/useFolder";
import { FolderSearchBar } from "@/src/components/folder/FolderSearchBar";
import { SearchResult } from "@/src/components/folder/SearchResult";
import { FolderList } from "@/src/components/folder/folderList";

const SharedPage = () => {
  const { folder } = useFolder();

  const [filteredResults, setFilteredResults] = useState<folderDataType[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const searchItems = (value: string) => {
      const data = folder?.links ?? [];
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setFilteredResults(filteredData);
    };

    folder && searchItems(searchInput);
  }, [folder, searchInput]);

  return (
    <div className={styled.container}>
      <FolderInfo folder={folder} />
      <div className={styled.wrapper}>
        <FolderSearchBar handleSearchInput={setSearchInput} />
        <SearchResult searchInput={searchInput} />
        <div className={styled.folderBox}>
          <FolderList list={filteredResults} />
        </div>
      </div>
    </div>
  );
};
export default SharedPage;
