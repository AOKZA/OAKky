document.addEventListener('DOMContentLoaded', () => {
    
    // โค้ดสำหรับโหลด Ionicons ถูกลบออกเนื่องจากมีการโหลดใน HTML โดยตรงแล้ว (ลดโค้ดที่ไม่จำเป็น)
    
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
            'about-oak-details': "I am a content creator focusing on game modding, tutorials, and streaming. This website is the official hub for all my works, allowing you to easily access mods and support the channel.",
            'mission-title': 'Our Mission',
            'mission-details': 'To provide high-quality, creative mods and educational content for the gaming community. We aim to enhance the player experience and foster a friendly, supportive environment.',
            'motivation-title': 'Motivation',
            'motivation-details': "I'm not aiming for global fame. Just having people watch and gain something from me... that's enough.",
            
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
            'nav-donate': 'สนับสนุน',
            'custom-heading': 'ตั้งค่า',
            'dark-mode': 'โหมดมืด',
            'language-label': 'ภาษา',
            'logout': 'ออกจากระบบ',
            // Home page
            'home-hero-title': 'ยินดีต้อนรับสู่เว็บไซต์ของ OAKZA AZ.',
            'home-hero-subtitle': 'รวบรวมผลงานและช่องทางในการติดตามคลิปต่างๆ สามารถสำรวจคลิปได้ที่',
            'featured-title': 'ผลงานเด่น',
            'featured-subtitle': 'สำรวจโปรเจ็กต์ล่าสุดของฉัน ที่สร้างขึ้นด้วยความมุ่งมั่นและความแม่นยำ',
            'project-one-title': 'ดาวน์โหลด MODS',
            'project-one-desc': 'สามารถดาวน์โหลดได้ที่นี่',
            'project-two-title': 'Facebook',
            'project-two-desc': 'สามารถติดตามผลงานได้ที่นี่',
            'project-three-title': 'You Tube',
            'project-three-desc': 'สามารถติดตามผลงานได้ที่นี่',
            'explore-button': 'สำรวจ',
            // Mods page
            'mods-title': 'ดาวน์โหลด MODS',
            'mods-description': 'ที่นี่คุณสามารถค้นหาผลงานและ Mod ล่าสุดทั้งหมดของฉัน สำรวจรายการและยกระดับประสบการณ์ของคุณ',
            'mod-name-thai-font': 'Thai_Font',
            'mod-description-thai-font': 'เวอร์ชัน 1.21.8: Thai_Font เป็น MOD ที่เปลี่ยนฟอนต์ในเกม Minecraft!',
            'mod-name-another': 'Mod เจ๋งๆ อีกอัน',
            'mod-description-another': 'Mod ใหม่ที่เพิ่มฟีเจอร์เจ๋งๆ ให้กับเกม ลองดูเลย!',
            'download-button': 'ดาวน์โหลด',

            // Donate page
            'donate-title': 'สนับสนุน OAKZA AZ.',
            'donate-description': 'การสนับสนุนของคุณช่วยให้โปรเจ็กต์ดำเนินต่อไปได้ สามารถให้การสนับสนุนได้ตามลิงก์ด้านล่าง:',
            'donate-youtube-membership': 'สมัครสมาชิก YouTube',
            'donate-youtube-desc': 'เข้าร่วมเป็นสมาชิกช่องเพื่อรับสิทธิพิเศษและสนับสนุนผู้สร้างโดยตรง!',
            'donate-button-join': 'เข้าร่วมเป็นสมาชิก',
            'donate-tipme': 'TipMe (บริจาคโดยตรง)',
            'donate-tipme-desc': 'ส่งเงินบริจาค/ทิปแบบครั้งเดียวผ่านแพลตฟอร์ม TipMe',
            'donate-button-tip': 'ส่งทิป',
            'donate-thankyou': 'ขอบคุณสำหรับน้ำใจและการสนับสนุนของคุณ!',
            
            // About page (เพิ่มใหม่)
            'about-title': 'เกี่ยวกับ OAKZA AZ.',
            'about-description': "สวัสดีครับ ผมชื่อ OAK ครับ ผมเป็นผู้สร้างเนื้อหาที่เน้นไปที่การสร้างม็อดเกมวิดีโอ, การสอน, และการสตรีมมิ่ง เว็บไซต์นี้ทำหน้าที่เป็นศูนย์กลางสำหรับโปรเจกต์สร้างสรรค์และชุมชนของผม",
            'about-oak-title': 'เกี่ยวกับ OAK',
            'about-oak-details': "ผมเป็นผู้สร้างเนื้อหาที่เน้นไปที่การสร้างม็อดเกม, การสอน, และการสตรีมมิ่ง เว็บไซต์นี้คือศูนย์กลางอย่างเป็นทางการสำหรับผลงานทั้งหมดของผม ทำให้คุณสามารถเข้าถึงม็อดและสนับสนุนช่องได้อย่างง่ายดาย",
            'mission-title': 'พันธกิจของเรา',
            'mission-details': 'เพื่อมอบม็อดที่มีคุณภาพสูง สร้างสรรค์ และเนื้อหาด้านการศึกษาให้กับชุมชนเกม เรามุ่งมั่นที่จะยกระดับประสบการณ์ผู้เล่นและส่งเสริมสภาพแวดล้อมที่เป็นมิตรและให้การสนับสนุน',
            'motivation-title': 'แรงจูงใจ',
            'motivation-details': "ผมไม่ได้มีเป้าหมายจะดังระดับโลก แค่มีคนดูแล้วได้อะไรบางอย่างจากผม... นั่นแหละ คือพอแล้ว",
            
            // Footer
            'footer-follow': 'ติดตามผลงานได้ที่',
            'footer-copyright': 'สงวนลิขสิทธิ์ทั้งหมด © 2025 OAK',
            'footer-madeby': 'สร้างโดย Taylor Brooks'
        }
    };

    // 4. Localization Function
    const setLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        localStorage.setItem('language', lang);
    };

    // 5. Initial Load & Event Listeners
    const body = document.body;
    const langButtons = document.querySelectorAll('.lang-button');
    const toggleButton = document.querySelector('.toggle-button');
    const sidebar = document.querySelector('.sidebar');
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Set initial language state from localStorage
    const savedLang = localStorage.getItem('language') || 'th';
    setLanguage(savedLang);
    langButtons.forEach(button => {
        if (button.getAttribute('data-lang') === savedLang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Sidebar Toggle
    if (toggleButton && sidebar) {
        // Set initial sidebar state from localStorage
        const isSidebarActive = localStorage.getItem('sidebarActive') === 'true';
        if (isSidebarActive) {
            sidebar.classList.add('active');
            toggleButton.classList.add('right');
        }

        toggleButton.addEventListener('click', () => {
            const isActive = sidebar.classList.toggle('active');
            toggleButton.classList.toggle('right');
            localStorage.setItem('sidebarActive', isActive);
        });
    }

    // Language Button Click
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

    // Dark Mode Toggle
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
        const icon = darkModeToggle.querySelector('ion-icon');
        if (isDarkMode) {
            body.classList.add('dark-mode');
            if (icon) icon.setAttribute('name', 'sunny-outline');
        } else {
            if (icon) icon.setAttribute('name', 'moon-outline');
        }
    }
});