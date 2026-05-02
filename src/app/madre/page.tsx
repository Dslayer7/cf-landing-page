'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Heart, Star, BookOpen, Shield, Sun } from 'lucide-react';

const PURCHASE_URL = 'https://pay.hotmart.com/I105601030B';

const painPoints = [
  'Te preocupa la salud de tus hijos',
  'Has sentido miedo por su bienestar',
  'Has orado… pero necesitas más dirección',
  'No quieres quedarte sola con la angustia',
];

const benefits = [
  'Oraciones específicas por la salud y vida de tus hijos',
  'Testimonios de madres que oraron y recibieron milagros y protección',
  'Cómo orar con fe y autoridad en momentos de enfermedad',
  'Claves poderosas para vencer el miedo como madre',
  'Reflexiones bíblicas que traen paz en medio de la tormenta',
];

const testimonials = [
  {
    quote: 'Hoy tengo paz, incluso en medio del proceso de salud de mi hijo.',
    name: 'María J.',
    role: 'Madre de 2 hijos',
  },
  {
    quote: 'Aprendí a orar con fe, no desde el miedo. Este libro cambió mi manera de interceder.',
    name: 'Carmen R.',
    role: 'Mamá y lectora',
  },
  {
    quote: 'Este ebook me devolvió la esperanza cuando más la necesitaba.',
    name: 'Ana L.',
    role: 'Madre de familia',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function MadrePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main className="min-h-screen font-body">

      {/* ── STICKY HEADER ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-950/96 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? 'text-white/70 hover:text-white' : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            ← Restauración y Fe
          </Link>
        </div>
      </header>

      {/* ── HERO ── full-bleed photo, cream bg match, dark text ── */}
      {/*
        MotherPageCover.png: warm cream/sand bg (~#f0d9b8), mother+kids on right.
        Left area of the image is naturally clear, so dark text reads perfectly.
        Section bg color matches the image so edges are seamless.
      */}
      <section
        className="relative min-h-[65vh] lg:min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: '#f0d9b8' }}
      >
        {/* Full-bleed background photo */}
        <Image
          src="/MotherPageCover.png"
          fill
          alt="Mamá leyendo con sus hijos"
          className="object-cover object-center lg:object-right"
          priority
        />

        {/* Mobile-only cream fade so text stays readable on narrow viewports */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              'linear-gradient(to right, rgba(240,217,184,0.92) 55%, rgba(240,217,184,0.3) 100%)',
          }}
        />

        {/* Content — left-aligned over the clean cream area */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 pb-20">
          <div className="max-w-lg xl:max-w-xl">

            <motion.div
              className="inline-flex items-center gap-2 bg-amber-600/15 border border-amber-600/30 text-amber-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-7"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heart size={12} fill="currentColor" />
              Edición Especial · Día de las Madres
              <Heart size={12} fill="currentColor" />
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 leading-[1.05] italic mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              El Poder de una
              <br />
              <span className="text-amber-700">Madre que Ora</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-stone-700 font-medium italic mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              por la Salud y Vida de sus Hijos
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-stone-600 leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Cuando una madre ora, el cielo responde con sanidad, protección y vida.
              Descubre cómo cubrir a tus hijos con oraciones poderosas, incluso en
              momentos de enfermedad, miedo o incertidumbre.
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
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 no-underline"
              >
                <Heart size={18} fill="currentColor" />
                Quiero Orar Por la Vida de Mis Hijos
              </a>
            </motion.div>

          </div>
        </div>

      </section>

      {/* ── PAIN POINTS ── */}
      <section id="dolor" className="py-20 md:py-28 bg-[#fdf8f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <motion.div className="text-center mb-12" {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
              Para ti, mamá
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900">
              Sé lo que pesa en tu corazón…
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
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-stone-700 font-medium leading-snug">{p}</p>
              </motion.div>
            ))}
          </div>

          {/* Bridge quote */}
          <motion.div
            className="bg-stone-900 text-white rounded-3xl px-8 md:px-14 py-12 text-center"
            {...fadeUp}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold italic leading-relaxed">
              &ldquo;Hay batallas que una madre no pelea con sus manos…
            </p>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold italic text-amber-400 mt-1">
              las pelea de rodillas.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BOOK DESCRIPTION ── */}
      <section className="py-20 md:py-28 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              El Ebook
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Una guía para cubrir la vida
              <br className="hidden md:block" /> de tus hijos con fe
            </h2>
            <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-3xl mx-auto mb-10">
              <em>
                &ldquo;El Poder de una Madre que Ora por la Salud y Vida de sus Hijos&rdquo;
              </em>{' '}
              es una guía espiritual práctica que te enseña a interceder con fe, autoridad y
              esperanza, aun en medio de la incertidumbre. Transforma tu preocupación en
              oración efectiva y aprende a declarar vida, sanidad y protección cada día.
            </p>
            <a
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-200 hover:scale-105 no-underline"
            >
              <BookOpen size={18} />
              Obtener Mi Ebook
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section className="py-20 md:py-28 bg-[#fdf8f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Book cover */}
            <motion.div
              className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/MotherBookCover.png"
                alt="El Poder de una Madre que Ora – Portada"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
                Lo que recibirás dentro
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8 leading-tight">
                Herramientas reales para una madre guerrera
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
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} className="text-amber-600" strokeWidth={3} />
                    </div>
                    <span className="text-stone-700 leading-snug text-sm md:text-base">{b}</span>
                  </motion.li>
                ))}
              </ul>
              <a
                href={PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 no-underline"
              >
                <Heart size={18} fill="currentColor" />
                Quiero Este Ebook Ahora
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-12" {...fadeUp} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
              Testimonios
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900">
              Lo que otras madres están experimentando
            </h2>
          </motion.div>

          {/* Mobile: horizontal snap-scroll carousel */}
          <div
            className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[80vw] max-w-[320px] bg-[#fdf8f0] rounded-3xl p-7 border border-amber-100 flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={15} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed italic flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">{t.name}</p>
                  <p className="text-stone-400 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: regular grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-[#fdf8f0] rounded-3xl p-7 border border-amber-100 flex flex-col"
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={15} className="text-amber-400 fill-amber-400" />
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
              <div className="relative w-60 h-72 md:w-full md:h-[420px] mx-auto rounded-3xl overflow-hidden shadow-2xl ring-4 ring-amber-300/50">
                <Image
                  src="/CF_1.jpg"
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
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
                La Autora
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-5">
                Candice Figueroa
              </h3>
              <div className="space-y-4 text-stone-600 leading-relaxed text-sm md:text-base">
                <p>
                  Soy Candice Figueroa, una mujer transformada por el poder de Dios. He
                  experimentado Su mano obrando milagros en medio de la angustia, la soledad y
                  el dolor, y hoy vivo para levantar a otras mujeres que sienten que han tocado
                  fondo, porque sé lo que es estar ahí y también sé que sí se puede salir.
                </p>
                <p>
                  Soy madre de tres hijos maravillosos, divorciada, escritora, predicadora y
                  conferencista. Tengo una vida de oración y he visto milagros en la vida de mis
                  hijos y en mi vida gracias a ella. Como presidenta de la Fundación Mujer
                  Valiente y comunicadora con dos programas de radio, mi misión es guiar a
                  mujeres hacia su restauración, identidad y propósito.
                </p>
              </div>
              <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 px-6 py-5 rounded-r-2xl">
                <p className="font-script text-lg md:text-xl text-stone-700 italic leading-relaxed">
                  &ldquo;Hoy puedes cubrir la vida de tus hijos con oración.&rdquo;
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
                  className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-400/30 flex items-center justify-center"
                >
                  <Icon size={20} className="text-amber-400" />
                </div>
              ))}
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Hoy puedes cubrir la vida de
              <br className="hidden sm:block" /> tus hijos con oración
            </h2>
            <p className="text-stone-300 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              No esperes más. Tus hijos necesitan tus oraciones. Este ebook te equipará con las
              herramientas espirituales para interceder con fe, autoridad y esperanza.
            </p>

            <a
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-lg md:text-xl px-10 py-5 rounded-full shadow-2xl transition-all duration-200 hover:scale-105 no-underline"
            >
              <Heart size={22} fill="currentColor" />
              Quiero Orar Por la Vida de Mis Hijos
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
        <Link href="/" className="text-amber-400 hover:text-amber-300 text-sm transition-colors">
          Ver toda la colección →
        </Link>
      </footer>
    </main>
  );
}
