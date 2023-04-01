import * as Yup from "yup";

export const adminSchema = Yup.object({
  username: Yup.string()
    .required("Kullanıcı Adınızı Giriniz").min(3, "Kullanıcı Adınız En Az 3 Karakterden Oluşmalıdır"),
    password: Yup.string()
    .required("Şifrenizi Giriniz!")
    .min(8, "Şifreniz En Az 8 Karakterden Oluşmalıdır")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Şifreniz En Az 8 Karakterden Oluşmalıdır, Bir Büyük Harf, Bir Rakam ve Bir Özel Karakter İçermelidir"
    ),  
});
