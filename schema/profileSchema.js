import * as Yup from "yup";

export const profileSchema = Yup.object({
  fullName: Yup.string()
    .required("İsim Soyisim Zorunludur")
    .min(3, "İsim Soyisim En Az 3 Karakterden Oluşmalıdır"),
  phoneNumber: Yup.string()
    .required("Telefon Numaranızı Giriniz")
    .min(10, " Telefon Numaranız En Az 10 Karakterden Oluşmalıdır"),
  email: Yup.string().required("E-Posta Adresinizi Giriniz").email("Geçersiz E-Posta Adresi"),
  address: Yup.string().required("Adres Zorunludur"),
  job: Yup.string().required("Meslek Zorunludur"),
  bio: Yup.string().required("Hakkımda Zorunludur"),
});