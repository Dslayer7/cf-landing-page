'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Heart, Star, BookOpen, Shield, Sun } from 'lucide-react';

const PURCHASE_URL = 'https://pay.hotmart.com/P105649750A';

const painPoints = [
  'Sufres de crisis de ansiedad que te paralizan',
  'El miedo controla tus pensamientos y decisiones',
  'No encuentras paz mental ni emocional',
  'Necesitas herramientas prácticas para vencer la ansiedad',
];

const benefits = [
  'Identificar los pensamientos que te encarcelan.',
  'Reemplazar el miedo por la confianza.',
  'Aprender a orar en medio de la ansiedad.',
  'Reconectarte con la paz de Dios y con tu propósito eterno.',
];

const testimonials = [
  {
    quote: 'Las crisis de ansiedad me robaban la vida. Gracias a esta guía de 21 días, aprendí a orar en medio del miedo y experimenté una libertad que nunca creí posible.',
    name: 'Carmen L.',
    role: '35 años',
  },
  {
    quote: 'Cada día me acercó más a la paz de Dios. Hoy puedo respirar tranquila y dormir en paz.',
    name: 'Sofía V.',
    role: '29 años',
  },
  {
    quote: 'Este libro me enseñó que el miedo no tiene la última palabra. Dios sí la tiene.',
    name: 'Elena P.',
    role: '41 años',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function AnsiedadPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="min-h-screen font-body">

      {/* ── STICKY HEADER ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-950/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? 'text-white/70 hover:text-white' : 'text-white/80 hover:text-white'
            }`}
          >
            ← Restauración y Fe
          </Link>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-[65vh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800">
        {/* Background Image (Blurred cover book) */}
        <Image
          src="/Cover03_ebook.png"
          fill
          alt="Background"
          className="object-cover blur-[8px] opacity-45 scale-110"
          priority
        />

        {/* Navy Layer Overlay with low opacity for readability */}
        <div className="absolute inset-0 bg-slate-950/45" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg">

            <motion.div
              className="inline-flex items-center gap-2 bg-orange-600/15 border border-orange-600/30 text-orange-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-7"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heart size={12} fill="currentColor" />
              Libertad y Paz Interior
              <Heart size={12} fill="currentColor" />
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              21 Días Venciendo
              <br />
              <span className="text-orange-400">la Ansiedad y el Miedo</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-orange-200 font-medium italic mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Un viaje desde la oscuridad emocional hacia la libertad interior.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-slate-200 leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Solo quien ha sentido una crisis de ansiedad entiende lo paralizante que puede ser. 
              Descubre el camino hacia la paz que solo Dios puede dar.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
            >
              <a
                href={PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hotmart-fb hotmart__button-checkout !inline-flex !flex-row !items-center !justify-center !gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 no-underline"
              >
                <Heart size={18} fill="currentColor" className="flex-shrink-0" />
                <span>Quiero Vencer la Ansiedad</span>
              </a>
            </motion.div>

            </div>

            <motion.div
              className="hidden lg:flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-80 h-[480px] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                <Image
                  src="/Cover03_ebook.png"
                  fill
                  alt="21 Días Venciendo la Ansiedad y el Miedo"
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </motion.div>

          </div>
        </div>

      </section>

      {/* ── PAIN POINTS ── */}
      <section id="dolor" className="py-20 md:py-28 bg-[#fdf8f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <motion.div className="text-center mb-12" {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">
              Para ti que luchas con la ansiedad
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900">
              Sé lo que estás viviendo…
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {painPoints.map((p, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 bg-white rounded-2xl px-6 py-5 shadow-sm border border-stone-100"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 font-bold text-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-stone-700 font-medium leading-snug">{p}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-stone-900 text-white rounded-3xl px-8 md:px-14 py-12 text-center"
            {...fadeUp}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold italic leading-relaxed">
              &ldquo;El miedo puede gritar fuerte…
            </p>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold italic text-orange-400 mt-1">
              pero no tiene la última palabra.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BOOK DESCRIPTION ── */}
      <section className="py-20 md:py-28 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">
              El Libro
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Un abrazo para el alma
              <br className="hidden md:block" /> ansiosa
            </h2>
            <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Es un silencio ruidoso que consume, una sensación que roba el aire, la paz y hasta la identidad. 
              La autora lo vivió por años: noches de angustia, pensamientos incontrolables y una lucha interna 
              que parecía no tener fin. Pero Dios la alcanzó allí, en medio de su fragilidad, y le mostró un 
              camino de liberación y equilibrio emocional.
            </p>
            <a
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hotmart-fb hotmart__button-checkout !inline-flex !flex-row !items-center !justify-center !gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-200 hover:scale-105 no-underline"
            >
              <BookOpen size={18} className="flex-shrink-0" />
              <span>Obtener Este Libro</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section className="py-20 md:py-28 bg-[#fdf8f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            <motion.div
              className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/Cover03_ebook.png"
                alt="21 Días Venciendo la Ansiedad y el Miedo – Portada"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">
                Lo que aprenderás
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8 leading-tight">
                Tu guía práctica hacia la libertad
              </h3>
              <ul className="space-y-4 mb-10">
                {benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} className="text-orange-600" strokeWidth={3} />
                    </div>
                    <span className="text-stone-700 leading-snug text-sm md:text-base">{b}</span>
                  </motion.li>
                ))}
              </ul>
              <a
                href={PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hotmart-fb hotmart__button-checkout !inline-flex !flex-row !items-center !justify-center !gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 no-underline"
              >
                <Heart size={18} fill="currentColor" className="flex-shrink-0" />
                <span>Quiero Este Libro Ahora</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-12" {...fadeUp} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">
              Testimonios
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900">
              Vidas transformadas por la paz de Dios
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-[#fdf8f0] rounded-3xl p-7 border border-orange-100 flex flex-col"
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={15} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed italic flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">{t.name}</p>
                  <p className="text-stone-400 text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTHOR ── */}
      <section className="py-20 md:py-28 bg-[#fdf8f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-8 md:gap-14 items-center">

            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-60 h-72 md:w-full md:h-[420px] mx-auto rounded-3xl overflow-hidden shadow-2xl ring-4 ring-orange-300/50">
                <Image
                  src="/CF_Author.jpeg"
                  alt="Candice Figueroa – Autora"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 240px, 40vw"
                />
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">
                La Autora
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-5">
                Candice Figueroa
              </h3>
              <div className="space-y-4 text-stone-600 leading-relaxed text-sm md:text-base">
                <p>
                  Experimenté noches de angustia, pensamientos incontrolables, crisis de ansiedad paralizantes 
                  y una sensación constante de que ya no podía más. Pero en medio de mi fragilidad, Dios me 
                  alcanzó y comenzó un proceso de restauración que transformó completamente mi vida.
                </p>
                <p>
                  Hoy, como mujer restaurada, valiosa y plena en Cristo, comparto mi historia no desde la teoría, 
                  sino desde la experiencia vivida. Mi misión es mostrar que el dolor tiene propósito, que las 
                  heridas pueden sanar, y que el miedo no tiene la última palabra.
                </p>
              </div>
              <div className="mt-6 bg-orange-50 border-l-4 border-orange-400 px-6 py-5 rounded-r-2xl">
                <p className="font-script text-lg md:text-xl text-stone-700 italic leading-relaxed">
                  &ldquo;El miedo no tiene la última palabra. Dios sí la tiene.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-900 to-stone-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.9 }}>
            <div className="flex justify-center gap-3 mb-8">
              {[Shield, Heart, Sun].map((Icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-orange-500/15 border border-orange-400/30 flex items-center justify-center"
                >
                  <Icon size={20} className="text-orange-400" />
                </div>
              ))}
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Comienza tu viaje
              <br className="hidden sm:block" /> hacia la libertad
            </h2>
            <p className="text-stone-300 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              Cada día incluye reflexiones bíblicas, ejercicios espirituales y oraciones guiadas que te 
              llevarán a experimentar la verdadera libertad que solo viene de Cristo.
            </p>

            <a
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hotmart-fb hotmart__button-checkout !inline-flex !flex-row !items-center !justify-center !gap-3 bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg md:text-xl px-10 py-5 rounded-full shadow-2xl transition-all duration-200 hover:scale-105 no-underline"
            >
              <Heart size={22} fill="currentColor" className="flex-shrink-0" />
              <span>Quiero Vencer la Ansiedad</span>
            </a>

            <p className="mt-5 text-stone-500 text-sm">
              Descarga inmediata · Formato digital · Acceso de por vida
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 bg-black text-center px-4">
        <p className="text-stone-500 text-sm mb-2">
          © 2025 Colección Restauración y Fe — Todos los derechos reservados.
        </p>
        <Link href="/" className="text-orange-400 hover:text-orange-300 text-sm transition-colors">
          Ver toda la colección →
        </Link>
      </footer>
    </main>
  );
}
