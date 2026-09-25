// Sustituye cualquier image por una ruta como 'assets/mi-foto.webp'.
// Las fotos de Rita pertenecen al archivo Rita; no se presentan como fotos de Bonded.
const photos = window.TARDEO_PHOTOS || Object.fromEntries(['despecha1','despecha2','despecha3','duende1','duende2','rita1','rita2','rita3'].map(key=>[key,window.TARDEO_IMAGE]));
window.TARDEO_CONFIG = {
 portada: {image:photos.rita1,alt:'Amigos disfrutando de una tarde al aire libre en Rita la Bailaora'},
 despecha: {image:photos.despecha2,alt:'Ambiente de La Despechá bajo su iluminación roja',ctaUrl:'',ctaLabel:'Cómo llegar a La Despechá',gallery:[
  {image:photos.despecha1,alt:'Músicos actuando junto al neón de La Despechá',caption:'Temazos que se viven de cerca.'},
  {image:photos.despecha2,alt:'Público disfrutando en La Despechá',caption:'Tu gente. Tu sitio. Tu tarde.'},
  {image:photos.despecha3,alt:'Animación y público en una fiesta de La Despechá',caption:'Aquí la última nunca es la última.'}]},
 rita: {image:photos.rita3,alt:'Amigas bailando en Rita la Bailaora',ctaUrl:'',ctaLabel:'Cómo llegar a Bonded',gallery:[
  {image:photos.rita1,alt:'Tarde al aire libre en Rita la Bailaora',caption:'Hay tardes que se quedan contigo.'},
  {image:photos.rita2,alt:'Photocall rosa de Rita la Bailaora',caption:'La vida es hoy. La vida es Rita.'},
  {image:photos.rita3,alt:'Amigas celebrando y bailando en Rita',caption:'La banda sonora de tus mejores planes.'}]},
 duende: {image:photos.duende1,alt:'Bailarinas actuando en Tardeo Duende',ctaUrl:'',ctaLabel:'Cómo llegar a MAMAO',gallery:[
  {image:photos.duende1,alt:'Dos bailarinas con mantones en Tardeo Duende',caption:'El arte se lleva dentro.'},
  {image:photos.duende2,alt:'Guitarrista actuando ante el público de Tardeo Duende',caption:'Y las ganas de venir, también.'}]}
};
