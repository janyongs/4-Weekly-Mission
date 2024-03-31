//import { useFavoriteList } from "../../hooks/useFavoriteList";
import shared from "@assets/image/share.svg";
import pen from "@assets/image/pen.svg";
import deleteIcon from "@assets/image/delete.svg";
import style from "@components/titlebar/titlebar.module.scss";
import { AlertModal } from "../modal/alert-modal/AlertModal";
import { MODALS_ID } from "@components/titlebar/titleConstant";
import { InputModal } from "@components/modal/input-modal/InputModal";
import { KeyboardEvent, useState } from "react";
import { ShareModal } from "@components/modal/share-modal/ShareModal";
import { favoriteListDataType } from "@/src/types/folderListTypes";
import { modalsIdType } from "@components/titlebar/titleConstant";
import Image from "next/image";

export const TitleBar = ({
  selectItem,
}: {
  selectItem: favoriteListDataType | null;
}) => {
  // const [open, setOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState<modalsIdType | null>(null);
  const [inputModelValue, setInputModalValue] = useState("");

  const handleClick = (id: modalsIdType | null) => {
    setCurrentModal(id);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const closeModal = () => {
    setCurrentModal(null);
  };

  return (
    <div className={style.titlebarContainer}>
      <div>
        <h2>{selectItem?.name ?? "전체"}</h2>
      </div>
      <div className={style.titlebarMenu}>
        <div onClick={() => handleClick(MODALS_ID.share as modalsIdType)}>
          <Image width={19} src={shared} alt="" />
          공유
        </div>
        <div onClick={() => handleClick(MODALS_ID.rename as modalsIdType)}>
          <Image width={19} src={pen} alt="" />
          이름 변경
        </div>
        <div onClick={() => handleClick(MODALS_ID.delete as modalsIdType)}>
          <Image width={19} src={deleteIcon} alt="" />
          삭제
        </div>
      </div>

      <ShareModal
        isOpen={currentModal === MODALS_ID.share}
        // title="폴더 공유"
        description={selectItem?.name}
        onKakaoClick={closeModal}
        onFacebookClick={closeModal}
        onLinkCopyClick={closeModal}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
      <InputModal
        isOpen={currentModal === MODALS_ID.rename}
        title="폴더 이름 변경"
        placeholder="내용 입력"
        buttonText="변경하기"
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
        value={inputModelValue}
        onChange={setInputModalValue}
      />
      <AlertModal
        isOpen={currentModal === MODALS_ID.delete}
        title="폴더 삭제"
        description={selectItem?.name}
        buttonText="삭제하기"
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
        onClick={closeModal}
      />
    </div>
  );
};
