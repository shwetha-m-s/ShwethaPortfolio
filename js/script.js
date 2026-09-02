/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================
   TYPING ANIMATION
========================= */

const typingText =
    document.getElementById("typing-text");

const roles = [
    "Frontend Web Developer",
    "Web Designer",
  
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}


typeEffect();


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;


        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================
   COUNTER ANIMATION
========================= */

const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) {
        return;
    }


    const statsSection =
        document.querySelector(".stats");


    if (!statsSection) {
        return;
    }


    const sectionTop =
        statsSection.getBoundingClientRect().top;


    if (sectionTop <
        window.innerHeight - 100) {

        counterStarted = true;


        counters.forEach((counter) => {

            const target =
                parseFloat(
                    counter.dataset.target
                );

            let current = 0;

            const increment =
                target / 50;


            function updateCounter() {

                current += increment;


                if (current < target) {

                    if (target % 1 === 0) {

                        counter.textContent =
                            Math.floor(current);

                    } else {

                        counter.textContent =
                            current.toFixed(1);

                    }


                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.textContent =
                        target;

                }

            }


            updateCounter();

        });

    }

}


window.addEventListener(
    "scroll",
    startCounters
);

startCounters();


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 150;


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            navItems.forEach((link) => {

                link.classList.remove("active");

            });


            const activeLink =
                document.querySelector(
                    `.nav-links a[href="#${sectionId}"]`
                );


            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById(
        "back-to-top"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById(
        "contact-form"
    );

const formMessage =
    document.getElementById(
        "form-message"
    );


contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        if (!name) {
            return;
        }


        formMessage.textContent =
            `Thanks, ${name}! Your message has been received.`;


        contactForm.reset();


        setTimeout(() => {

            formMessage.textContent = "";

        }, 4000);

    }
);