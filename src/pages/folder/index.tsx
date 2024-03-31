import styles from "./foledePage.module.scss";
import { useState, useEffect } from "react";
import { favoriteListDataType } from "@/src/types/folderListTypes";
import { folderListDataType } from "@/src/types/folderListTypes";
import { useFolderList } from "@/src/hooks/useFolderList";
import { AddLink } from "@/src/components/folder/addLink";

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
      <div className={styles.wrapper}></div>
    </div>
  );
};

export default FolderPage;
