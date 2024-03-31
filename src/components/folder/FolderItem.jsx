import styles from "./FolderItem.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Check from "@assets/image/check.svg";
const cx = classNames.bind(styles);

export const FolderItem = ({
  folderName,
  linkCount,
  isSelected = false,
  onClick,
}) => {
  return (
    <button className={cx("button", { isSelected })} onClick={onClick}>
      <span className={cx("name", { isSelected })}>{folderName}</span>
      <span className={cx("count")}>{linkCount}개 링크</span>
      {isSelected && (
        <Image
          width={20}
          height={20}
          className={cx("check")}
          src={Check}
          alt="체크 아이콘"
        />
      )}
    </button>
  );
};
