import * as Yup from 'yup'; 

export const reservationSchema = Yup.object({
    fullName: Yup.string().required('Adınızı ve Soyadınızı Giriniz').min(3, 'Adınız ve Soyadınız En Az 3 Karakterden Oluşmalıdır'),
    email: Yup.string().email('Geçersiz E-Posta Adresi').required('E-Posta Adresinizi Giriniz'),
    phoneNumber: Yup.string().required('Telefon Numaranızı Giriniz').min(10, 'Telefon Numaranız En Az 10 Karakterden Oluşmalıdır'),
    date: Yup.date().required('Tarih Seçiniz'),
    persons: Yup.number().required('Kişi Sayısını Giriniz').min(1, 'Kişi Sayısı En Az 1 Olmalıdır'),
})