import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function GizlilikPolitikasi() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-20 px-4 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 font-semibold mb-8 transition-colors">
          <ChevronLeft size={20} /> Ana Sayfaya Dön
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight dark:glow-text">Gizlilik Politikası</h1>
        
        <div className="bg-white dark:bg-slate-900/60 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 space-y-6">
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Midyat Taksi olarak kişisel verilerinizin güvenliğine ve gizliliğine büyük önem veriyoruz. Bu metin, web sitemizi ve hizmetlerimizi kullanırken hangi bilgileri topladığımızı ve bunları nasıl koruduğumuzu açıklamaktadır.
          </p>

          <h2 className="text-2xl font-bold mt-8 text-slate-800 dark:text-slate-200">Toplanan Bilgiler</h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            WhatsApp veya doğrudan telefon aramaları aracılığıyla bizimle paylaştığınız isim, telefon numarası ve konum bilgileriniz, yalnızca size taksi hizmetini sağlamak ve ulaşımınızı koordine etmek amacıyla kullanılmaktadır.
          </p>

          <h2 className="text-2xl font-bold mt-8 text-slate-800 dark:text-slate-200">Bilgilerin Güvenliği ve Paylaşımı</h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Tarafımıza iletilen hiçbir kişisel veri, yasal yükümlülükler haricinde üçüncü şahıslarla, kurumlarla veya reklam şirketleriyle paylaşılmaz/satılmaz. Bilgileriniz yalnızca yolculuğunuzun güvenli ve doğru bir şekilde gerçekleşmesi boyutunda işlenir.
          </p>

          <h2 className="text-2xl font-bold mt-8 text-slate-800 dark:text-slate-200">Çerezler (Cookies)</h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Web sitemiz ziyaretçilerine daha iyi bir deneyim sunmak için temel sistem çerezleri (örneğin açık/koyu tema tercihiniz) haricinde bilgilerinizi takip eden pazarlama çerezleri kullanmamaktadır.
          </p>
        </div>
      </div>
    </main>
  );
}
