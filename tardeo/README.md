# ¿Qué tardeo eres?

Web completa en HTML, CSS y JavaScript. Sin instalación, base de datos ni recopilación de respuestas. La foto incluida es una escena ilustrativa generada, no una foto de los locales.

## Ubicación
Esta experiencia vive en `/tardeo/` del repositorio `martamusande-cloud/pruebamarta-momd`. La portada existente de Rita Festival se conserva.

La publicación usa la configuración de GitHub Pages del repositorio.

## Quiz rápido
Solo tres preguntas: cómo llegas, qué haces cuando suena tu canción y qué música eliges. Aproximadamente 30 segundos. Se han verificado las 27 combinaciones posibles, incluidos los empates.

## Cambiar las fotografías
La foto ilustrativa está incluida en `image.js`. Guarda tus fotos en `assets/` y cambia las rutas `image` y las descripciones `alt` en `config.js`. Hay una entrada para la portada y otra por tardeo. Admite JPG, PNG y WebP. Recomendado: formato vertical 3:4, al menos 900 px de ancho y menos de 350 KB. El recorte se ajusta con `object-position` en `styles.css`.

## Cambiar el CTA
Actualmente los tres botones abren la dirección correspondiente en Google Maps. Para reservas o entradas, introduce la URL real en `ctaUrl` y el texto del botón en `ctaLabel`, en `config.js`. No se han inventado enlaces, fechas, horarios ni promociones.

## Textos y preguntas
Se editan en `app.js`, en `brands` y `questions`. Cada respuesta suma un voto al tardeo asociado. Gana el mayor número de votos; en un empate decide la respuesta más reciente entre los empatados. Retroceder y cambiar una respuesta sustituye el voto anterior. El análisis dura 2,5 segundos; las animaciones respetan la preferencia de movimiento reducido.

## Estilo y accesibilidad
Diseño adaptable a móvil y escritorio, botones grandes, navegación con teclado, foco visible, texto alternativo y progreso del quiz. Fuentes Barlow Condensed y DM Sans servidas por Google Fonts con alternativas locales. Todo el resto se sirve desde la propia web. Si quieres eliminar también esa dependencia, retira la primera línea `@import` de `styles.css`.
