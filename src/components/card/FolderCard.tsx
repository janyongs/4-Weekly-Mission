import { convertTime, formatDate } from "@utils/convertTime";
import { useState } from "react";
import { CardImage } from "@components/card/CardImage";
import { KebabMenu } from "./Kebab";
import styled from "styled-components";
import { folderDataType } from "../../types/folderTypes";
import style from "@components/card/FolderCard.module.scss";

const TimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardAtag = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// export const CardContianer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   max-width: 1124px;
//   width: 100%;
//   row-gap: 2rem;
//   column-gap: 25px;
//   justify-content: center;
//   justify-items: center;
//   a {
//     text-decoration: none;
//   }
//   @media (769px< width < 1124px) {
//     grid-template-columns: repeat(2, 1fr);
//     row-gap: 2.5rem;
//     column-gap: 2rem;
//   }
//   @media (width < 768px) {
//     grid-template-columns: repeat(1, 1fr);
//     row-gap: 2.5rem;
//     column-gap: 2rem;
//   }
// `;

// export const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
//   border-radius: 1.5rem;
//   overflow: hidden;
//   width: 340px;
//   align-items: center;
//   transition: all 300ms ease-in;
//   &:hover {
//     background-color: #f0f6ff;
//   }
// `;

interface FolderCard {
  data: folderDataType;
}

export const FolderCard = ({ data }: FolderCard) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`${style.card} ${isHover ? style["card-hover"] : ""}`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <CardAtag href={data?.url} target="blank">
        <CardImage src={data?.imageSource} alt={data?.imageSource} />
        <div className={style.descriptionBox}>
          <TimeBox>
            <div className={style.timeText}>{convertTime(data?.createdAt)}</div>
            <KebabMenu />
          </TimeBox>
          <div className={style.cardDescription}>{data?.description}</div>
          <div className={style.dateText}>{formatDate(data?.createdAt)}</div>
        </div>
      </CardAtag>
    </div>
  );
};

export const FavoriteCard = ({ data }: any) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`${style.card} ${isHover ? style["card-hover"] : ""}`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <CardAtag href={data?.url} target="blank">
        <CardImage src={data?.image_source} alt={data?.image_source} />
        <div className={style.descriptionBox}>
          <TimeBox>
            <div className={style.timeText}>
              {convertTime(data?.created_at)}
            </div>
            <KebabMenu />
          </TimeBox>
          <div className={style.cardDescription}>{data?.description}</div>
          <div className={style.dateText}>{formatDate(data?.created_at)}</div>
        </div>
      </CardAtag>
    </div>
  );
};
