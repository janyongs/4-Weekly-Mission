import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "@components/form/singup/SignUpForm.module.scss";
import eyeOn from "@assets/image/eye-on.svg";
import eyeOff from "@assets/image/eye-off.svg";
import { axiosInstance } from "@hooks/axiosInstance";
import kakao from "@assets/image/kakao.svg";
import google from "@assets/image/google.svg";
import { AxiosError } from "axios";
import { ErrorOption } from "react-hook-form";
interface Inputs {
  email: string;
  password: string;
  passwordCheck: string;
  // checkEmailExists: number;
}

export const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm<Inputs>({ mode: "onBlur" });
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkEmailExists = async (email: string) => {
    try {
      const check = await axiosInstance.post("/check-email", { email });
      if (check.status === 200) {
        return true;
      }
      return "서버 오류가 발생했어요.";
    } catch (error: any) {
      if (error?.response) {
        if (error.response.status === 409) {
          return "이미 사용 중인 이메일입니다";
        }
      }
    }
  };

  useEffect(() => {
    const signUp = async () => {
      try {
        const response = await axiosInstance.post("/sign-up", {
          email,
          password,
        });

        if (response.status === 200) {
          router.push("/folder");
        } else {
          alert("회원가입에 실패했습니다.");
        }
      } catch (error) {
        console.error("에러 발생:", error);
        alert("서버 오류가 발생했습니다.");
      }
    };

    if (isSubmitted && Object.keys(errors).length === 0) {
      signUp();
    }
  }, [isSubmitted, errors]);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: Inputs) => {
    setEmail(data.email);
    setPassword(data.password);
  };
  console.log("errors", errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.container}
      noValidate
    >
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="email"
        placeholder="test@email.com"
        {...register("email", {
          required: "이메일은 필수 입력입니다.",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "이메일 형식에 맞지 않습니다.",
          },
          validate: async (value) => await checkEmailExists(value),
        })}
        aria-invalid={
          isSubmitted ? (errors.email ? "true" : "false") : undefined
        }
      />
      <p>{errors?.email?.message}</p>
      <label htmlFor="password">비밀번호</label>
      <div className={styles.passwordBox}>
        <input
          className={styles.passwordInput}
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호를 입력해 주세요."
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])[a-zA-Z\d\S]+$/,
              message: "비밀번호 형식에 맞지 않습니다.",
            },
            minLength: {
              value: 8,
              message: "8자리 이상 비밀번호를 사용하세요.",
            },
          })}
          aria-invalid={
            isSubmitted ? (errors.password ? "true" : "false") : undefined
          }
        />
        <div
          className={styles.eyeButton}
          onClick={handleTogglePasswordVisibility}
        >
          {showPassword ? (
            <Image width={16} height={16} src={eyeOn} alt="eyeOn" />
          ) : (
            <Image width={16} height={16} src={eyeOff} alt="eyeOff" />
          )}
        </div>
      </div>
      {errors.password && <p>{errors.password.message}</p>}

      <label htmlFor="password">비밀번호 확인</label>
      <div className={styles.passwordBox}>
        <input
          className={styles.passwordInput}
          id="passwordCheck"
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호 확인."
          {...register("passwordCheck", {
            required: "비밀번호는 필수 입력입니다.",
            validate: {
              check: (val) => {
                if (getValues("password") !== val) {
                  return "비밀번호가 일치하지 않습니다.";
                }
              },
            },
            minLength: {
              value: 8,
              message: "8자리 이상 비밀번호를 사용하세요.",
            },
          })}
          aria-invalid={
            isSubmitted ? (errors.passwordCheck ? "true" : "false") : undefined
          }
        />
        <div
          className={styles.eyeButton}
          onClick={handleTogglePasswordVisibility}
        >
          {showPassword ? (
            <Image width={16} height={16} src={eyeOn} alt="eyeOn" />
          ) : (
            <Image width={16} height={16} src={eyeOff} alt="eyeOff" />
          )}
        </div>
      </div>
      {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}
      <button type="submit" disabled={isSubmitting}>
        회원가입
      </button>
      <div className={styles.social}>
        다른 방식으로 가입하기
        <div>
          <Link href={"https://www.google.com"}>
            <Image src={google} alt="구글" />
          </Link>
          <Link href={"https://www.kakaocorp.com/page"}>
            <Image src={kakao} alt="카카오" />
          </Link>
        </div>
      </div>
    </form>
  );
};
