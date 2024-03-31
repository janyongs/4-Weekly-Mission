import style from "./folderSearchBar.module.scss";
import SearcIcon from "@assets/image/search.svg";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
interface ISearchBar {
  handleSearchInput: Dispatch<SetStateAction<string>>;
}

export const FolderSearchBar = ({ handleSearchInput }: ISearchBar) => {
  return (
    <div className={style.searchBarContainer}>
      <div className={style.inputContainer}>
        <div>
          <Image src={SearcIcon} alt={"SearcIcon"} width={16} />
        </div>
        <input
          className={style.searchBarInput}
          placeholder="링크를 검색해 보세요."
          onChange={(e) => handleSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
};
