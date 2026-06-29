
Action: file_editor create /app/frontend/website/js/script.js --file-text "/* =========================================================
   Brightline University — Interactive JavaScript
   Mobile menu, FAQ accordion, form validation, gallery
   lightbox, scroll reveals, marquee duplication.
   ========================================================= */

(function () {
    \"use strict\";

    // ---------- 1. Mobile Menu Toggle ----------
    const hamburger = document.querySelector(\"[data-testid='nav-hamburger']\");
    const mobileMenu = document.querySelector(\"[data-testid='mobile-menu']\");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener(\"click\", function () {
            const isOpen = mobileMenu.classList.toggle(\"open\");
            hamburger.setAttribute(\"aria-expanded\", isOpen ? \"true\" : \"false\");
        });
    }

    // ---------- 2. FAQ Accordion ----------
    const faqQuestions = document.querySelectorAll(\"[data-faq-question]\");
    faqQuestions.forEach(function (q) {
        q.addEventListener(\"click\", function () {
            const item = q.closest(\".faq-item\");
            const answer = item.querySelector(\".faq-answer\");
            const isOpen = item.classList.toggle(\"open\");
            q.setAttribute(\"aria-expanded\", isOpen ? \"true\" : \"false\");
            if (isOpen) {
                answer.style.maxHeight = answer.scrollHeight + \"px\";
            } else {
                answer.style.maxHeight = \"0\";
            }
        });
    });

    // ---------- 3. Course Filter ----------
    const filterPills = document.querySelectorAll(\"[data-filter]\");
    const courseCards = document.querySelectorAll(\"[data-category]\");
    filterPills.forEach(function (pill) {
        pill.addEventListener(\"click\", function () {
            filterPills.forEach((p) => p.classList.remove(\"active\"));
            pill.classList.add(\"active\");
            const filter = pill.getAttribute(\"data-filter\");
            courseCards.forEach(function (card) {
                const cat = card.getAttribute(\"data-category\");
                if (filter === \"all\" || cat === filter) {
                    card.style.display = \"\";
                } else {
                    card.style.display = \"none\";
                }
            });
        });
    });

    // ---------- 4. Gallery Lightbox ----------
    const galleryItems = document.querySelectorAll(\"[data-lightbox]\");
    const lightbox = document.querySelector(\"[data-testid='lightbox']\");
    const lightboxImg = document.querySelector(\"[data-testid='lightbox-image']\");
    const lightboxCaption = document.querySelector(\"[data-testid='lightbox-caption']\");
    const lightboxClose = document.querySelector(\"[data-testid='lightbox-close']\");

    function openLightbox(src, alt) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightboxImg.alt = alt || \"\";
        if (lightboxCaption) lightboxCaption.textContent = alt || \"\";
        lightbox.classList.add(\"open\");
        document.body.style.overflow = \"hidden\";
    }
    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove(\"open\");
        document.body.style.overflow = \"\";
    }

    galleryItems.forEach(function (item) {
        item.addEventListener(\"click\", function () {
            const img = item.querySelector(\"img\");
            if (img) openLightbox(img.src, img.alt);
        });
    });

    if (lightboxClose) lightboxClose.addEventListener(\"click\", closeLightbox);
    if (lightbox)
        lightbox.addEventListener(\"click\", function (e) {
            if (e.target === lightbox) closeLightbox();
        });
    document.addEventListener(\"keydown\", function (e) {
        if (e.key === \"Escape\") closeLightbox();
    });

    // ---------- 5. Registration Form Validation ----------
    const form = document.querySelector(\"[data-testid='registration-form']\");
    if (form) {
        const successBanner = form.querySelector(\"[data-testid='form-success']\");

        function showError(group, message) {
            group.classList.add(\"invalid\");
            const err = group.querySelector(\".error\");
            if (err) err.textContent = message;
        }
        function clearError(group) {
            group.classList.remove(\"invalid\");
        }

        function validateField(input) {
            const group = input.closest(\".form-group\");
            if (!group) return true;
            const value = input.value.trim();
            const name = input.name;

            if (input.required && !value) {
                showError(group, \"This field is required.\");
                return false;
            }
            if (name === \"fullName\" && value && value.length < 3) {
                showError(group, \"Please enter your full name (3+ characters).\");
                return false;
            }
            if (name === \"email\" && value) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!re.test(value)) {
                    showError(group, \"Please enter a valid email address.\");
                    return false;
                }
            }
            if (name === \"phone\" && value) {
                const digits = value.replace(/\D/g, \"\");
                if (digits.length < 7 || digits.length > 15) {
                    showError(group, \"Please enter a valid phone number.\");
                    return false;
                }
            }
            if (name === \"message\" && value && value.length < 10) {
                showError(group, \"Please write at least 10 characters.\");
                return false;
            }
            clearError(group);
            return true;
        }

        // Clear errors as user types
        form.querySelectorAll(\"input, select, textarea\").forEach(function (el) {
            el.addEventListener(\"input\", function () {
                if (el.closest(\".form-group\").classList.contains(\"invalid\")) {
                    validateField(el);
                }
            });
            el.addEventListener(\"blur\", function () {
                validateField(el);
            });
        });

        form.addEventListener(\"submit\", function (e) {
            e.preventDefault();
            let valid = true;
            form.querySelectorAll(\"input, select, textarea\").forEach(function (el) {
                if (!validateField(el)) valid = false;
            });

            if (!valid) {
                if (successBanner) successBanner.classList.remove(\"show\");
                const firstInvalid = form.querySelector(\".form-group.invalid\");
                if (firstInvalid) firstInvalid.scrollIntoView({ behavior: \"smooth\", block: \"center\" });
                return;
            }

            // Success state — no backend; show confirmation
            if (successBanner) {
                successBanner.classList.add(\"show\");
                successBanner.scrollIntoView({ behavior: \"smooth\", block: \"center\" });
            }
            form.reset();
        });
    }

    // ---------- 6. Scroll Reveal ----------
    const revealEls = document.querySelectorAll(\".reveal\");
    if (\"IntersectionObserver\" in window) {
        const io = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(\"visible\");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: \"0px 0px -60px 0px\" }
        );
        revealEls.forEach((el) => io.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add(\"visible\"));
    }

    // ---------- 7. Active Nav Link ----------
    const path = window.location.pathname.replace(/\/$/, \"\") || \"/index.html\";
    const file = path.split(\"/\").pop() || \"index.html\";
    document.querySelectorAll(\"[data-nav-link]\").forEach(function (link) {
        const href = link.getAttribute(\"href\");
        if (href === file || (file === \"\" && href === \"index.html\") || (file === \"/\" && href === \"index.html\")) {
            link.classList.add(\"active\");
        }
    });

    // ---------- 8. Year in footer ----------
    const yearEl = document.querySelector(\"[data-current-year]\");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
"
Observation: Create successful: /app/frontend/website/js/script.js
