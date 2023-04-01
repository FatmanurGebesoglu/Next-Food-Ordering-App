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
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Şifreniz En Az 8 Karakterden Oluşmalıdır, Bir Büyük Harf, Bir Rakam ve Bir Özel Karakter İçermelidir"
    ),
  confirmPassword: Yup.string()
    .required("Şifrenizi Tekrar Giriniz!") 
    .oneOf([Yup.ref("password"), null], "Şifreler Eşleşmiyor"),
});
