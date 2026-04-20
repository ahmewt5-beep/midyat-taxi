import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function Hakkimizda() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-20 px-4 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 font-semibold mb-8 transition-colors">
          <ChevronLeft size={20} /> Ana Sayfaya Dön
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight dark:glow-text">Hakkımızda</h1>
        
        <div className="bg-white dark:bg-slate-900/60 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">Midyat'ın Güvenilir Ulaşım Yüzü: Metin Kaptan</h2>
          <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Yılların verdiği tecrübe ve esnaflık ahlakıyla Midyat Taksi olarak, hemşehrilerimize ve Midyat'ı ziyarete gelen misafirlerimize 7 gün 24 saat kesintisiz ve dürüst taksi hizmeti sunmaktayız.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Amacımız sadece sizi bir noktadan diğerine ulaştırmak değil; ailenizle, sevdiklerinizle güven içinde, konforlu bir yolculuk deneyimi yaşamanızı sağlamaktır.
          </p>
          <h3 className="text-xl font-bold mb-4 mt-8 text-slate-800 dark:text-slate-200">Vizyonumuz</h3>
          <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Bölgenin en güvenilir, en temiz ve en saygın ulaşım markası olmak. Turistik gezilerden, acil hastane ulaşımlarına kadar her anınızda bir telefon kadar yakınınızda bulunmak.
          </p>
        </div>
      </div>
    </main>
  );
}
