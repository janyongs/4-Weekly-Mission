import style from "./EmptyList.module.scss";

export const EmptyList = ({ text }: { text: string }) => {
  return <div className={style.emptyBox}>{text}</div>;
};
