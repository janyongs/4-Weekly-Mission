import DEFAULT_IMAGE from "@assets/image/card-default.png";
import Image from "next/image";
import style from "@components/card/FolderCard.module.scss";

interface CardImageType {
  src: string;
  alt: string;
}

export const CardImage = ({ src, alt }: CardImageType) => {
  return (
    <div>
      <Image
        src={src ?? DEFAULT_IMAGE}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "200px" }}
      />
    </div>
  );
};
