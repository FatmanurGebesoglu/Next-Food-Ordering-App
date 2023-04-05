import * as Yup from "yup";

export const footerSchema = Yup.object({
  location: Yup.string().required("Lokasyon Zorunludur"),
  phoneNumber: Yup.string()
    .required("Telefon Numaranızı Giriniz")
    .min(10, " Telefon Numaranız En Az 10 Karakterden Oluşmalıdır"),
  email: Yup.string()
    .required("E-Posta Adresinizi Giriniz")
    .email("Geçersiz E-Posta Adresi"),
  desc: Yup.string().required("Açıklama Zorunludur"),
  day: Yup.string().required("Tarih Zorunludur"),
  time: Yup.string().required("Saat Zorunludur"),
});
