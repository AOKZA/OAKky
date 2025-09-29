document.addEventListener('DOMContentLoaded', () => {
    
    // โค้ด Ionicon ถูกรวมเข้าที่นี่: ใช้ฟังก์ชันที่โหลด script นี้แบบไดนามิก
    const loadIonIcons = () => {
        const scriptEsm = document.createElement('script');
        scriptEsm.type = 'module';
        scriptEsm.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
        document.body.appendChild(scriptEsm);

        const scriptNomodule = document.createElement('script');
        scriptNomodule.nomodule = true;
        scriptNomodule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
        document.body.appendChild(scriptNomodule);
    };

    // เรียกใช้ฟังก์ชันเพื่อโหลด Ionicons
    loadIonIcons();

    // 3. Language data (Translations)
    const translations = {
        'en': {
            // Navigation
            'nav-home': 'Home',
            'nav-mods': 'MODS',
            'nav-about': 'About',
            'nav-donate': 'Donate', 
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
            'mod-description-thai-font': 'Version 1.21.8: Thai_Font is a MOD that changes the font in Minecraft!',
            'mod-name-another': 'Another Awesome Mod',
            'mod-description-another': 'A new mod that adds cool features to the game. Check it out now!',
            'download-button': 'Download',
            
            // Donate page
            'donate-title': 'Support OAKZA AZ.',
            'donate-description': 'Your support helps keep the projects going. Support can be made at the links below:',
            'donate-youtube-membership': 'YouTube Membership',
            'donate-youtube-desc': 'Join the channel membership for exclusive perks and to directly support the creator!',
            'donate-button-join': 'Join Membership',
            'donate-tipme': 'TipMe (Direct Donation)',
            'donate-tipme-desc': 'Send a one-time donation/tip through TipMe platform.',
            'donate-button-tip': 'Send Tip',
            'donate-thankyou': 'Thank you for your kindness and support!',
            
            // About page (เพิ่มใหม่)
            'about-title': 'About OAKZA AZ.',
            'about-description': "Hello, I'm OAK. I'm a content creator focused on video game modding, tutorials, and streaming. This website serves as a hub for my creative projects and community.",
            'about-oak-title': 'About OAK',
            'about-oak-details': "I am a content creator focusing on game modding, tutorials, and streaming. This website is the official hub for all my projects.",
            'my-career-title': 'My Career',
            'my-career-details': "My focus is on creating high-quality video content, especially for game mods. My goal is to share knowledge and fun experiences with the community.",
            'motivation-title': 'Why I Continue?',
            'motivation-details': "I don't aim for global fame. As long as someone watches and gains something from my content... that's enough for me.",

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
            'nav-donate': 'โดเนท', 
            'custom-heading': 'ตั้งค่า',
            'dark-mode': 'โหมดมืด',
            'language-label': 'ภาษา',
            'logout': 'ออกจากระบบ',
            // Home page
            'home-hero-title': 'ยินดีต้อนรับสู่เว็บไซต์ OAKZA AZ.',
            'home-hero-subtitle': 'รวมผลงานและช่องทางติดตามคลิปต่างๆ คุณสามารถสำรวจคลิปได้ที่',
            'featured-title': 'ผลงานเด่น',
            'featured-subtitle': 'ภาพรวมของโปรเจกต์ล่าสุด สร้างสรรค์ด้วยความมุ่งมั่นและแม่นยำ',
            'project-one-title': 'ดาวน์โหลด MODS',
            'project-one-desc': 'คุณสามารถดาวน์โหลดได้ที่นี่',
            'project-two-title': 'Facebook',
            'project-two-desc': 'คุณสามารถติดตามผลงานได้ที่นี่',
            'project-three-title': 'You Tube',
            'project-three-desc': 'คุณสามารถติดตามผลงานได้ที่นี่',
            'explore-button': 'สำรวจ',
            // Mods page
            'mods-title': 'ดาวน์โหลด MODS',
            'mods-description': 'ที่นี่คุณสามารถดาวน์โหลด MODS ทั้งหมดที่ฉันสร้างขึ้นมาได้',
            'mod-name-thai-font': 'Thai_Font',
            'mod-description-thai-font': 'เวอร์ชั่น 1.21.8: Thai_Font คือ MOD ที่เปลี่ยนฟอนต์ในเกม Minecraft!',
            'mod-name-another': 'MOD สุดเจ๋งอีกตัว',
            'mod-description-another': 'MOD ใหม่ที่เพิ่มฟีเจอร์เจ๋งๆ ให้กับเกม ลองดูเลย!',
            'download-button': 'ดาวน์โหลด',
            
            // Donate page
            'donate-title': 'สนับสนุน OAKZA AZ.',
            'donate-description': 'การสนับสนุนของคุณช่วยให้โปรเจ็กต์ดำเนินต่อไปได้ **สามารถสนับสนุนได้ที่ลิงก์ด้านล่างนี้:**',
            'donate-youtube-membership': 'สมัครสมาชิก YouTube',
            'donate-youtube-desc': 'สมัครสมาชิกช่องเพื่อรับสิทธิพิเศษและสนับสนุนผู้สร้างโดยตรง!',
            'donate-button-join': 'เข้าร่วมสมาชิก',
            'donate-tipme': 'TipMe (บริจาค/ทิป)',
            'donate-tipme-desc': 'ส่งเงินบริจาค/ทิปแบบครั้งเดียวผ่านแพลตฟอร์ม TipMe.',
            'donate-button-tip': 'ส่งทิป/บริจาค',
            'donate-thankyou': 'ขอบคุณสำหรับน้ำใจและการสนับสนุนของคุณ!',
            
            // About page (เพิ่มใหม่)
            'about-title': 'เกี่ยวกับ OAKZA AZ.',
            'about-description': 'สวัสดีครับ ผม OAK เป็นผู้สร้างเนื้อหาที่เน้นการทำ Mod เกม, วิดีโอสอน, และการสตรีมมิ่ง เว็บไซต์นี้เป็นศูนย์รวมของโปรเจกต์สร้างสรรค์และชุมชนของผมครับ',
            'about-oak-title': 'เกี่ยวกับ OAK',
            'about-oak-details': 'ผมเป็น Content Creator เน้นการทำคลิปสอน Mod เกม, สอนทำคลิป, และการ Live สด เว็บไซต์นี้เป็นศูนย์รวมของผลงานทั้งหมดของผม',
            'my-career-title': '💼 อาชีพของผม',
            'my-career-details': 'การทำคลิปวิดีโอคือส่วนหนึ่งของการทำงานของผม ผมมีเป้าหมายในการสร้างสรรค์วิดีโอคุณภาพสูงและแบ่งปันความรู้กับผู้คน',
            'motivation-title': '💡 ทำไมถึงยังทำอยู่?',
            'motivation-details': 'ผมไม่ได้มีเป้าหมายจะดังระดับโลก แค่มีคนดูแล้วได้อะไรบางอย่างจากผม… นั่นแหละ คือพอแล้ว',

            // Footer
            'footer-follow': 'ติดตามผลงานได้ที่',
            'footer-copyright': 'สงวนลิขสิทธิ์ © 2025 OAK',
            'footer-madeby': 'สร้างโดย Taylor Brooks'
        }
    };

    // 4. Initializing logic (ต้องอยู่หลังจากการโหลด Template และ Ionicon)
    // โค้ดส่วนนี้จะทำงานกับ element ที่มีอยู่แล้วใน HTML
    const toggleButton = document.querySelector('.toggle-button');
    const sidebar = document.querySelector('.sidebar');
    const langButtons = document.querySelectorAll('.language-switcher .lang-button');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    const setLanguage = (lang) => {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n').replace(/-th$/, ''); // ใช้ base key
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        localStorage.setItem('language', lang);
    };

    // Initialize language from localStorage or default to 'th'
    const storedLang = localStorage.getItem('language') || 'th';
    setLanguage(storedLang);
    langButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-lang') === storedLang) {
            button.classList.add('active');
        }
    });

    // Sidebar state initialization
    const isSidebarActive = localStorage.getItem('sidebarActive') === 'true';
    if (isSidebarActive && sidebar) {
        sidebar.classList.add('active');
        if (toggleButton) toggleButton.classList.add('right');
    }

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
            const icon = darkModeToggle.querySelector('ion-icon');
            if (icon) icon.setAttribute('name', 'sunny-outline');
        }
    }
});