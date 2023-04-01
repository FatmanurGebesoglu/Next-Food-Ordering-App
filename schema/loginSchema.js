import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Geçersiz E-Posta Adresi")
    .required("E-Posta Adresinizi Giriniz"),
    password: Yup.string()
    .required("Şifrenizi Giriniz!")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Şifreniz En Az 8 Karakterden Oluşmalıdır, Bir Büyük Harf, Bir Rakam ve Bir Özel Karakter İçermelidir"
    ),  
//   password: Yup.string()
//     .required("Şifrenizi Giriniz!")
//     .min(8, "Şifreniz En Az 8 Karakterden Oluşmalıdır")
//     .matches(
//       /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
//       "Password must contain at least 8 characters, one uppercase, one number and one special case character"
//     ),
});
