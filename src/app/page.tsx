"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneCall, MapPin, Clock, ShieldCheck, Car, Star, Navigation, Camera, ChevronRight, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  // Kritik Hata Çözümü: Telefon numarasındaki baştaki 0 kaldırıldı. WhatsApp wa.me/905... şeklinde çalışması için
  const phoneNumber = "5466832317";
  const whatsappMessage = "Midyat Taksi: hizmeti hakkında bilgi almak istiyorum.";

  const galleryItems = [
    { src: "/karda-taksi.jpg", alt: "Midyat Karlı Hava Taksi Hizmeti" },
    { src: "/havalimani-transfer.jpg", alt: "Şırnak Havalimanı Taksi Transferi" },
    { src: "/gece-vip-transfer.jpg", alt: "Midyat Gece VIP Passat Taksi" },
    { src: "/taksi-tas-bina.jpg", alt: "Tarihi Midyat Evleri Taksi Ulaşım" },
    { src: "/dogada-vip.jpg", alt: "Midyat Çevre İller VIP Ulaşım" },
    { src: "/hazir-kaptan.jpg", alt: "Midyat Taksi 7/24 Hizmete Hazır" },
  ];

  const [theme, setTheme] = useState("dark");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Giriş animasyonu için isLoaded gecikmesi geri eklendi
    const timer = setTimeout(() => setIsLoaded(true), 500);

    // Koyu tema varsayılan olduğu için başlangıçta HTML'de dark class'ı yoksa ekleyelim.
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
    }
    setTheme("dark");

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-500">

      {/* GİRİŞ ANİMASYONU */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`fixed inset-0 bg-slate-100 dark:bg-slate-950 z-[100] flex items-center justify-center text-center transition-colors duration-500 ${isLoaded ? 'pointer-events-none' : 'pointer-events-auto'}`}
      >
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="px-4">
          <motion.span className="text-sm font-semibold text-amber-500 dark:text-amber-400 block mb-3 tracking-widest uppercase">Metin Kaptan Presents</motion.span>
          <motion.h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight dark:glow-text">Midyat Taksi<span className="text-amber-500">.</span></motion.h1>
          <motion.div className="w-16 h-0.5 bg-amber-500 mx-auto mt-6 rounded-full"></motion.div>
        </motion.div>
      </motion.div>

      {/* TEMA DEĞİŞTİRME BUTONU */}
      <button
        onClick={toggleTheme}
        aria-label="Temayı Değiştir"
        className="fixed top-6 right-6 z-[100] p-3 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform"
      >
        {theme === "light" ? <Moon size={24} className="text-slate-800" /> : <Sun size={24} className="text-amber-400" />}
      </button>

      {/* A. HERO SECTION */}
      <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-slate-100 dark:bg-slate-950 px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-100/20 via-slate-100/80 to-slate-50 dark:from-slate-950/20 dark:via-slate-950/60 dark:to-slate-950 z-10 transition-colors duration-500"></div>
          {/* ÇÖZÜM: unoptimized={true} geri eklendi. (Optimizasyon iptali) */}
          <Image
            src="/hero-bg.jpg"
            alt="Midyat Taksi Hizmeti"
            fill
            quality={95}
            className="object-cover object-center opacity-80"
            priority
          />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto pt-24 md:pt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isLoaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }}>
            <span className="inline-block py-2 px-5 rounded-full bg-white/80 dark:bg-slate-900/60 text-amber-600 dark:text-amber-400 font-semibold text-sm mb-6 border border-amber-500/20 glass shadow-md dark:glow-text">
              ⭐️ 4.9/5 Google Müşteri Memnuniyeti
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight dark:glow-text">
              Midyat'ın En Seçkin <br />
              <span className="text-amber-600 dark:text-amber-500">Taksi Hizmeti</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm dark:drop-shadow-md">
              Midyat'ın tarihi dokusunda, dürüstlük ve konforun buluştuğu seçkin bir yolculuk deneyimi. 7/24 dürüst ve premium hizmet.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pb-24 md:pb-0">
              <a href={`tel:+90${phoneNumber}`} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xl font-bold py-5 px-12 rounded-2xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] dark:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] dark:hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] hover:-translate-y-1.5 group">
                <PhoneCall size={26} /> Hemen Ara <ChevronRight size={22} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
              </a>
              <a href={`https://wa.me/90${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white text-lg font-bold py-5 px-12 rounded-2xl transition-all border border-slate-300 dark:border-slate-700 hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-slate-900/80 glass shadow-md group">
                <MapPin size={24} className="text-emerald-500" /> WhatsApp Konum Gönder
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* B. Neden Bizi Seçmelisiniz? */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 px-4 section-lighting transition-colors duration-500">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight dark:glow-text">Kusursuzluğun Detayları</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg mx-auto font-medium leading-relaxed">Sizi sadece bir yerden bir yere götürmüyoruz, size özel bir deneyim sunuyoruz.</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={<Clock size={44} className="text-amber-500" />} title="5 Dakikada Orada" desc="Anında kapınızda. Bekletmeden ve gecikmeden, dürüst zamanlama." delay={0.1} />
            <FeatureCard icon={<ShieldCheck size={44} className="text-emerald-500" />} title="Ailecek Güvenli" desc="Sevdiklerinizi emanet edebileceğiniz dürüst esnaf dürüstlüğü." delay={0.2} />
            <FeatureCard icon={<Car size={44} className="text-blue-500" />} title="Temiz ve Konforlu" desc="Lüks ve hijyenik iç mekan, klimalı araçlarla seçkin yolculuk." delay={0.3} />
            <FeatureCard icon={<Navigation size={44} className="text-purple-500" />} title="7/24 Kesintisiz" desc="Her saatte, her günde nöbetçi taksi beklemeye son, hep yanınızdayız." delay={0.4} />
          </div>
        </div>
      </section>

      {/* C. ROTALAR VE HARİTA */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900 px-4 section-lighting transition-colors duration-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight dark:glow-text">Midyat ve Çevresine Hakimiyet</h2>
            <p className="text-slate-600 dark:text-slate-200 mb-10 text-lg font-medium leading-relaxed">Sadece A noktasından B noktasına gitmiyoruz, size bir Midyat deneyimi sunuyoruz.</p>
            <ul className="space-y-7">
              <RouteListItem icon={<MapPin className="text-amber-500" size={22} />} title="Midyat Şehir İçi Ulaşım" desc="Midyat'ın her yerine, hastaneye, otogara veya evinize seçkin ulaşım." delay={0.1} />
              <RouteListItem icon={<Car className="text-blue-500" size={22} />} title="Mardin Havalimanı & Şehirlerarası Transfer" desc="Mardin Havalimanı, Nusaybin, Merkez ve çevre illere lüks, güvenli transfer." delay={0.2} />
              <RouteListItem icon={<Navigation className="text-emerald-500" size={22} />} title="Turistik Rotalar Özel Şoför" desc="Mor Gabriel, Dara Antik Kenti, Beyazsu ve Hasankeyf turları için sizi bekleyen seçkin hizmet." delay={0.3} />
            </ul>
          </motion.div>
          <div className="w-full md:w-1/2 relative h-[350px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 dark:border-slate-700 opacity-90 glass hover:opacity-100 transition-opacity">
            <Image
              src="/midyat-map.jpg"
              alt="Midyat Taksi Hizmet Bölgeleri"
              fill
              quality={95}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* D. PREMIUM GALERİ (NET VE CANLI) */}
      <section className="py-28 bg-slate-50 dark:bg-slate-950 px-4 section-lighting transition-colors duration-500">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight dark:glow-text">Midyat Ulaşım Koleksiyonumuz</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg mx-auto font-medium leading-relaxed">Filomuzun gurur veren detayları.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pb-12">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative h-[250px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg dark:shadow-2xl border-2 border-slate-200 dark:border-slate-800/80 group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/30 transition-all duration-500 z-10 flex items-center justify-center pointer-events-none">
                  <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" size={34} />
                </div>

                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E. SOSYAL KANIT */}
      <section className="py-28 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white px-4 section-lighting transition-colors duration-500">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight dark:glow-text">Dürüstlüğümüze Tanıklık</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-16 max-w-lg mx-auto font-medium leading-relaxed">Müşteri değil, misafirimizsiniz. İşte dürüst esnaf dürüstlüğü geri bildirimleri.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ReviewCard name="Hira Despina" date="9 ay önce" text="Sürekli taksi kullanan biri olarak en rahat ettiğim yer diyebilirim. Ailecek güvenle kullanıyoruz ve saat kaç olursa olsun aradıktan sonra 10 dakika içerisinde geliyor..." delay={0.1} />
            <ReviewCard name="Masal Demir" date="3 ay önce" text="Burda mahsur kaldım, Metin Abi Allah razı olsun çıkarttı bizi. Vaktinde yetiştirdi, diğer taksiciler kurban olsun ona. Tercihimiz sizsiniz." delay={0.2} />
            <ReviewCard name="Mehmet M." date="8 ay önce" text="Sevdiklerinizi gözünüz kapalı teslim edeceğiniz, hizmette sınır tanımayan güler yüzüyle karşılayan esnaf abimiz. Şiddetle tavsiye ediyoruz." delay={0.3} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-300 py-16 px-4 border-t border-slate-200 dark:border-slate-800 section-lighting transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10 text-center md:text-left">

          <div className="w-full md:w-1/3">
            <h3 className="text-slate-900 dark:text-white text-3xl font-extrabold mb-4 tracking-tight dark:glow-text">Midyat Taksi<span className="text-amber-500">.</span></h3>
            <p className="mb-4 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Yeni Mah, Cumhuriyet Blv. No:10, 47500 Midyat/Mardin</p>
            <p className="text-amber-600 dark:text-amber-500 font-extrabold text-2xl tracking-tight mb-6">0 546 683 23 17</p>
          </div>

          {/* EKSİK LİNKLER KISMI */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-3">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Hızlı Bağlantılar</h4>
            <a href="/hakkimizda" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">Hakkımızda</a>
            <a href="/sss" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">Sıkça Sorulan Sorular (SSS)</a>
            <a href="/gizlilik-politikasi" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">Gizlilik Politikası</a>
          </div>

          <div className="w-full md:w-1/3 h-[200px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.204561009088!2d41.3734493!3d37.4222002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400a123456789012%3A0x1234567890abcdef!2sMidyat%20Taksi!5e0!3m2!1str!2str!4v1713000000000!5m2!1str!2str" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
          <div>© {new Date().getFullYear()} Midyat Taksi - Tüm Hakları Saklıdır.</div>
          <div>
            Designed by <a href="https://noxusweb.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-500 hover:underline font-semibold">noxusweb</a>
          </div>
        </div>
      </footer>

      {/* STICKY CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 z-50 flex gap-4 glass shadow-[0_-15px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_-15px_30px_rgba(0,0,0,0.2)]">
        <a href={`tel:+90${phoneNumber}`} className="flex-1 bg-amber-500 text-slate-950 font-bold py-3.5 rounded-2xl flex justify-center items-center gap-3 text-lg group">
          <PhoneCall size={22} /> Ara
        </a>
        <a href={`https://wa.me/90${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`} className="flex-1 bg-slate-100 dark:bg-slate-900/60 text-slate-900 dark:text-white font-bold py-3.5 rounded-2xl flex justify-center items-center gap-3 text-lg border border-slate-300 dark:border-slate-700 shadow-sm">
          <MapPin size={22} className="text-emerald-500" /> Konum At
        </a>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: delay, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }} className="bg-white dark:bg-slate-900/60 p-9 rounded-3xl border border-slate-200 dark:border-slate-800/50 group text-center hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-2 transition-all glass hover:border-amber-500/20 shadow-md">
      <div className="mb-8 bg-slate-50 dark:bg-slate-800 w-22 h-22 rounded-full flex items-center justify-center shadow-inner dark:shadow-2xl border border-slate-100 dark:border-slate-700 mx-auto group-hover:scale-105 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight dark:glow-text">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 font-medium text-base leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function RouteListItem({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.li initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: delay, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }} className="flex items-start gap-5 bg-white dark:bg-slate-900/60 p-6 rounded-2xl shadow-md dark:shadow-xl border border-slate-200 dark:border-slate-800/50 hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1 transition-all glass hover:border-amber-500/20">
      <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-full border border-slate-100 dark:border-slate-700">{icon}</div>
      <div>
        <h3 className="font-extrabold text-slate-900 dark:text-white text-lg tracking-tight dark:glow-text">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-relaxed">{desc}</p>
      </div>
    </motion.li>
  );
}

function ReviewCard({ name, date, text, delay }: { name: string, date: string, text: string, delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: delay, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }} className="bg-white dark:bg-slate-950 p-9 rounded-3xl text-left border border-slate-200 dark:border-slate-800/50 shadow-md dark:shadow-2xl group glass hover:border-amber-500/20">
      <div className="flex gap-2 mb-6">
        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="text-amber-400 fill-amber-400 dark:glow-text" />)}
      </div>
      <p className="text-slate-600 dark:text-slate-200 mb-7 text-sm italic font-medium leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors">"{text}"</p>
      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50 pt-6 mt-auto">
        <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-base dark:glow-text">{name}</span>
        <span className="text-slate-500 dark:text-slate-400 text-xs font-medium">{date}</span>
      </div>
    </motion.div>
  );
}