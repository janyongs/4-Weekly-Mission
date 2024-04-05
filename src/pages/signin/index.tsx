import { LoginForm } from "@/src/components/form/LoginForm";
import style from "@/src/pages/signin/signin.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "@assets/image/logo.svg";

const SigninPage = () => {
  return (
    <div className={style.container}>
      <Image src={logo} alt="logo" width={210} height={38} />
      <div className={style.link}>
        회원이 아니신가요?
        <Link href="/signup"> 회원 가입하기</Link>
      </div>
      <LoginForm />
    </div>
  );
};

export default SigninPage;
