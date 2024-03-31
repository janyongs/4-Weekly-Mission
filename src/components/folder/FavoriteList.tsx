import style from "@components/folder/FavoriteList.module.scss";
import { useFavoriteList } from "../../hooks/useFavoriteList";
import styled from "styled-components";
import { favoriteListDataType } from "../../types/folderListTypes";
interface IFavoriteButton {
  selected: boolean;
}
const FavoriteButton = styled.div<IFavoriteButton>`
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 1.6rem;

  border: 1px solid var(--primary);
  &:hover {
    background-color: ${(props) =>
      props.selected ? "var(--primary)" : "var(--gray10)"};
  }
  background-color: ${(props) => (props.selected ? "var(--primary)" : "#fff")};
  color: ${(props) => (props.selected ? "var(--white)" : "var(--black)")};
  transition: all 0.3s ease-in;
`;

interface IFavoriteList {
  handleChange: (v: favoriteListDataType | null) => void;

  id: null | number;
}

export const FavoriteList = ({ handleChange, id }: IFavoriteList) => {
  const { favoriteList } = useFavoriteList();

  return (
    <div className={style.favoriteWrapper}>
      <FavoriteButton selected={id === null} onClick={() => handleChange(null)}>
        전체
      </FavoriteButton>
      {favoriteList?.map((v) => (
        <FavoriteButton
          key={v.id}
          selected={id === v.id}
          onClick={() => handleChange(v)}
        >
          {v.name}
        </FavoriteButton>
      ))}
    </div>
  );
};
