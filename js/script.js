// 100 Razones para Amarte - VERSIÓN FINAL CON TODAS LAS MEJORAS 🩷💙

// ===== TUS 100 RAZONES COMPLETAS =====
const reasons = [
    "1. Llegaste a mi vida de forma tan espontánea que parece cosa del destino",
    "2. No te da miedo demostrar iniciativa, quitándome el número por ejemplo",
    "3. Me sigues el juego a mis coqueteos y piropos",
    "4. Siempre vistes unos outfits uffff",
    "5. Te gustan mucho los cócteles como a mí :3",
    "6. Nuestro primer beso se sintió mágico, diferente, demasiado especial",
    "7. Eres demasiado apasionada, te encanta todo lo que haces y eso me enamora",
    "8. Porque nunca tuviste miedo de demostrarme quien eres",
    "9. Porque eres igual de atrevida que yo ROAR",
    "10. Eres muy espontánea en todo y eso me gusta",
    "11. Lo cursi y sentimental lo amo jiji",
    "12. La forma en que te emocionas",
    "13. Tus sonrisas cuando cumples algún antojo",
    "14. Porque te gusta el sushi como a mí",
    "15. Porque tu película favorita de Disney también me encanta",
    "16. Porque eres DEMASIADO BELLA",
    "17. Por tu amor a los animales",
    "18. Por tu amor a los niños",
    "19. Por lo optimista que eres muchas veces",
    "20. Por tu valentía ante cualquier situación",
    "21. Por tu sonrisa",
    "22. Porque bailas muy bien",
    "23. Porque eres una artista excepcional",
    "24. Ves colores en la vida donde a veces no lo veo",
    "25. Tus brazos son tan delicados, extraño tocarlos",
    "26. Tu cabello es perfecto, una melena preciosa",
    "27. Siempre me apoyaste cuando no tenía dinero",
    "28. Contigo las salidas son más divertidas",
    "29. Porque eres muy estudiosa",
    "30. Porque tienes claros tus objetivos y metas",
    "31. Porque mereces ser amada",
    "32. Porque inspiras muchísimo",
    "33. Cocinas demasiado Rico",
    "34. Porque celas bien rico",
    "35. Porque estás para mí en mis peores momentos",
    "36. Porque serás una mamá maravillosa",
    "37. Porque tenemos una conexión única",
    "38. Por como me siento cuando nos abrazamos",
    "39. Por tu esencia",
    "40. Por tu figura, tan preciosa y deslumbrante",
    "41. Por tu cuerpo que me excita y motiva a comerte completa",
    "42. Por tus dientitos de conejo, me encantan JAJAJAJA",
    "43. Tu cariño sincero y amor tan real",
    "44. Tu forma de alegrarme el día",
    "45. Tus ocurrencias esporádicas",
    "46. Porque me enseñaste a vivir",
    "47. Porque me devolviste la felicidad en un punto que me había perdido",
    "48. Por tu fe en Dios",
    "49. Por todos los momentos que hemos compartido",
    "50. Por la confianza e inspiración que me das cuando estas a mi lado",
    "51. Por cómo dices mi nombre",
    "52. Por la forma en que me miras cuando te hablo de cualquier tema que me interese",
    "53. Por tus mensajes de buenos días",
    "54. Por tus mensajes de buenas noches",
    "55. Por cómo me haces sentir cuando estoy triste",
    "56. Por tu perfume, ese que siempre me quedaba el sabor en la boca cuanto te lo echabas jajaja. PD: Yo no era tan feliz cuando me quedaba el mal sabor de boca, pero hoy dia anhelo sentir ese amargor, pues me hacia saber que estaba contigo.",
    "57. Por cómo te ves cuando amanece",
    "58. Por tus ojitos cuando tienes sueño",
    "59. Por tu voz cuando me dices te amo",
    "60. Por tus bailecitos de felicidad",
    "61. Por tus locuras repentinas",
    "62. Por cómo defiendes lo que quieres",
    "63. Por tu forma de querer a tu familia",
    "64. Por cómo hablas de tus sueños",
    "65. Porque me incluyes en tus planes a futuro",
    "66. Por tu forma de de acompañarme aun con la distancia",
    "67. Por cómo te ves con mis camisas",
    "68. Por tus enfados tiernos",
    "69. Por cómo pides perdón",
    "70. Por cómo dices te quiero",
    "71. Por tu forma de decir te amo",
    "72. Por cómo me miras cuando crees que no te veo",
    "73. Por tus abrazos por la espalda",
    "74. Por tu forma de dormir abrazada a mí",
    "75. Por cómo amaneces despeinada y hermosa",
    "76. Por todos los regalos que me das",
    "77. Porque te gusta probar comida nueva conmigo",
    "78. Por tu risa contagiosa",
    "79. Por cómo te ries de mis chistes malos",
    "80. Porque siempre encuentras algo bueno en los días malos",
    "81. Por tu forma de ver la vida",
    "82. Por lo rebelde que eres",
    "83. Por tu lealtad inquebrantable",
    "84. Por tu forma de superar los obstáculos",
    "85. Porque nunca te rindes",
    "86. Por tu ternura cuando estás consentidora",
    "87. Por tu fuerza cuando estás decidida",
    "88. Por cómo iluminas cualquier habitación al entrar",
    "89. Porque haces que quiera ser mejor persona",
    "90. Por cómo me motivas a cumplir mis metas",
    "91. Porque crees en mí incluso cuando yo dudo",
    "92. Por tu forma de celebrar mis logros",
    "93. Por cómo lloras de felicidad",
    "94. Por tu transparencia, no finges ser quien no eres",
    "95. Porque contigo todo es más fácil",
    "96. Porque me haces sentir en casa donde quiera que estés",
    "97. Porque has sanado partes de mí que no sabía que estaban rotas",
    "98. Porque eres mi lugar seguro",
    "99. Porque cada día encuentro una nueva razón para amarte",
    "100. Por ser tú, Daniela, no necesito otra razón para amarte más que seas tú misma🩷💙",
];

// ===== RUTAS DE IMÁGENES - CORRECTAMENTE DEFINIDAS PARA 100 IMÁGENES =====
// Opción 1: Si tienes todas las imágenes, usa este array completo:
const imagePaths = [
    "images/razon1.png", "images/razon2.png", "images/razon3.png", "images/razon4.png", "images/razon5.png",
    "images/razon6.png", "images/razon7.png", "images/razon8.png", "images/razon9.png", "images/razon10.png",
    "images/razon11.png", "images/razon12.png", "images/razon13.png", "images/razon14.png", "images/razon15.png",
    "images/razon16.png", "images/razon17.png", "images/razon18.png", "images/razon19.png", "images/razon20.png",
    "images/razon21.png", "images/razon22.png", "images/razon23.png", "images/razon24.png", "images/razon25.png",
    "images/razon26.png", "images/razon27.png", "images/razon28.png", "images/razon29.png", "images/razon30.png",
    "images/razon31.png", "images/razon32.png", "images/razon33.png", "images/razon34.png", "images/razon35.png",
    "images/razon36.png", "images/razon37.png", "images/razon38.png", "images/razon39.png", "images/razon40.png",
    "images/razon41.png", "images/razon42.png", "images/razon43.png", "images/razon44.png", "images/razon45.png",
    "images/razon46.png", "images/razon47.png", "images/razon48.png", "images/razon49.png", "images/razon50.png",
    "images/razon51.png", "images/razon52.png", "images/razon53.png", "images/razon54.png", "images/razon55.png",
    "images/razon56.png", "images/razon57.png", "images/razon58.png", "images/razon59.png", "images/razon60.png",
    "images/razon61.png", "images/razon62.png", "images/razon63.png", "images/razon64.png", "images/razon65.png",
    "images/razon66.png", "images/razon67.png", "images/razon68.png", "images/razon69.png", "images/razon70.png",
    "images/razon71.png", "images/razon72.png", "images/razon73.png", "images/razon74.png", "images/razon75.png",
    "images/razon76.png", "images/razon77.png", "images/razon78.png", "images/razon79.png", "images/razon80.png",
    "images/razon81.png", "images/razon82.png", "images/razon83.png", "images/razon84.png", "images/razon85.png",
    "images/razon86.png", "images/razon87.png", "images/razon88.png", "images/razon89.png", "images/razon90.png",
    "images/razon91.png", "images/razon92.png", "images/razon93.png", "images/razon94.png", "images/razon95.png",
    "images/razon96.png", "images/razon97.png", "images/razon98.png", "images/razon99.png", "images/razon100.png"
];

// Opción 2: Si NO tienes todas las imágenes, usa placeholders pero manteniendo el array:
// const imagePaths = new Array(100).fill("https://via.placeholder.com/450x450/ffe6f0/ff99aa?text=❤️");

// ===== CONFIGURACIÓN =====
let currentIndex = 0;
let touchStartX = 0;
const VISIBLE_INDICATORS = 5; // ← CAMBIA ESTE NÚMERO (3,5,7,10)

// ===== ELEMENTOS =====
const introScreen = document.querySelector('.intro-screen');
const carouselContainer = document.querySelector('.carousel-container');
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicatorsWrapper = document.querySelector('.carousel-indicators');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('expanded-img');
const modalCaption = document.querySelector('.modal-caption');
const closeModal = document.querySelector('.close-modal');
const downloadBtn = document.querySelector('.download-btn');
const startBtn = document.querySelector('.start-btn');

// ===== INICIAR PÁGINA =====
function iniciarPagina() {
    introScreen.style.opacity = '0';
    introScreen.style.visibility = 'hidden';
    introScreen.style.display = 'none';
    
    carouselContainer.style.display = 'block';
    carouselContainer.classList.add('active');
    
    setTimeout(() => {
        updateCarousel();
        centerIndicators();
    }, 100);
}

if (startBtn) startBtn.addEventListener('click', iniciarPagina);

// ===== INICIALIZAR CARRUSEL =====
function initializeCarousel() {
    carouselInner.innerHTML = '';
    indicatorsWrapper.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
        // Item del carrusel
        const item = document.createElement('div');
        item.className = 'carousel-item';
        
        const reasonText = document.createElement('h2');
        reasonText.className = 'reason-text';
        reasonText.textContent = reasons[i];
        
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        
        const img = document.createElement('img');
        img.src = imagePaths[i];
        img.alt = `Razón ${i + 1}`;
        img.loading = 'lazy';
        
        img.addEventListener('click', () => {
            modal.classList.add('active');
            modal.style.display = 'flex';
            modalImg.src = img.src;
            modalCaption.textContent = `Razón ${i + 1}`;
        });
        
        imageContainer.appendChild(img);
        item.appendChild(reasonText);
        item.appendChild(imageContainer);
        carouselInner.appendChild(item);
        
        // Indicador
        const indicator = document.createElement('button');
        indicator.className = 'indicator';
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsWrapper.appendChild(indicator);
    }
    
    updateCarousel();
}

// ===== NAVEGACIÓN =====
function goToSlide(index) {
    if (index < 0) index = 99;
    if (index >= 100) index = 0;
    currentIndex = index;
    updateCarousel();
    centerIndicators();
}

function updateCarousel() {
    const slideWidth = carouselInner.clientWidth;
    carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    
    document.querySelectorAll('.indicator').forEach((ind, i) => {
        ind.classList.toggle('active', i === currentIndex);
    });
}

// ===== 🎯 FUNCIÓN PRINCIPAL - CENTRA LOS INDICADORES =====
function centerIndicators() {
    if (!indicatorsWrapper) return;
    
    // Calcular posición
    const indicatorWidth = 24; // 12px + 12px gap
    const totalIndicators = 100;
    const visibleWidth = VISIBLE_INDICATORS * indicatorWidth;
    const maxScroll = Math.max(0, (totalIndicators * indicatorWidth) - visibleWidth);
    
    // Centrar el indicador actual
    let scrollPosition = (currentIndex * indicatorWidth) - (visibleWidth / 2) + (indicatorWidth / 2);
    scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));
    
    // Aplicar transformación
    indicatorsWrapper.style.transform = `translateX(-${scrollPosition}px)`;
}

// ===== EVENTOS =====
prevBtn?.addEventListener('click', () => goToSlide(currentIndex - 1));
nextBtn?.addEventListener('click', () => goToSlide(currentIndex + 1));

closeModal?.addEventListener('click', () => {
    modal.classList.remove('active');
    modal.style.display = 'none';
});

modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
    }
});

// Touch events
carouselContainer?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

carouselContainer?.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) goToSlide(currentIndex + 1);
    if (touchEndX > touchStartX + 50) goToSlide(currentIndex - 1);
});

// Resize
window.addEventListener('resize', () => {
    updateCarousel();
    centerIndicators();
});

// ===== 🌸 PARTÍCULAS FLOTANTES - MÁS GRANDES Y ABUNDANTES =====
function createParticles() {
    // Eliminar contenedor anterior si existe
    const oldContainer = document.querySelector('.particles-container');
    if (oldContainer) oldContainer.remove();
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth <= 480;

    // 🟢 MÁS PARTÍCULAS - CANTIDAD AUMENTADA
    const heartCount = isSmallScreen ? 20 : (isMobile ? 35 : 60);  // Aumentado de 8-30 a 20-60
    const tulipCount = isSmallScreen ? 10 : (isMobile ? 20 : 35); // Aumentado de 3-15 a 10-35

    // Crear corazones flotantes - MÁS GRANDES
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'particle';
            
            // Variedad de corazones
            const hearts = ['❤️', '🩷', '💖', '💕', '💗', '💓', '💘', '💝'];
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 15 + 15) + 's'; // Más rápido
            heart.style.animationDelay = Math.random() * -15 + 's';
            
            // 🟢 TAMAÑOS MÁS GRANDES (aumentados)
            const size = isSmallScreen ? (Math.random() * 30 + 25) : 
                        (isMobile ? (Math.random() * 40 + 30) : (Math.random() * 50 + 35));
            heart.style.fontSize = size + 'px';
            
            // Colores pastel variados
            const colors = ['#ffb6c1', '#ff99aa', '#ffccd5', '#ffc0cb', '#ffe6f0', '#ffd9e6', '#f9c9d1'];
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            // Opacidad un poco más alta
            heart.style.opacity = isSmallScreen ? 0.2 : (isMobile ? 0.25 : 0.3);
            
            // Rotación aleatoria
            heart.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
            
            particlesContainer.appendChild(heart);
        }, i * 20);
    }

    // Crear tulipanes flotantes - MÁS GRANDES
    for (let i = 0; i < tulipCount; i++) {
        setTimeout(() => {
            const tulip = document.createElement('div');
            tulip.className = 'tulip';
            tulip.innerHTML = '🌷';
            
            tulip.style.left = Math.random() * 100 + '%';
            tulip.style.animationDuration = (Math.random() * 20 + 20) + 's';
            tulip.style.animationDelay = Math.random() * -20 + 's';
            
            // 🟢 TULIPANES MÁS GRANDES (aumentados)
            const size = isSmallScreen ? (Math.random() * 35 + 30) : 
                        (isMobile ? (Math.random() * 45 + 35) : (Math.random() * 55 + 40));
            tulip.style.fontSize = size + 'px';
            
            // Tulipanes en tonos rosados
            const tulipColors = ['#ff99aa', '#ffb6c1', '#ffa07a', '#f7c0c3', '#f8b9c5'];
            tulip.style.color = tulipColors[Math.floor(Math.random() * tulipColors.length)];
            
            tulip.style.opacity = isSmallScreen ? 0.15 : (isMobile ? 0.18 : 0.22);
            
            // Variación de tono
            tulip.style.filter = `hue-rotate(${Math.random() * 30 - 15}deg)`;
            
            // Rotación aleatoria
            tulip.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
            
            particlesContainer.appendChild(tulip);
        }, i * 30);
    }
    
    console.log(`🌸 Creados ${heartCount} corazones y ${tulipCount} tulipanes flotantes`);
}

// ===== 🩷 CORAZÓN QUE SIGUE AL MOUSE =====
function createMouseHeart() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth <= 480;
    
    // Solo en desktop
    if (!isMobile && !isSmallScreen) {
        // Eliminar corazón anterior si existe
        const oldHeart = document.querySelector('.mouse-heart');
        if (oldHeart) oldHeart.remove();
        
        const mouseHeart = document.createElement('div');
        mouseHeart.className = 'mouse-heart';
        mouseHeart.innerHTML = '🩷';
        document.body.appendChild(mouseHeart);

        document.addEventListener('mousemove', (e) => {
            mouseHeart.style.left = e.clientX + 'px';
            mouseHeart.style.top = e.clientY + 'px';
        });

        document.addEventListener('mouseleave', () => {
            mouseHeart.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            mouseHeart.style.opacity = '1';
        });
    }
}

// ===== INICIAR =====
document.addEventListener('DOMContentLoaded', () => {
    introScreen.style.display = 'flex';
    carouselContainer.style.display = 'none';
    initializeCarousel();
    // Crear efectos visuales
    createParticles();
    //createMouseHeart();
    
    introScreen.style.display = 'flex';
    carouselContainer.style.display = 'none';
    initializeCarousel();
});
// ===== 🎵 BOTÓN DE MÚSICA CON REPRODUCCIÓN AUTOMÁTICA =====
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('musicToggle');
    const musicIcon = document.querySelector('.music-icon');
    
    // Configuración inicial
    audio.volume = 0.3; // Volumen moderado
    audio.muted = false; // NO silenciado
    
    // ESTRATEGIA PARA REPRODUCIR AUTOMÁTICAMENTE
    function playAudio() {
        audio.play()
            .then(() => {
                console.log("🎵 Música reproduciéndose automáticamente");
                musicIcon.textContent = '🔊';
                toggleBtn.classList.remove('muted');
            })
            .catch(error => {
                console.log("❌ No se pudo reproducir automáticamente:", error);
                // Si no puede reproducir, mostrar botón en mute
                musicIcon.textContent = '🔇';
                toggleBtn.classList.add('muted');
                
                // Intentar reproducir cuando el usuario haga clic en cualquier parte
                document.body.addEventListener('click', function playOnClick() {
                    audio.play();
                    musicIcon.textContent = '🔊';
                    toggleBtn.classList.remove('muted');
                    document.body.removeEventListener('click', playOnClick);
                }, { once: true });
            });
    }
    
    // Intentar reproducir inmediatamente
    playAudio();
    
    // También intentar reproducir cuando el usuario interactúa con el botón de inicio
    const startBtn = document.querySelector('.start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
            }
        });
    }
    
    // Botón de silenciar/activar
    toggleBtn.addEventListener('click', () => {
        if (audio.muted || audio.paused) {
            audio.muted = false;
            audio.play();
            musicIcon.textContent = '🔊';
            toggleBtn.classList.remove('muted');
        } else {
            audio.muted = true;
            audio.pause();
            musicIcon.textContent = '🔇';
            toggleBtn.classList.add('muted');
        }
    });
});