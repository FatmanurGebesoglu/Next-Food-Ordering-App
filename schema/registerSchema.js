import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .required("Adınızı ve Soyadınızı Giriniz")
    .min(3, "Adınız ve Soyadınız En Az 3 Karakterden Oluşmalıdır"),
  email: Yup.string()
    .email("Geçersiz E-Posta Adresi")
    .required("E-Posta Adresinizi Giriniz"),
  password: Yup.string()
    .required("Şifrenizi Giriniz!")
    .min(8, "Şifreniz En Az 8 Karakterden Oluşmalıdır")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Şifreniz En Az 1 Büyük Harf, 1 Küçük Harf, 1 Rakam ve 1 Özel Karakter İçermelidir"
    ),
  confirmPassword: Yup.string()
    .required("Şifrenizi Tekrar Giriniz!")
    .oneOf([Yup.ref("password"), null], "Şifreler Eşleşmiyor"),
});
