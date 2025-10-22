document.addEventListener('DOMContentLoaded', () => {
    // Language data
    const translations = {
        'en': {
            // Navigation
            'nav-home': 'Home',
            'nav-mods': 'MODS',
            'nav-about': 'About',
            'custom-heading': 'Custom',
            'dark-mode': 'Dark Mode',
            'language-label': 'Language',
            'logout': 'Logout',
            // Home page
            'home-hero-title': 'Welcome to the OAKZA AZ. website.',
            'home-hero-subtitle': 'Collect works and channels to follow various clips. You can explore clips at.',
            'featured-title': 'Featured Creations',
            'featured-subtitle': 'A glimpse into my latest projects, crafted with passion and precision.',
            'project-one-title': 'MODS Download',
            'project-one-desc': 'You can download it here.',
            'project-two-title': 'Facebook',
            'project-two-desc': 'You can follow the work here.',
            'project-three-title': 'You Tube',
            'project-three-desc': 'You can follow the work here.',
            'explore-button': 'Explore',
            // Mods page
            'mods-title': 'MODS Download',
            'mods-description': 'Here you can find all my latest creations and mods. Explore the list and enhance your experience.',
            'mod-name-thai-font': 'Thai_Font',
            'mod-description-thai-font': 'Version 1.21.10: Thai_Font is a MOD that changes the font in Minecraft!',
            'mod-name-another': 'Another Awesome Mod',
            'mod-description-another': 'A new mod that adds cool features to the game. Check it out now!',
            'download-button': 'Download',
            // About page

            'about-me-title': 'About Me',
        'about-me-summary-th': 'Hello, I\'m Oak, a creator. I am passionate about technology and design. I am a YouTuber and web developer, always creating something new.',
        'main-work-title-th': '🔧 My Main Work',
        'main-work-details-th': '🎥 YouTuber – I edit, record, and do everything by myself<br>🧑‍💻 Web Developer – What started as just tinkering with code at night turned into building real websites<br>🎮 Gamer (a little) – Some videos are games, some are informative, and some are... just me rambling<br>📷 Creator – Images, sound, words, music... I use everything to express "who I am"',
        'motivation-title-th': '💡 My Motivation',
        'motivation-details-th': 'I\'m not looking for worldwide fame. If someone watches my content and gets some benefit from it... that\'s enough for me.',

            // Footer
            'footer-follow': 'Follow the work at.',
            'footer-copyright': 'All rights reserved © 2025 OAK',
            'footer-madeby': 'Made by Taylor Brooks'
        },
        'th': {
            // Navigation
            'nav-home': 'หน้าหลัก',
            'nav-mods': 'MODS',
            'nav-about': 'เกี่ยวกับ',
            'custom-heading': 'ตั้งค่า',
            'dark-mode': 'โหมดมืด',
            'language-label': 'ภาษา',
            'logout': 'ออกจากระบบ',
            // Home page
            'home-hero-title': 'ยินดีต้อนรับเข้าสู่เว็บไซต์ OAKZA AZ.',
            'home-hero-subtitle': 'รวบรวมผลงาน และช่องทางการติดตามคลิปต่างๆ สามารถสำรวจคลิปได้ที่',
            'featured-title': 'ผลงานเด่น',
            'featured-subtitle': 'ผลงานล่าสุดของฉันที่สร้างสรรค์ขึ้นด้วยความมุ่งมั่นและความแม่นยำ',
            'project-one-title': 'ดาวน์โหลด MODS',
            'project-one-desc': 'สามารถดาวน์โหลดได้ที่นี่',
            'project-two-title': 'เพจ Facebook',
            'project-two-desc': 'สามารถติดตามผลงานได้ที่นี่',
            'project-three-title': 'ช่อง YouTube',
            'project-three-desc': 'สามารถติดตามผลงานได้ที่นี่',
            'explore-button': 'สำรวจ',
            // Mods page
            'mods-title': 'ดาวน์โหลด MODS',
            'mods-description': 'ที่นี่คุณสามารถดาวน์โหลด MODS ทั้งหมดที่ฉันสร้างขึ้นมาได้',
            'mod-name-thai-font': 'Thai_Font',
            'mod-description-thai-font': 'เวอร์ชั่น 1.21.10: Thai_Font คือ MOD ที่เปลี่ยนฟอนต์ในเกม Minecraft!',
            'mod-name-another': 'MOD สุดเจ๋งอีกตัว',
            'mod-description-another': 'MOD ใหม่ที่เพิ่มฟีเจอร์เจ๋งๆ ให้กับเกม ลองดูเลย!',
            'download-button': 'ดาวน์โหลด',
            // About page
            
                   'about-me-title': 'เกี่ยวกับฉัน',
        'about-me-summary-th': 'สวัสดีครับ ผมชื่อ OAKZA AZ ผมเป็นครีเอเตอร์',
        'main-work-title-th': '🔧 งานหลักไม่รู้จะเรียกอะไรดี... แต่รู้ว่า ผมทำสิ่งที่รัก',
        'main-work-details-th': '🎥 ยูทูปเบอร์ – ตัดต่อเอง อัดเสียงเอง ทำทุกอย่างเอง<br>🧑‍💻 นักพัฒนาเว็บไซต์ – จากแค่แก้โค้ดเล่น ๆ ตอนกลางคืน กลายมาเป็นคนสร้างเว็บจริง<br>🎮 เกมเมอร์นิด ๆ – บางคลิปคือเกม บางคลิปคือสาระ บางคลิปคือ...แค่บ่น<br>📷 ครีเอเตอร์ – ภาพ เสียง คำพูด ดนตรี ผมใช้ทุกอย่างเพื่อสื่อ "ตัวตน" ของผม',
        'motivation-title-th': '💡 ทำไมถึงยังทำอยู่?',
        'motivation-details-th': 'ผมไม่ได้มีเป้าหมายจะดังระดับโลก แค่มีคนดูแล้วได้อะไรบางอย่างจากผม… นั่นแหละ คือพอแล้ว',

            // Footer
            'footer-follow': 'ติดตามผลงานได้ที่',
            'footer-copyright': 'สงวนลิขสิทธิ์ © 2025 OAK',
            'footer-madeby': 'สร้างโดย Taylor Brooks'
        }
    };

    const toggleButton = document.querySelector('.toggle-button');
    const sidebar = document.querySelector('.sidebar');
    const langButtons = document.querySelectorAll('.lang-button');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.querySelector('body');
    const activeSidebar = localStorage.getItem('sidebarActive') === 'true';

    // Function to set the website language
    const setLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'P' || element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'SPAN' || element.tagName === 'A') {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
    }
    
    // Function to handle sidebar state
    const setSidebarState = (isActive) => {
        if (isActive) {
            sidebar.classList.add('active');
            toggleButton.classList.add('right');
        } else {
            sidebar.classList.remove('active');
            toggleButton.classList.remove('right');
        }
    }

    // Set initial state from localStorage
    const savedLang = localStorage.getItem('language') || 'th';
    setLanguage(savedLang);
    document.querySelector(`.lang-button[data-lang="${savedLang}"]`).classList.add('active');
    
    setSidebarState(activeSidebar);

    // Event listeners
    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', () => {
            const isActive = sidebar.classList.toggle('active');
            toggleButton.classList.toggle('right');
            localStorage.setItem('sidebarActive', isActive);
        });
    }

    if (langButtons.length > 0) {
        langButtons.forEach(button => {
            button.addEventListener('click', () => {
                langButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const lang = button.getAttribute('data-lang');
                setLanguage(lang);
            });
        });
    }

    if (darkModeToggle && body) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            if (isDarkMode) {
                darkModeToggle.querySelector('ion-icon').setAttribute('name', 'sunny-outline');
            } else {
                darkModeToggle.querySelector('ion-icon').setAttribute('name', 'moon-outline');
            }
        });

        // Set initial dark mode state from localStorage
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            body.classList.add('dark-mode');
            darkModeToggle.querySelector('ion-icon').setAttribute('name', 'sunny-outline');
        }
    }
});


