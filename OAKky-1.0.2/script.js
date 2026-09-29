/**
 * script.js - OAKZA AZ. Apple Minimal Design & Antigravity Physics
 * 1. Internationalization (i18n) - Thai & English
 * 2. Dark Mode / Light Mode Theme Engine
 * 3. Matter.js Antigravity Physics Engine & Floating HUD
 * 4. Mobile Navigation Drawer
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================
       1. INTERNATIONALIZATION (i18n) DICTIONARY
       ========================================================== */
    const translations = {
        'th': {
            // Navigation
            'nav-home': 'หน้าหลัก',
            'nav-mods': 'MODS',
            'nav-about': 'เกี่ยวกับ',
            'nav-donate': 'โดเนท',
            'nav-antigravity': 'Antigravity',
            'theme-toggle-label': 'สลับโหมดมืด/สว่าง',
            'language-label': 'ภาษา',
            'antigravity-label': 'ระบบฟิสิกส์ Antigravity',

            // Home Page
            'home-hero-badge': '✨ เว็บไซต์อย่างเป็นทางการ OAKZA AZ.',
            'home-hero-title': 'สร้างสรรค์ผลงาน MODS & คอนเทนต์ระดับพรีเมียม',
            'home-hero-subtitle': 'ศูนย์รวมผลงาน Minecraft MODS, คลิปวิดีโอสร้างสรรค์, และเทคโนโลยีที่คัดสรรด้วยความมุ่งมั่นและความประณีต',
            'home-cta-explore': 'สำรวจผลงาน',
            'home-cta-youtube': 'ดูบน YouTube',
            'home-antigravity-badge': '🪐 ฟีเจอร์พิเศษ Antigravity',
            'home-antigravity-title': 'ลองสัมผัสประสบการณ์ Antigravity',
            'home-antigravity-desc': 'คลิกปุ่มเพื่อปลดปล่อยวัตถุบนหน้าเว็บให้ลอย เด้ง กระดอน และสามารถใช้เมาส์จับลากโยนได้อิสระตามแรงโน้มถ่วง!',
            'home-antigravity-btn': 'เปิดโหมด Antigravity',
            'featured-title': 'ผลงานเด่น',
            'featured-subtitle': 'คัดสรรโปรเจกต์ล่าสุดที่ออกแบบด้วยความตั้งใจเพื่อทุกคน',
            'project-one-tag': 'MINECRAFT MOD',
            'project-one-title': 'MODS Download',
            'project-one-desc': 'ดาวน์โหลดม็อดเกมคุณภาพสูง เช่น Thai_Font รองรับภาษาไทย 100%',
            'project-two-tag': 'COMMUNITY',
            'project-two-title': 'Facebook Page',
            'project-two-desc': 'ติดตามอัปเดตข่าวสาร ข้อมูลใหม่ๆ และพูดคุยแลกเปลี่ยนความคิดเห็นกับเรา',
            'project-three-tag': 'YOUTUBE CHANNEL',
            'project-three-title': 'YouTube Content',
            'project-three-desc': 'รับชมวิดีโอสร้างสรรค์ คลิปสอนทำม็อด และสาระความสนุกมากมาย',
            'explore-button': 'สำรวจเพิ่มเติม',

            // MODS Page
            'mods-page-badge': '🎮 MINECRAFT MODIFICATIONS',
            'mods-page-title': 'ดาวน์โหลด MODS',
            'mods-page-subtitle': 'ม็อดที่พัฒนาขึ้นเพื่อยกระดับประสบการณ์การเล่น Minecraft ให้สมบูรณ์แบบและสะดวกสบายยิ่งขึ้น',
            'mod-name-thai-font': 'Thai_Font (ฟอนต์ภาษาไทย)',
            'mod-version-thai-font': 'เวอร์ชัน 1.21.8',
            'mod-desc-thai-font': 'ม็อดเปลี่ยนฟอนต์ในเกม Minecraft ให้อ่านภาษาไทยได้อย่างสวยงาม คมชัด สบายตา และไม่ทับซ้อนกับ UI เดิมของตัวเกม',
            'mod-f1-thai-font': '✓ รองรับภาษาไทย 100%',
            'mod-f2-thai-font': '✓ คมชัดทุกขนาดหน้าจอ',
            'mod-f3-thai-font': '✓ ติดตั้งง่าย ใช้งานได้ทันที',
            'mod-download-btn': 'ดาวน์โหลดฟรี',

            // About Page
            'about-page-badge': '👤 CONTENT CREATOR & DEVELOPER',
            'about-page-title': 'เกี่ยวกับ OAKZA AZ.',
            'about-page-subtitle': 'เรื่องราว แรงบันดาลใจ และความหลงใหลในการสร้างสรรค์เทคโนโลยี คอนเทนต์ และคอมมูนิตี้',
            'about-bio-title': 'สวัสดีครับ! ผม OAKZA AZ.',
            'about-bio-desc': 'ผมเป็น Content Creator และนักพัฒนาที่ชอบทดลองสิ่งใหม่ๆ มีความหลงใหลในการสร้างม็อดเกม Minecraft, ทำคลิปวิดีโอคุณภาพ และพัฒนาเว็บไซต์ เว็บไซต์นี้สร้างขึ้นเพื่อเป็นพื้นที่รวมผลงานและแบ่งปันสิ่งดีๆ ให้กับทุกคนครับ',
            'about-card1-title': '🎥 ครีเอเตอร์ & ยูทูบเบอร์',
            'about-card1-desc': 'บันทึกภาพ ตัดต่อเสียง และผลิตเนื้อหาวิดีโอด้วยตนเอง ใส่ใจในทุกรายละเอียดของภาพและเสียง เพื่อส่งมอบสาระและความบันเทิงให้กับผู้ชม',
            'about-card2-title': '🧑‍💻 นักพัฒนาเว็บไซต์',
            'about-card2-desc': 'จากความชอบเล่นโค้ดสู่การสร้างสรรค์เว็บที่ใช้งานได้จริง เน้นการออกแบบแนว Apple Minimal ที่สะอาด เรียบหรู ใช้งานง่าย และมีลูกเล่นน่าสนใจ',
            'about-card3-title': '💡 แรงบันดาลใจในการทำ',
            'about-card3-desc': 'ผมไม่ได้ตั้งเป้าหมายว่าจะต้องโด่งดังระดับโลก แค่มีผู้ชมหรือผู้ใช้งานสักคนได้รับประโยชน์ รอยยิ้ม หรือความรู้จากสิ่งที่ผมสร้าง... นั่นคือเป้าหมายที่แท้จริงแล้วครับ',

            // Donate Page
            'donate-page-badge': '❤️ สนับสนุนครีเอเตอร์',
            'donate-page-title': 'ร่วมสนับสนุน OAKZA AZ.',
            'donate-page-subtitle': 'ทุกการสนับสนุนของคุณคือกำลังใจอันยิ่งใหญ่ ที่ช่วยให้ผมสามารถพัฒนา MODS, สร้างสรรค์คอนเทนต์ และดูแลโปรเจกต์ต่อไปได้ครับ',
            'donate-yt-title': 'YouTube Membership',
            'donate-yt-desc': 'สมัครสมาชิกช่อง YouTube เพื่อรับตราสัญลักษณ์สุดพิเศษ อิโมจิเฉพาะตัว และสนับสนุนการผลิตคลิปโดยตรง',
            'donate-yt-btn': 'สมัครสมาชิกช่อง',
            'donate-tipme-title': 'TipMe (โดเนทโดยตรง)',
            'donate-tipme-desc': 'ส่งข้อความและเงินสนับสนุนขึ้นจอสตรีมได้ง่ายๆ ผ่านระบบ TipMe รองรับ PromptPay และ TrueMoney Wallet',
            'donate-tipme-btn': 'ส่งโดเนทผ่าน TipMe',
            'donate-thankyou-msg': 'ขอบคุณจากใจจริงสำหรับทุกแรงสนับสนุนและความเอื้อเฟื้อครับ! 🙏✨',

            // Footer
            'footer-brand-desc': 'ผลงานสร้างสรรค์ ม็อดเกม และคอนเทนต์คุณภาพ',
            'footer-follow': 'ติดตามผลงาน:',
            'footer-copyright': 'สงวนลิขสิทธิ์ © 2026 OAKZA AZ. All rights reserved.',
            'footer-madeby': 'ออกแบบด้วย Apple Minimalist Style & Antigravity Physics',

            // Antigravity HUD Controls
            'hud-status-text': 'โหมด Antigravity ทำงาน',
            'hud-gravity-on': '🌍 แรงโน้มถ่วง: เปิด (ร่วงลงพื้น)',
            'hud-gravity-off': '🚀 แรงโน้มถ่วง: ปิด (ลอยเคว้ง)',
            'hud-scatter-btn': '💥 ผลักกระจาย',
            'hud-restore-btn': '🔄 คืนสู่สภาพปกติ',
            'hud-toast-hint': '🖱️ คลิกแล้วจับโยนการ์ดหรือปุ่มเล่นได้เลย!'
        },
        'en': {
            // Navigation
            'nav-home': 'Home',
            'nav-mods': 'MODS',
            'nav-about': 'About',
            'nav-donate': 'Donate',
            'nav-antigravity': 'Antigravity',
            'theme-toggle-label': 'Toggle Dark/Light Mode',
            'language-label': 'Language',
            'antigravity-label': 'Antigravity Physics System',

            // Home Page
            'home-hero-badge': '✨ Official Website of OAKZA AZ.',
            'home-hero-title': 'Crafting Premium MODS & Creative Content',
            'home-hero-subtitle': 'The central hub for Minecraft mods, engaging video tutorials, and tech creations designed with passion and precision.',
            'home-cta-explore': 'Explore Creations',
            'home-cta-youtube': 'Watch on YouTube',
            'home-antigravity-badge': '🪐 Antigravity Interactive Feature',
            'home-antigravity-title': 'Experience Antigravity Physics',
            'home-antigravity-desc': 'Click to unleash the page elements! Watch them float, bounce, and fling them around freely using realistic physics!',
            'home-antigravity-btn': 'Launch Antigravity',
            'featured-title': 'Featured Creations',
            'featured-subtitle': 'A showcase of recent projects crafted with precision and dedication.',
            'project-one-tag': 'MINECRAFT MOD',
            'project-one-title': 'MODS Download',
            'project-one-desc': 'Download high-quality Minecraft mods including Thai_Font with 100% Thai glyph support.',
            'project-two-tag': 'COMMUNITY',
            'project-two-title': 'Facebook Page',
            'project-two-desc': 'Follow community updates, project news, and connect with us on Facebook.',
            'project-three-tag': 'YOUTUBE CHANNEL',
            'project-three-title': 'YouTube Content',
            'project-three-desc': 'Watch creative tutorials, gaming highlights, and entertaining tech videos.',
            'explore-button': 'Explore More',

            // MODS Page
            'mods-page-badge': '🎮 MINECRAFT MODIFICATIONS',
            'mods-page-title': 'MODS Download',
            'mods-page-subtitle': 'Custom Minecraft modifications engineered to elevate your gameplay and visual experience.',
            'mod-name-thai-font': 'Thai_Font (Thai Typography)',
            'mod-version-thai-font': 'Version 1.21.8',
            'mod-desc-thai-font': 'A refined mod that optimizes Minecraft fonts to display crisp, beautiful, and readable Thai typography seamlessly.',
            'mod-f1-thai-font': '✓ 100% Thai font support',
            'mod-f2-thai-font': '✓ Crisp on all screen sizes',
            'mod-f3-thai-font': '✓ Plug & play installation',
            'mod-download-btn': 'Download Free',

            // About Page
            'about-page-badge': '👤 CONTENT CREATOR & DEVELOPER',
            'about-page-title': 'About OAKZA AZ.',
            'about-page-subtitle': 'The story, philosophy, and passion driving my creative journey across technology and media.',
            'about-bio-title': 'Hello! I\'m OAKZA AZ.',
            'about-bio-desc': 'I am a creator and developer passionate about trying new things. From creating Minecraft mods to producing high-quality YouTube videos and developing modern websites, this platform is where I share my work with the world.',
            'about-card1-title': '🎥 Creator & YouTuber',
            'about-card1-desc': 'Recording, sound design, and video editing all produced in-house with meticulous attention to detail to deliver both entertainment and value.',
            'about-card2-title': '🧑‍💻 Web Developer',
            'about-card2-desc': 'Transforming late-night coding into sleek, Apple-inspired minimal web experiences that balance aesthetic purity with playful interactivity.',
            'about-card3-title': '💡 My Motivation',
            'about-card3-desc': 'I don\'t seek worldwide fame. If someone watches my content and gains knowledge, a spark of joy, or inspiration... that is the greatest reward.',

            // Donate Page
            'donate-page-badge': '❤️ SUPPORT CREATOR',
            'donate-page-title': 'Support OAKZA AZ.',
            'donate-page-subtitle': 'Your generosity powers new mods, better tutorials, and continuous creative projects. Thank you!',
            'donate-yt-title': 'YouTube Membership',
            'donate-yt-desc': 'Join channel membership to unlock exclusive loyalty badges, custom emojis, and support video production directly.',
            'donate-yt-btn': 'Join Membership',
            'donate-tipme-title': 'TipMe (Direct Tip)',
            'donate-tipme-desc': 'Send instant tips and messages to the stream display via TipMe, supporting PromptPay and TrueMoney Wallet.',
            'donate-tipme-btn': 'Send Tip via TipMe',
            'donate-thankyou-msg': 'Thank you from the bottom of my heart for your kindness and support! 🙏✨',

            // Footer
            'footer-brand-desc': 'Creative projects, gaming mods, and quality content.',
            'footer-follow': 'Follow our journey:',
            'footer-copyright': 'All rights reserved © 2026 OAKZA AZ.',
            'footer-madeby': 'Crafted with Apple Minimalist Design & Antigravity Physics',

            // Antigravity HUD Controls
            'hud-status-text': 'Antigravity Active',
            'hud-gravity-on': '🌍 Gravity: ON (Falling)',
            'hud-gravity-off': '🚀 Gravity: OFF (Zero-G Float)',
            'hud-scatter-btn': '💥 Scatter',
            'hud-restore-btn': '🔄 Return to Normal',
            'hud-toast-hint': '🖱️ Click and drag any card or button to throw it!'
        }
    };

    let currentLang = localStorage.getItem('language') || 'th';

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

        // Update elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key] !== undefined) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Update segmented language buttons
        document.querySelectorAll('.lang-segment-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update Antigravity HUD labels if active
        if (window.AntigravityEngine && window.AntigravityEngine.isActive) {
            window.AntigravityEngine.updateHudLabels();
        }
    }

    // Bind Language buttons
    document.querySelectorAll('.lang-segment-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });


    /* ==========================================================
       2. DARK MODE / LIGHT MODE ENGINE
       ========================================================== */
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    
    function getPreferredTheme() {
        const saved = localStorage.getItem('theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        document.body.classList.toggle('dark-mode', theme === 'dark');
        localStorage.setItem('theme', theme);

        themeToggleBtns.forEach(btn => {
            const icon = btn.querySelector('i');
            if (icon) {
                if (theme === 'dark') {
                    icon.className = 'fas fa-sun';
                    btn.setAttribute('title', currentLang === 'th' ? 'เปลี่ยนเป็นโหมดสว่าง' : 'Switch to Light Mode');
                } else {
                    icon.className = 'fas fa-moon';
                    btn.setAttribute('title', currentLang === 'th' ? 'เปลี่ยนเป็นโหมดมืด' : 'Switch to Dark Mode');
                }
            }
        });
    }

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            setTheme(next);
        });
    });


    /* ==========================================================
       3. MOBILE MENU DRAWER
       ========================================================== */
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileDrawer = document.querySelector('.mobile-drawer');

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileDrawer.classList.toggle('open');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
            }
        });

        // Close on link click
        mobileDrawer.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            });
        });
    }


    /* ==========================================================
       4. ANTIGRAVITY PHYSICS ENGINE (Google Antigravity Style)
       ========================================================== */
    class AntigravitySystem {
        constructor() {
            this.isActive = false;
            this.gravityEnabled = true; // true = falling gravity (Google Antigravity), false = zero-g floating
            this.engine = null;
            this.runner = null;
            this.bodies = [];
            this.elements = [];
            this.mouseConstraint = null;
            this.walls = [];
            this.updateEvent = null;
            this.hudElement = null;
            this.toastElement = null;

            this.initHud();
            this.bindTriggers();
        }

        initHud() {
            // Create Floating HUD container
            let hud = document.getElementById('antigravityHud');
            if (!hud) {
                hud = document.createElement('div');
                hud.id = 'antigravityHud';
                hud.className = 'antigravity-hud';
                hud.innerHTML = `
                    <div class="hud-status">
                        <span class="hud-status-dot"></span>
                        <span class="hud-status-text" data-i18n="hud-status-text">โหมด Antigravity ทำงาน</span>
                    </div>
                    <div class="hud-actions">
                        <button id="hudGravityToggle" class="hud-btn gravity-toggle">
                            <span class="hud-gravity-text">🌍 แรงโน้มถ่วง: เปิด</span>
                        </button>
                        <button id="hudScatterBtn" class="hud-btn scatter-btn" data-i18n="hud-scatter-btn">
                            💥 ผลักกระจาย
                        </button>
                        <button id="hudRestoreBtn" class="hud-btn restore-btn" data-i18n="hud-restore-btn">
                            🔄 คืนสู่สภาพปกติ
                        </button>
                    </div>
                `;
                document.body.appendChild(hud);
            }
            this.hudElement = hud;

            // Create temporary toast hint
            let toast = document.getElementById('antigravityToast');
            if (!toast) {
                toast = document.createElement('div');
                toast.id = 'antigravityToast';
                toast.className = 'antigravity-toast';
                toast.setAttribute('data-i18n', 'hud-toast-hint');
                toast.textContent = translations[currentLang]['hud-toast-hint'];
                document.body.appendChild(toast);
            }
            this.toastElement = toast;

            // Bind HUD buttons
            const gravBtn = document.getElementById('hudGravityToggle');
            if (gravBtn) {
                gravBtn.addEventListener('click', () => this.toggleGravity());
            }

            const scatterBtn = document.getElementById('hudScatterBtn');
            if (scatterBtn) {
                scatterBtn.addEventListener('click', () => this.scatter());
            }

            const restoreBtn = document.getElementById('hudRestoreBtn');
            if (restoreBtn) {
                restoreBtn.addEventListener('click', () => this.restore());
            }
        }

        bindTriggers() {
            // Header Antigravity Toggle Buttons
            document.querySelectorAll('.antigravity-toggle-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.toggle();
                });
            });

            // Hero Banner Launch Button
            document.querySelectorAll('.launch-antigravity-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (!this.isActive) this.start();
                });
            });

            // Resize handling
            window.addEventListener('resize', () => {
                if (this.isActive) {
                    this.updateWalls();
                }
            });
        }

        toggle() {
            if (this.isActive) {
                this.restore();
            } else {
                this.start();
            }
        }

        updateHudLabels() {
            if (!this.hudElement) return;
            const gravText = this.hudElement.querySelector('.hud-gravity-text');
            if (gravText) {
                gravText.textContent = this.gravityEnabled
                    ? translations[currentLang]['hud-gravity-on']
                    : translations[currentLang]['hud-gravity-off'];
            }
        }

        showToast() {
            if (!this.toastElement) return;
            this.toastElement.textContent = translations[currentLang]['hud-toast-hint'];
            this.toastElement.classList.add('visible');
            setTimeout(() => {
                if (this.toastElement) this.toastElement.classList.remove('visible');
            }, 3500);
        }

        start() {
            if (this.isActive) return;
            if (typeof Matter === 'undefined') {
                console.warn('Matter.js not loaded!');
                return;
            }

            this.isActive = true;
            document.body.classList.add('antigravity-active');
            document.querySelectorAll('.antigravity-toggle-btn').forEach(btn => btn.classList.add('active'));

            // Show HUD and Toast
            this.hudElement.classList.add('visible');
            this.showToast();
            this.updateHudLabels();

            // Matter Engine setup
            const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = Matter;
            this.engine = Engine.create();
            this.runner = Runner.create();

            // Set initial gravity
            this.engine.gravity.y = this.gravityEnabled ? 1 : 0;
            this.engine.gravity.x = 0;

            // Collect elements to apply physics to
            // Target all cards, hero headers, buttons, badges, and elements with .physics-item
            let targets = Array.from(document.querySelectorAll('.physics-item, .card, .about-card, .mod-item, .donate-card, .hero-content, .video-display-container'));
            // Remove duplicates
            targets = Array.from(new Set(targets));

            this.elements = [];
            this.bodies = [];

            // Convert elements to fixed positions and create rigid bodies
            targets.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                if (rect.width === 0 || rect.height === 0) return;

                // Save original inline styles
                el._origStyle = {
                    position: el.style.position || '',
                    left: el.style.left || '',
                    top: el.style.top || '',
                    width: el.style.width || '',
                    height: el.style.height || '',
                    margin: el.style.margin || '',
                    transform: el.style.transform || '',
                    zIndex: el.style.zIndex || '',
                    transition: el.style.transition || ''
                };

                // Create invisible placeholder in document to maintain layout space
                const placeholder = document.createElement('div');
                placeholder.className = 'physics-placeholder';
                placeholder.style.width = rect.width + 'px';
                placeholder.style.height = rect.height + 'px';
                placeholder.style.display = window.getComputedStyle(el).display;
                placeholder.style.margin = window.getComputedStyle(el).margin;
                placeholder.style.visibility = 'hidden';
                placeholder.style.pointerEvents = 'none';

                el.parentNode.insertBefore(placeholder, el);
                el._placeholder = placeholder;

                // Switch element to fixed coordinates without jumping
                el.style.position = 'fixed';
                el.style.left = '0px';
                el.style.top = '0px';
                el.style.width = rect.width + 'px';
                el.style.height = rect.height + 'px';
                el.style.margin = '0px';
                el.style.zIndex = '1000';
                el.style.transition = 'none';
                el.style.transform = `translate(${rect.left}px, ${rect.top}px) rotate(0rad)`;
                el.classList.add('in-physics');

                // Create Matter rigid body
                const body = Bodies.rectangle(
                    rect.left + rect.width / 2,
                    rect.top + rect.height / 2,
                    rect.width,
                    rect.height,
                    {
                        restitution: 0.65, // elasticity bounce
                        friction: 0.15,
                        frictionAir: this.gravityEnabled ? 0.015 : 0.03,
                        density: 0.001
                    }
                );

                // Add slight initial spin and impulse for playful break-free effect
                Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.03);
                if (this.gravityEnabled) {
                    Body.setVelocity(body, {
                        x: (Math.random() - 0.5) * 4,
                        y: -Math.random() * 4 - 2 // jump slightly before falling
                    });
                } else {
                    Body.setVelocity(body, {
                        x: (Math.random() - 0.5) * 3,
                        y: (Math.random() - 0.5) * 3
                    });
                }

                body._domElement = el;
                el._matterBody = body;

                this.elements.push(el);
                this.bodies.push(body);
            });

            // Create Viewport boundaries
            this.createWalls();

            // Add Mouse Constraint for Dragging & Throwing
            const mouse = Mouse.create(document.body);
            this.mouseConstraint = MouseConstraint.create(this.engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.25,
                    render: { visible: false }
                }
            });

            Composite.add(this.engine.world, [
                ...this.bodies,
                ...this.walls,
                this.mouseConstraint
            ]);

            // Sync Matter body coordinates to HTML element transforms
            this.updateEvent = () => {
                this.bodies.forEach(body => {
                    const el = body._domElement;
                    if (!el) return;
                    const x = body.position.x - el.offsetWidth / 2;
                    const y = body.position.y - el.offsetHeight / 2;
                    const angle = body.angle;
                    el.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
                });
            };

            Events.on(this.engine, 'afterUpdate', this.updateEvent);

            // Run Physics
            Runner.run(this.runner, this.engine);
        }

        createWalls() {
            const { Bodies } = Matter;
            const w = window.innerWidth;
            const h = window.innerHeight;
            const wallThickness = 120;

            const floor = Bodies.rectangle(w / 2, h + wallThickness / 2, w * 2, wallThickness, { isStatic: true });
            const ceiling = Bodies.rectangle(w / 2, -wallThickness / 2, w * 2, wallThickness, { isStatic: true });
            const leftWall = Bodies.rectangle(-wallThickness / 2, h / 2, wallThickness, h * 2, { isStatic: true });
            const rightWall = Bodies.rectangle(w + wallThickness / 2, h / 2, wallThickness, h * 2, { isStatic: true });

            this.walls = [floor, ceiling, leftWall, rightWall];
        }

        updateWalls() {
            if (!this.engine) return;
            const { Composite } = Matter;
            Composite.remove(this.engine.world, this.walls);
            this.createWalls();
            Composite.add(this.engine.world, this.walls);
        }

        toggleGravity() {
            if (!this.isActive || !this.engine) return;
            this.gravityEnabled = !this.gravityEnabled;

            if (this.gravityEnabled) {
                this.engine.gravity.y = 1;
                // reduce air friction so elements fall and tumble naturally
                this.bodies.forEach(b => { b.frictionAir = 0.015; });
            } else {
                this.engine.gravity.y = 0;
                // slight air friction for smooth drifting
                this.bodies.forEach(b => {
                    b.frictionAir = 0.035;
                    // give gentle float impulse
                    Matter.Body.setVelocity(b, {
                        x: (Math.random() - 0.5) * 4,
                        y: -Math.random() * 3 - 1
                    });
                });
            }

            this.updateHudLabels();
        }

        scatter() {
            if (!this.isActive || !this.bodies.length) return;
            this.bodies.forEach(body => {
                const forceMagnitude = 0.08 * body.mass;
                const angle = Math.random() * Math.PI * 2;
                Matter.Body.applyForce(body, body.position, {
                    x: Math.cos(angle) * forceMagnitude,
                    y: (Math.sin(angle) * forceMagnitude) - 0.04 * body.mass
                });
                Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);
            });
        }

        restore() {
            if (!this.isActive) return;
            this.isActive = false;

            document.body.classList.remove('antigravity-active');
            document.querySelectorAll('.antigravity-toggle-btn').forEach(btn => btn.classList.remove('active'));

            if (this.hudElement) {
                this.hudElement.classList.remove('visible');
            }

            // Stop Matter Runner
            if (this.runner) {
                Matter.Runner.stop(this.runner);
            }

            if (this.engine && this.updateEvent) {
                Matter.Events.off(this.engine, 'afterUpdate', this.updateEvent);
            }

            // Animate each element back to its placeholder's screen position
            this.elements.forEach(el => {
                const placeholder = el._placeholder;
                if (!placeholder) return;

                const targetRect = placeholder.getBoundingClientRect();

                // Apply smooth returning Apple spring easing
                el.classList.add('returning');
                el.style.transform = `translate(${targetRect.left}px, ${targetRect.top}px) rotate(0rad)`;
            });

            // After animation completes, restore exact original DOM flow
            setTimeout(() => {
                this.elements.forEach(el => {
                    if (el._placeholder && el._placeholder.parentNode) {
                        el._placeholder.parentNode.removeChild(el._placeholder);
                        delete el._placeholder;
                    }

                    if (el._origStyle) {
                        el.style.position = el._origStyle.position;
                        el.style.left = el._origStyle.left;
                        el.style.top = el._origStyle.top;
                        el.style.width = el._origStyle.width;
                        el.style.height = el._origStyle.height;
                        el.style.margin = el._origStyle.margin;
                        el.style.transform = el._origStyle.transform;
                        el.style.zIndex = el._origStyle.zIndex;
                        el.style.transition = el._origStyle.transition;
                        delete el._origStyle;
                    }

                    el.classList.remove('in-physics');
                    el.classList.remove('returning');
                    delete el._matterBody;
                });

                // Clear Matter World
                if (this.engine) {
                    Matter.Composite.clear(this.engine.world, false);
                    this.engine = null;
                }
                this.bodies = [];
                this.elements = [];
            }, 720);
        }
    }

    // Initialize Antigravity Engine
    window.AntigravityEngine = new AntigravitySystem();

    // Set initial theme & language
    setTheme(getPreferredTheme());
    setLanguage(currentLang);
});
