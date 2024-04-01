import styled from "@components/folder/FolderInfo.module.scss";
import { folderType } from "../../types/folderTypes";
import Image from "next/image";

interface FolderInfo {
  folder: folderType | null;
}
export const FolderInfo = ({ folder }: FolderInfo) => {
  if (!folder) {
    return <div className="infoContainer" />;
  }
  return (
    <div className={styled.infoContainer}>
      <div className={styled.infoFlexBox}>
        <div className={styled.infoImage}>
          <Image
            width={60}
            height={60}
            src={folder?.owner?.profileImageSource}
            alt={folder.owner.name}
          />
        </div>
        <div className={styled.infoName}>{folder.owner.name}</div>
        <div className={styled.infoTitle}>{folder.name}</div>
      </div>
    </div>
  );
};
