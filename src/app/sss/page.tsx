import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular (SSS)",
  description:
    "Midyat Taksi hakkında merak ettikleriniz: çalışma saatleri, havalimanı transferi, araç özellikleri, ücretler ve turistik turlar hakkında tüm sorular ve cevaplar.",
  alternates: {
    canonical: "/sss",
  },
  openGraph: {
    title: "SSS | GoMidyat - Midyat Taksi Sıkça Sorulan Sorular",
    description:
      "GoMidyat Midyat Taksi hakkında sık sorulan sorular: 7/24 hizmet, havalimanı transferi, VIP araç ve daha fazlası.",
    url: "https://www.gomidyat.com.tr/sss",
    type: "website",
  },
};

export default function SSS() {
  const faqs = [
    {
      q: "Midyat Taksi'nin telefon numarası nedir?",
      a: "GoMidyat - Midyat Taksi'ye 0546 683 23 17 numaralı telefondan 7 gün 24 saat ulaşabilirsiniz.",
    },
    {
      q: "Çalışma saatleriniz nelerdir?",
      a: "Midyat Taksi olarak 7 gün 24 saat kesintisiz hizmet vermekteyiz. Gece veya gündüz dilediğiniz saatte bizi arayabilirsiniz.",
    },
    {
      q: "Şehir dışına veya Havalimanına transfer yapıyor musunuz?",
      a: "Evet, Mardin Havalimanı, Diyarbakır, Şırnak başta olmak üzere çevre illere ve havalimanlarına özel ve güvenilir transfer (VIP) hizmetimiz bulunmaktadır.",
    },
    {
      q: "Araçlarınız klimalı ve temiz mi?",
      a: "Tüm araçlarımız yüksek model, klimalı ve her yolculuk sonrasında düzenli olarak temizlenen konforlu araçlardır.",
    },
    {
      q: "Turistik rotalar (Dara, Beyazsu, Mor Gabriel vb.) için özel şoförlük hizmetiniz var mı?",
      a: "Evet, Midyat ve çevresindeki tarihi ve turistik bölgelere (Beyazsu, Hasankeyf, Dara Antik Kenti, Mor Gabriel Manastırı) özel turlar düzenliyor ve şoförlük hizmeti sağlıyoruz.",
    },
    {
      q: "Kredi kartı geçerli mi?",
      a: "Ödemelerde IBAN üzerinden havale/EFT işlemlerini kabul ediyoruz. Nakit ödemeler de elbette geçerlidir.",
    },
    {
      q: "Midyat taksi ücretleri ne kadar?",
      a: "Ücretlerimiz güzergah ve mesafeye göre değişmektedir. Net fiyat almak için 0546 683 23 17'yi arayın, ücretsiz fiyat teklifi verelim.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-20 px-4 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 font-semibold mb-8 transition-colors">
          <ChevronLeft size={20} /> Ana Sayfaya Dön
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight dark:glow-text">Sıkça Sorulan Sorular</h1>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900/60 p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{faq.q}</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
