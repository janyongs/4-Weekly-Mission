import { useState } from "react";
import kebabImg from "@assets/image/kebab.svg";
import style from "./kebab.module.scss";
import Image from "next/image";
export const KebabMenu = () => {
  const [kebab, setKebab] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setKebab(!kebab);
  };

  return (
    <div>
      <Image
        onClick={handleClick}
        src={kebabImg}
        alt=""
        width={21}
        height={17}
      />
      {kebab && (
        <div className={style.kebab_menu}>
          <div>삭제하기</div>
          <div>폴더에 추가</div>
        </div>
      )}
    </div>
  );
};
