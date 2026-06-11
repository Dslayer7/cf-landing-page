'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Heart, Star, BookOpen, Shield, Sun } from 'lucide-react';

const PURCHASE_URL = 'https://pay.hotmart.com/T105640031B';

const painPoints = [
  'Estás enfrentando una enfermedad física, emocional o espiritual',
  'Has orado pero necesitas fortalecer tu fe',
  'Quieres experimentar el poder sanador de Dios',
  'Necesitas dirección y esperanza en medio de la prueba',
];

const benefits = [
  'Los versículos bíblicos con los que cada día oraron y se fortalecieron.',
  'Reflexiones que aumentarán tu fe y confianza en el poder sanador de Dios.',
  'Espacios para escribir tus propias oraciones y registrar tus milagros.',
];

const testimonials = [
  {
    quote: 'El desafío de oración de 30 días cambió mi vida. Dios sanó mi cuerpo y renovó mi fe. Estos libros son un regalo del cielo.',
    name: 'Rosa M.',
    role: '51 años',
  },
  {
    quote: 'Aprendí a clamar con fe. Vi milagros que nunca imaginé posibles. Este libro es poderoso.',
    name: 'Patricia S.',
    role: '47 años',
  },
  {
    quote: 'Cada día de oración me acercó más a Dios. Experimenté sanidad en cuerpo, mente y espíritu.',
    name: 'Gabriela R.',
    role: '39 años',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function SanidadPage() {
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
          src="/Cover02_ebook.png"
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
              className="inline-flex items-center gap-2 bg-sky-600/15 border border-sky-600/30 text-sky-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-7"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heart size={12} fill="currentColor" />
              Sanidad y Milagros
              <Heart size={12} fill="currentColor" />
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Un Clamor
              <br />
              <span className="text-sky-400">por Sanidad</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-sky-200 font-medium italic mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              30 días para experimentar el poder de Dios en cuerpo, mente y espíritu.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-slate-200 leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Las enfermedades no tienen más poder que la oración hecha con fe. Descubre cómo 
              la presencia de Dios puede sanar lo que la medicina no alcanza.
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
                className="hotmart-fb hotmart__button-checkout !inline-flex !flex-row !items-center !justify-center !gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 no-underline"
              >
                <Heart size={18} fill="currentColor" className="flex-shrink-0" />
                <span>Quiero Experimentar Sanidad</span>
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
                  src="/Cover02_ebook.png"
                  fill
                  alt="Un Clamor por Sanidad"
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
            <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">
              Para ti que necesitas sanidad
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900">
              Sé lo que estás enfrentando…
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
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold text-sm flex items-center justify-center shrink-0">
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
              &ldquo;Cuando el cielo se une a la fe…
            </p>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold italic text-sky-400 mt-1">
              la sanidad ocurre.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BOOK DESCRIPTION ── */}
      <section className="py-20 md:py-28 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">
              El Libro
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Testimonios de milagros
              <br className="hidden md:block" /> y poder sobrenatural
            </h2>
            <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Este libro es el testimonio vivo de cómo la presencia de Dios puede sanar lo que la medicina 
              no alcanza, transformar el miedo en esperanza y el dolor en propósito. Durante 30 días, más de 
              120 personas participaron en un desafío espiritual de oración a las 5 de la mañana, y muchas de 
              ellas fueron testigos del obrar sobrenatural del Señor.
            </p>
            <a
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hotmart-fb hotmart__button-checkout !inline-flex !flex-row !items-center !justify-center !gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-200 hover:scale-105 no-underline"
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
                src="/Cover02_ebook.png"
                alt="Un Clamor por Sanidad – Portada"
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
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">
                Incluye
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8 leading-tight">
                Herramientas para fortalecer tu fe
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
                    <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} className="text-sky-600" strokeWidth={3} />
                    </div>
                    <span className="text-stone-700 leading-snug text-sm md:text-base">{b}</span>
                  </motion.li>
                ))}
              </ul>
              <a
                href={PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hotmart-fb hotmart__button-checkout !inline-flex !flex-row !items-center !justify-center !gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 no-underline"
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
            <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">
              Testimonios
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900">
              Milagros reales de personas reales
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-[#fdf8f0] rounded-3xl p-7 border border-sky-100 flex flex-col"
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={15} className="text-sky-400 fill-sky-400" />
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
              <div className="relative w-60 h-72 md:w-full md:h-[420px] mx-auto rounded-3xl overflow-hidden shadow-2xl ring-4 ring-sky-300/50">
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
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-2">
                La Autora
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-5">
                Candice Figueroa
              </h3>
              <div className="space-y-4 text-stone-600 leading-relaxed text-sm md:text-base">
                <p>
                  He experimentado la mano de Dios obrando milagros en medio de la angustia, la soledad y 
                  el dolor. Hoy vivo para levantar a otras mujeres que sienten que han tocado fondo, porque 
                  sé lo que es estar ahí y también sé que sí se puede salir.
                </p>
                <p>
                  Tengo una vida de oración y he visto milagros en la vida de mis hijos y en mi vida gracias 
                  a ella. Mi misión es guiar a mujeres hacia su restauración, identidad y propósito a través 
                  del poder de la oración.
                </p>
              </div>
              <div className="mt-6 bg-sky-50 border-l-4 border-sky-400 px-6 py-5 rounded-r-2xl">
                <p className="font-script text-lg md:text-xl text-stone-700 italic leading-relaxed">
                  &ldquo;Cuando el cielo se une a la fe, la sanidad ocurre.&rdquo;
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
                  className="w-12 h-12 rounded-full bg-sky-500/15 border border-sky-400/30 flex items-center justify-center"
                >
                  <Icon size={20} className="text-sky-400" />
                </div>
              ))}
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Clama, cree y espera
              <br className="hidden sm:block" /> tu milagro
            </h2>
            <p className="text-stone-300 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              Este libro es una invitación a clamar, creer y esperar… porque cuando el cielo se une 
              a la fe, la sanidad ocurre.
            </p>

            <a
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hotmart-fb hotmart__button-checkout !inline-flex !flex-row !items-center !justify-center !gap-3 bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg md:text-xl px-10 py-5 rounded-full shadow-2xl transition-all duration-200 hover:scale-105 no-underline"
            >
              <Heart size={22} fill="currentColor" className="flex-shrink-0" />
              <span>Quiero Experimentar Sanidad</span>
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
        <Link href="/" className="text-sky-400 hover:text-sky-300 text-sm transition-colors">
          Ver toda la colección →
        </Link>
      </footer>
    </main>
  );
}
