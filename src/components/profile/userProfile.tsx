import styles from "@components/profile/userProfile.module.scss";
import Image from "next/image";

interface Type {
  email: string;
  imageSrc: string;
}

export const UserProfile = ({ email, imageSrc }: Type) => {
  return (
    <div className={styles.profile}>
      <Image width={28} height={28} src={imageSrc} alt={imageSrc} />
      <p className={styles.profileEmail}>{email}</p>
    </div>
  );
};
