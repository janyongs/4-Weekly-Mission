import styles from "./foledePage.module.scss";
import { useState, useEffect } from "react";
import { favoriteListDataType } from "@/src/types/folderListTypes";
import { folderListDataType } from "@/src/types/folderListTypes";
import { useFolderList } from "@/src/hooks/useFolderList";
import { AddLink } from "@/src/components/folder/AddLink";
import { FolderSearchBar } from "@components/folder/FolderSearchBar";
import { SearchResult } from "@components/folder/SearchResult";
import { FavoriteList } from "@components/folder/FavoriteList";
import { TitleBar } from "@/src/components/titlebar/TitleBar";
import { EmptyList } from "@/src/components/list/EmptyList";
const FolderPage = () => {
  const [id, setId] = useState<number | null>(null);
  const [selectItem, setSelectItem] = useState<null | favoriteListDataType>(
    null
  );
  const [filteredResults, setFilteredResults] = useState<folderListDataType[]>(
    []
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const { list } = useFolderList(id);

  const handleChangeFolderId = (target: favoriteListDataType | null) => {
    setId(target?.id ?? null);
    setSelectItem(target ? { ...target } : null);
  };

  useEffect(() => {
    const searchItems = (value: string) => {
      const data = list ?? [];
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setFilteredResults(filteredData);
    };

    list && searchItems(searchInput);
  }, [list, searchInput]);
  return (
    <div className={styles.container}>
      <AddLink />
      <div className={styles.wrapper}>
        <FolderSearchBar handleSearchInput={setSearchInput} />
        <SearchResult searchInput={searchInput} />
        <FavoriteList handleChange={handleChangeFolderId} id={id} />
        <TitleBar selectItem={selectItem} />
        {filteredResults?.length === 0 ? (
          <EmptyList text={"저장된 링크가 없습니다."} />
        ) : null}
      </div>
    </div>
  );
};

export default FolderPage;
