import LINK_LOGO from "../../assets/image/link.svg";
import { useGetFolders } from "../../hooks/useGetFolders";
import folderInfoStyle from "@components/folder/folderInfo.module.scss";
import addLinkStyle from "@components/folder/addLink.module.scss";
import { AddLinkModal } from "@components/modal/add-link-modal/AddLinkModal";
import { KeyboardEvent, useState } from "react";
import Image from "next/image";

export const AddLink = () => {
  const [open, setOpen] = useState(false);
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const closeModal = () => {
    setSelectedFolderId(null);
    setOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  return (
    <div className={folderInfoStyle.infoContainer}>
      <div className={addLinkStyle.linkFlexBox}>
        <div className={addLinkStyle.linkAddInputBox}>
          <div className={addLinkStyle.linkAddInputFlexBox}>
            <Image src={LINK_LOGO} alt="" />
            <input placeholder="링크를 추가해보세요" />
          </div>
          <button
            className={addLinkStyle.addButton}
            onClick={() => setOpen(!open)}
          >
            추가하기
          </button>
        </div>
      </div>
      <AddLinkModal
        isOpen={open}
        folders={folders}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
        selectedLinkUrl=""
      />
    </div>
  );
};
