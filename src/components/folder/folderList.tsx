import { folderDataType } from "../../types/folderTypes";
import { FolderCard } from "@components/card/FolderCard";
import styled from "@components/folder/folderList.module.scss";

interface FolderList {
  list: folderDataType[];
}

export const FolderList = ({ list }: FolderList) => {
  return (
    <div className={styled.container}>
      {list?.map((v) => (
        <FolderCard key={`${v.id}`} data={v} />
      ))}
    </div>
  );
};
