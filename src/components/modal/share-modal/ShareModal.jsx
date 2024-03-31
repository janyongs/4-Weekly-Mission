import { Modal } from "../Modal";
import { ModalContentDescription } from "../modal-content-description/ModalContentDescription";
import { ModalContentBox } from "../modal-content-box/ModalContentBox";
import { ModalContentTitle } from "../modal-content-title/ModalContentTitle";
import classNames from "classnames/bind";
import styles from "./ShareModal.module.scss";
import KakaoIcon from "@components/modal/share-modal/kakao.svg";
import Image from "next/image";
import FacebookIcon from "@components/modal/share-modal/facebook.svg";
import LinkIcon from "@components/modal/share-modal/link.svg";

const cx = classNames.bind(styles);

export const ShareModal = ({
  isOpen,
  description,
  onKakaoClick,
  onFacebookClick,
  onLinkCopyClick,
  onCloseClick,
  onKeyDown,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>폴더 공유</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <button className={cx("buttons")} onClick={onKakaoClick}>
              <Image width={42} src={KakaoIcon} alt="kakao" />
              <span>카카오톡</span>
            </button>
            <button className={cx("buttons")} onClick={onFacebookClick}>
              <Image width={42} src={FacebookIcon} alt="facebook" />
              <span>페이스북</span>
            </button>
            <button className={cx("buttons")} onClick={onLinkCopyClick}>
              <Image width={42} src={LinkIcon} alt="lnik" />
              <span>링크 복사</span>
            </button>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
