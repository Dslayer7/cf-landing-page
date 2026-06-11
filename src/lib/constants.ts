/**
 * Application Constants
 * 
 * This file contains all the static content for the landing page.
 * All text is in Spanish (Latin American) as per the target audience.
 * 
 * To update content: Simply modify the text values here.
 * The changes will automatically reflect throughout the application.
 */

import { Ebook, Testimonial } from '@/types';

/**
 * HERO SECTION CONTENT
 * Main headline and call-to-action at the top of the page
 */
export const HERO_CONTENT = {
  title: 'Colección Restauración y Fe',
  subtitle: 'Libros que sanan el alma y despiertan la esperanza',
  tagline: 'Testimonios reales. Procesos de fe. Milagros que aún suceden.',
  ctaText: '¡Quiero Mi Transformación Ahora!',
  heroImageAlt: 'Mujer sosteniendo libros de la Colección Restauración y Fe con expresión de paz y esperanza',
};

/**
 * EMOTIONAL HOOK SECTION CONTENT
 * The core message that connects with the audience's pain points
 */
export const EMOTIONAL_HOOK = {
  heading: '¿Te Sientes Agotada? Hay Esperanza Para Ti',
  // This is the author's verbatim core message - do not modify
  coreMessage: 'Si has sentido que ya no puedes más, estos libros son para ti. No prometen magia, prometen milagros reales: los que ocurren cuando el alma cansada se rinde al amor de Dios.',
  supportingText: 'Estos no son libros de autoayuda común. Son testimonios vivos de transformación, escritos desde la experiencia real del dolor, la lucha y la victoria. Cada página es un abrazo para tu alma cansada, una luz en medio de tu oscuridad, y una invitación a experimentar el amor restaurador de Dios.',
};

/**
 * AUTHOR SECTION CONTENT
 * Biography and credentials of the author
 */
export const AUTHOR_CONTENT = {
  heading: 'Conoce a la Autora',
  bio: `Después de atravesar tres divorcios, batallas profundas contra la ansiedad, la depresión y la soledad, la autora descubrió algo que ninguna terapia convencional pudo darle: el amor incondicional de Dios y la paz que solo viene de Él.

Su camino no fue fácil. Experimentó noches de angustia, pensamientos incontrolables, crisis de ansiedad paralizantes y una sensación constante de que ya no podía más. Pero en medio de su fragilidad, Dios la alcanzó y comenzó un proceso de restauración que transformó completamente su vida.

Hoy, como mujer restaurada, valiosa y plena en Cristo, comparte su historia no desde la teoría, sino desde la experiencia vivida. Su misión es simple pero poderosa: mostrar a otras mujeres que el dolor tiene propósito, que las heridas pueden sanar, y que Dios especializa en resucitar corazones rotos.

Estos tres libros son el fruto de su proceso, escritos con lágrimas, oración y la certeza de que si Dios lo hizo con ella, puede hacerlo contigo.`,
  quote: 'Dios no desperdicia nuestro dolor. Lo transforma en propósito.',
  photoAlt: 'Autora de la Colección Restauración y Fe',
};

/**
 * BOOKS COLLECTION DATA
 * Complete information for all three ebooks
 * All content is verbatim from the author's provided texts
 */
export const EBOOKS: Ebook[] = [
  {
    id: 'libro-1',
    title: 'LIBRE DE LA ANSIEDAD DEL DIVORCIO',
    subtitle: 'Cómo el amor de Dios puede sanar lo que el corazón ya no sabe cómo recomponer.',
    summary: 'Después de tres divorcios y una profunda batalla contra la soledad, la culpa y la ansiedad, la autora encontró algo más poderoso que cualquier terapia: el amor incondicional de Dios y el descanso en la oración constante. En estas páginas abre su corazón para contar cómo, paso a paso, fue liberada de la depresión y la angustia emocional, descubriendo una nueva identidad en Cristo: una mujer restaurada, valiosa y plena.',
    benefits: [
      'Sanar las heridas del rechazo y el abandono.',
      'Recuperar la confianza y la esperanza después del divorcio.',
      'Descansar en la paz que solo Dios puede dar.',
      'Reconstruir tu vida desde adentro, con propósito y libertad.',
    ],
    closingStatement: 'Este no es solo un libro, es una historia de resurrección emocional, escrita para todo corazón que ha amado, caído y decidido volver a creer.',
    coverImage: '/Cover01_ebook.jpg',
    ctaText: 'Conocer Más Sobre Este Libro',
    salesUrl: 'https://go.hotmart.com/K105640822T',
    purchaseUrl: 'https://pay.hotmart.com/K105640822T',
    price: '$9.99',
  },
  {
    id: 'libro-2',
    title: 'UN CLAMOR POR SANIDAD',
    subtitle: '30 días para experimentar el poder de Dios en cuerpo, mente y espíritu.',
    summary: 'Las enfermedades —físicas, emocionales o espirituales— no tienen más poder que la oración hecha con fe. Este libro es el testimonio vivo de cómo la presencia de Dios puede sanar lo que la medicina no alcanza, transformar el miedo en esperanza y el dolor en propósito. Durante 30 días, más de 120 personas participaron en un desafío espiritual de oración a las 5 de la mañana, y muchas de ellas fueron testigos del obrar sobrenatural del Señor.',
    benefits: [
      'Los versículos bíblicos con los que cada día oraron y se fortalecieron.',
      'Reflexiones que aumentarán tu fe y confianza en el poder sanador de Dios.',
      'Espacios para escribir tus propias oraciones y registrar tus milagros.',
    ],
    closingStatement: 'Este libro es una invitación a clamar, creer y esperar… porque cuando el cielo se une a la fe, la sanidad ocurre.',
    coverImage: '/Cover02_ebook.png',
    ctaText: 'Descubre el Poder de la Oración',
    salesUrl: 'https://go.hotmart.com/T105640031B',
    purchaseUrl: 'https://pay.hotmart.com/T105640031B',
    price: '$9.99',
  },
  {
    id: 'libro-3',
    title: '21 DÍAS VENCIENDO LA ANSIEDAD Y EL MIEDO',
    subtitle: 'Un viaje desde la oscuridad emocional hacia la libertad interior.',
    summary: 'Solo quien ha sentido una crisis de ansiedad entiende lo paralizante que puede ser. Es un silencio ruidoso que consume, una sensación que roba el aire, la paz y hasta la identidad. La autora lo vivió por años: noches de angustia, pensamientos incontrolables y una lucha interna que parecía no tener fin. Pero Dios la alcanzó allí, en medio de su fragilidad, y le mostró un camino de liberación y equilibrio emocional.',
    benefits: [
      'Identificar los pensamientos que te encarcelan.',
      'Reemplazar el miedo por la confianza.',
      'Aprender a orar en medio de la ansiedad.',
      'Reconectarte con la paz de Dios y con tu propósito eterno.',
    ],
    closingStatement: 'Cada día incluye reflexiones bíblicas, ejercicios espirituales y oraciones guiadas que te llevarán a experimentar la verdadera libertad que solo viene de Cristo. Este libro es un abrazo para el alma ansiosa, una guía práctica para sanar desde adentro y un recordatorio constante de que el miedo no tiene la última palabra.',
    coverImage: '/Cover03_ebook.png',
    ctaText: 'Comienza Tu Viaje de Libertad',
    salesUrl: 'https://go.hotmart.com/P105649750A',
    purchaseUrl: 'https://pay.hotmart.com/P105649750A',
    price: '$9.99',
  },
];

/**
 * COLLECTION BUNDLE CONTENT
 * Explains why buying the complete collection is valuable
 */
export const BUNDLE_CONTENT = {
  heading: '¿Por Qué la Colección Completa?',
  description: 'Cada libro aborda una dimensión diferente de tu sanidad:',
  books: [
    {
      icon: '📖',
      title: 'LIBRE DE LA ANSIEDAD DEL DIVORCIO',
      benefit: 'sana tu corazón roto y restaura tu identidad.',
    },
    {
      icon: '📖',
      title: 'UN CLAMOR POR SANIDAD',
      benefit: 'fortalece tu fe y te conecta con el poder sanador de Dios.',
    },
    {
      icon: '📖',
      title: '21 DÍAS VENCIENDO LA ANSIEDAD Y EL MIEDO',
      benefit: 'te libera de las cadenas emocionales que te paralizan.',
    },
  ],
  closingText: 'Juntos, forman un camino completo de transformación: del dolor a la paz, de la ansiedad a la libertad, de la desesperanza a la fe renovada.',
  ctaText: '¡Sí, Quiero la Colección Completa!',
  specialOffer: {
    heading: '¡Oferta Especial de la Colección Completa!',
    subheading: 'Obtén los 3 Libros a un Precio Exclusivo',
    description: 'Compra la colección completa a un precio especial y ahorra. Esta es tu oportunidad única de iniciar un camino completo de transformación emocional y espiritual con los tres libros que cambiarán tu vida para siempre.',
    highlights: [
      'Acceso inmediato a los 3 libros digitales',
      'Precio especial exclusivo del paquete completo',
      'Un camino completo de sanidad y restauración',
      'Compatible con todos tus dispositivos',
    ],
    ctaText: 'Comprar la Colección Completa Ahora',
    salesUrl: 'https://go.hotmart.com/W105741778X',
    purchaseUrl: 'https://pay.hotmart.com/W105741778X',
  },
};

/**
 * TESTIMONIALS DATA
 * Real customer testimonials (placeholders for now)
 * Replace with actual testimonials when available
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'María G.',
    age: 42,
    quote: 'Después de mi divorcio, sentía que mi vida había terminado. Este libro me mostró que Dios tenía un plan mejor para mí. Hoy soy una mujer nueva, llena de paz y propósito.',
  },
  {
    id: 'test-2',
    name: 'Carmen L.',
    age: 35,
    quote: 'Las crisis de ansiedad me robaban la vida. Gracias a esta guía de 21 días, aprendí a orar en medio del miedo y experimenté una libertad que nunca creí posible.',
  },
  {
    id: 'test-3',
    name: 'Rosa M.',
    age: 51,
    quote: 'El desafío de oración de 30 días cambió mi vida. Dios sanó mi cuerpo y renovó mi fe. Estos libros son un regalo del cielo.',
  },
  {
    id: 'test-4',
    name: 'Ana P.',
    age: 38,
    quote: 'Estos libros no son teoría, son vida real. Cada página me hablaba directamente a mi dolor. Hoy puedo decir que soy libre.',
  },
];

/**
 * TESTIMONIALS SECTION CONTENT
 */
export const TESTIMONIALS_CONTENT = {
  heading: 'Testimonios Reales de Transformación',
  subheading: 'Mujeres como tú que encontraron esperanza y sanidad',
};

/**
 * FINAL CTA SECTION CONTENT
 * The last push to convert visitors
 */
export const FINAL_CTA_CONTENT = {
  heading: 'Tu Historia de Restauración Comienza Hoy',
  message: `No esperes más para encontrar la paz y la libertad que tu alma anhela. Dios está listo para escribir un nuevo capítulo en tu vida, uno lleno de esperanza, sanidad y propósito.

Estos libros son más que palabras en una página. Son herramientas de transformación, compañeros en tu proceso, y recordatorios constantes de que no estás sola. El mismo Dios que restauró a la autora, quiere restaurarte a ti.

El momento es ahora. Tu alma cansada merece descanso. Tu corazón roto merece sanidad. Tu vida merece un nuevo comienzo.`,
  ctaText: '¡Sí, Quiero la Colección Completa!',
  trustBadges: [
    'Descarga inmediata después de la compra',
    'Formato digital compatible con todos los dispositivos',
    'Inversión en tu sanidad emocional y espiritual',
    'Testimonios reales de transformación',
  ],
};

/**
 * FOOTER CONTENT
 */
export const FOOTER_CONTENT = {
  copyright: '© 2025 Colección Restauración y Fe. Todos los derechos reservados.',
  tagline: 'Sanando almas, despertando esperanza, un corazón a la vez.',
  links: [
    { label: 'Política de Privacidad', href: '#privacidad' },
    { label: 'Términos y Condiciones', href: '#terminos' },
    { label: 'Contacto', href: '#contacto' },
    { label: 'Preguntas Frecuentes', href: '#faq' },
  ],
};

/**
 * NAVIGATION LINKS
 * Used in the header navigation
 */
export const NAV_LINKS = [
  { label: 'Colección', href: '#coleccion' },
  { label: 'Autora', href: '#autora' },
  { label: 'Testimonios', href: '#testimonios' },
];
