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
            'project-two-title': 'Project Two',
            'project-two-desc': 'Showcasing the seamless fusion of art and technology.',
            'project-three-title': 'Project Three',
            'project-three-desc': 'Innovating with new concepts and breathtaking visuals.',
            'explore-button': 'Explore',
            // Mods page
            'mods-title': 'MODS Download',
            'mods-description': 'Here you can find all my latest creations and mods. Explore the list and enhance your experience.',
            'mod-name-thai-font': 'Thai_Font',
            'mod-description-thai-font': 'Version 1.21.8: Thai_Font is a MOD that changes the font in Minecraft!',
            'mod-name-another': 'Another Awesome Mod',
            'mod-description-another': 'A new mod that adds cool features to the game. Check it out now!',
            'download-button': 'Download',
            // About page
            'about-me-title': 'About Me',
            'about-me-summary': 'Hello, I\'m Oak, a creator passionate about technology and design. I make YouTube content and develop custom Minecraft modifications. This is my digital space to share my work and journey with you.',
            'main-work-title': '⚙️ My Main Work',
            'main-work-details': 'I create mods for a game called Minecraft. I believe that games are not just for playing, but also for learning and developing new ideas.',
            'motivation-title': '💡 My Motivation',
            'motivation-details': 'I\'m not looking for fame. If my content helps someone learn or feel inspired, that\'s enough motivation for me to keep creating.',
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
            'project-one-title': 'โปรเจกต์ที่หนึ่ง',
            'project-one-desc': 'เจาะลึกการเล่าเรื่องด้วยภาพและงานดีไซน์',
            'project-two-title': 'โปรเจกต์ที่สอง',
            'project-two-desc': 'แสดงการผสมผสานที่ลงตัวระหว่างศิลปะและเทคโนโลยี',
            'project-three-title': 'โปรเจกต์ที่สาม',
            'project-three-desc': 'สร้างสรรค์นวัตกรรมด้วยแนวคิดใหม่และภาพที่น่าทึ่ง',
            'explore-button': 'สำรวจ',
            // Mods page
            'mods-title': 'ดาวน์โหลด MODS',
            'mods-description': 'ที่นี่คุณสามารถดาวน์โหลด MODS ทั้งหมดที่ฉันสร้างขึ้นมาได้',
            'mod-name-thai-font': 'Thai_Font',
            'mod-description-thai-font': 'เวอร์ชั่น 1.21.8: Thai_Font คือ MOD ที่เปลี่ยนฟอนต์ในเกม Minecraft!',
            'mod-name-another': 'MOD สุดเจ๋งอีกตัว',
            'mod-description-another': 'MOD ใหม่ที่เพิ่มฟีเจอร์เจ๋งๆ ให้กับเกม ลองดูเลย!',
            'download-button': 'ดาวน์โหลด',
            // About page
            'about-me-title': 'เกี่ยวกับฉัน',
            'about-me-summary': 'สวัสดีครับ ผมชื่อ Oak เป็นนักสร้างสรรค์ที่มีความหลงใหลในเทคโนโลยีและงานออกแบบ ผมสร้างเนื้อหาบน YouTube และพัฒนา MODs สำหรับเกม Minecraft นี่คือพื้นที่ดิจิทัลของผมที่จะแบ่งปันผลงานและเรื่องราวของผมกับคุณ',
            'main-work-title': '⚙️ งานหลักของฉัน',
            'main-work-details': 'ฉันสร้าง MODs สำหรับเกม Minecraft ฉันเชื่อว่าเกมไม่ได้มีไว้เพื่อเล่นอย่างเดียว แต่ยังเป็นพื้นที่สำหรับการเรียนรู้และพัฒนาแนวคิดใหม่ๆ',
            'motivation-title': '💡 แรงบันดาลใจของฉัน',
            'motivation-details': 'ฉันไม่ได้ตั้งเป้าที่จะมีชื่อเสียงระดับโลก แค่ใครสักคนได้ดูเนื้อหาของฉันแล้วได้ประโยชน์อะไรบางอย่างจากมัน... นั่นก็เพียงพอสำหรับฉันแล้ว',
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