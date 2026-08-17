```javascript
/* =========================================================
   SHASHANK PROPERTIES
   COMPLETE WEBSITE JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. PAGE LOADED
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Shashank Properties website loaded successfully.");

});


/* =========================================================
   2. MOBILE NAVIGATION
   ========================================================= */

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", function () {

        nav.classList.toggle("active");

    });

}


/* =========================================================
   3. CLOSE MOBILE MENU WHEN LINK IS CLICKED
   ========================================================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (nav) {
            nav.classList.remove("active");
        }

    });

});


/* =========================================================
   4. PROPERTY SEARCH
   ========================================================= */

const searchButton = document.querySelector(".search-box button");

if (searchButton) {

    searchButton.addEventListener("click", function () {

        const location =
            document.querySelector("#location")?.value || "";

        const propertyType =
            document.querySelector("#property-type")?.value || "";

        const budget =
            document.querySelector("#budget")?.value || "";


        if (
            location === "" &&
            propertyType === "" &&
            budget === ""
        ) {

            alert("Please select at least one search option.");

            return;
        }


        alert(
            "Searching properties...\n\n" +
            "Location: " + (location || "Any") + "\n" +
            "Property Type: " + (propertyType || "Any") + "\n" +
            "Budget: " + (budget || "Any")
        );

    });

}


/* =========================================================
   5. PROPERTY FILTER
   ========================================================= */

const propertyCards =
    document.querySelectorAll(".property-card");


const filterType =
    document.querySelector("#filter-type");


const filterLocation =
    document.querySelector("#filter-location");


const filterPrice =
    document.querySelector("#filter-price");


function filterProperties() {

    if (propertyCards.length === 0) {
        return;
    }


    const selectedType =
        filterType ? filterType.value.toLowerCase() : "";


    const selectedLocation =
        filterLocation ?
        filterLocation.value.toLowerCase() : "";


    const selectedPrice =
        filterPrice ?
        filterPrice.value : "";


    propertyCards.forEach(function (card) {

        const type =
            card.dataset.type ?
            card.dataset.type.toLowerCase() : "";


        const location =
            card.dataset.location ?
            card.dataset.location.toLowerCase() : "";


        const price =
            card.dataset.price ?
            Number(card.dataset.price) : 0;


        let showCard = true;


        /* TYPE FILTER */

        if (
            selectedType !== "" &&
            type !== selectedType
        ) {

            showCard = false;

        }


        /* LOCATION FILTER */

        if (
            selectedLocation !== "" &&
            location !== selectedLocation
        ) {

            showCard = false;

        }


        /* PRICE FILTER */

        if (selectedPrice !== "") {

            if (selectedPrice === "low" && price > 5000000) {

                showCard = false;

            }


            if (
                selectedPrice === "medium" &&
                (price < 5000000 || price > 10000000)
            ) {

                showCard = false;

            }


            if (
                selectedPrice === "high" &&
                price < 10000000
            ) {

                showCard = false;

            }

        }


        if (showCard) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* FILTER EVENTS */

if (filterType) {

    filterType.addEventListener(
        "change",
        filterProperties
    );

}


if (filterLocation) {

    filterLocation.addEventListener(
        "change",
        filterProperties
    );

}


if (filterPrice) {

    filterPrice.addEventListener(
        "change",
        filterProperties
    );

}


/* =========================================================
   6. PROPERTY DETAILS BUTTON
   ========================================================= */

const propertyButtons =
    document.querySelectorAll(".view-property");


propertyButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        const card =
            button.closest(".property-card");


        if (!card) {
            return;
        }


        const title =
            card.querySelector("h3")?.textContent ||
            "Property";


        const price =
            card.querySelector(".price")?.textContent ||
            "Price not available";


        alert(
            "Property Details\n\n" +
            title + "\n" +
            price
        );

    });

});


/* =========================================================
   7. CONTACT FORM
   ========================================================= */

const contactForm =
    document.querySelector("#contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.querySelector("#name")?.value.trim();


            const email =
                document.querySelector("#email")?.value.trim();


            const phone =
                document.querySelector("#phone")?.value.trim();


            const message =
                document.querySelector("#message")?.value.trim();


            /* CHECK NAME */

            if (!name) {

                alert("Please enter your name.");

                return;

            }


            /* CHECK EMAIL */

            if (!email) {

                alert("Please enter your email.");

                return;

            }


            /* CHECK PHONE */

            if (!phone) {

                alert("Please enter your phone number.");

                return;

            }


            /* CHECK MESSAGE */

            if (!message) {

                alert("Please enter your message.");

                return;

            }


            /* SUCCESS */

            alert(
                "Thank you, " +
                name +
                "!\n\n" +
                "Your enquiry has been submitted successfully.\n" +
                "Our Shashank Properties team will contact you soon."
            );


            contactForm.reset();

        }
    );

}


/* =========================================================
   8. EMAIL VALIDATION
   ========================================================= */

function validateEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    return emailPattern.test(email);

}


const emailInput =
    document.querySelector("#email");


if (emailInput) {

    emailInput.addEventListener(
        "blur",
        function () {

            if (
                emailInput.value !== "" &&
                !validateEmail(emailInput.value)
            ) {

                alert("Please enter a valid email address.");

                emailInput.focus();

            }

        }
    );

}


/* =========================================================
   9. PHONE NUMBER VALIDATION
   ========================================================= */

const phoneInput =
    document.querySelector("#phone");


if (phoneInput) {

    phoneInput.addEventListener(
        "input",
        function () {

            phoneInput.value =
                phoneInput.value.replace(
                    /[^0-9+ ]/g,
                    ""
                );

        }
    );

}


/* =========================================================
   10. SCROLL TO TOP BUTTON
   ========================================================= */

const scrollButton =
    document.querySelector("#scrollTop");


if (scrollButton) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 400) {

                scrollButton.style.display = "block";

            } else {

                scrollButton.style.display = "none";

            }

        }
    );


    scrollButton.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   11. ACTIVE NAVIGATION LINK
   ========================================================= */

const currentPage =
    window.location.pathname.split("/").pop();


navLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");


    if (
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")
    ) {

        link.classList.add("active");

    }

});


/* =========================================================
   12. SMOOTH SCROLLING
   ========================================================= */

const smoothLinks =
    document.querySelectorAll('a[href^="#"]');


smoothLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");


        if (targetId === "#") {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/* =========================================================
   13. PROPERTY CARD ANIMATION
   ========================================================= */

const animatedCards =
    document.querySelectorAll(
        ".property-card, .service-card, .feature"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show-card"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedCards.forEach(function (card) {

    observer.observe(card);

});


/* =========================================================
   14. CURRENT YEAR IN FOOTER
   ========================================================= */

const yearElement =
    document.querySelector("#currentYear");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   15. NEWSLETTER FORM
   ========================================================= */

const newsletterForm =
    document.querySelector("#newsletterForm");


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const newsletterEmail =
                newsletterForm.querySelector(
                    "input[type='email']"
                );


            if (
                newsletterEmail &&
                validateEmail(newsletterEmail.value)
            ) {

                alert(
                    "Thank you for subscribing to " +
                    "Shashank Properties!"
                );


                newsletterForm.reset();

            } else {

                alert(
                    "Please enter a valid email address."
                );

            }

        }
    );

}


/* =========================================================
   16. MOBILE PHONE NUMBER CLICK
   ========================================================= */

const phoneLinks =
    document.querySelectorAll(
        'a[href^="tel:"]'
    );


phoneLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            console.log(
                "Calling Shashank Properties..."
            );

        }
    );

});


/* =========================================================
   17. CONSOLE MESSAGE
   ========================================================= */

console.log(
    "===================================="
);

console.log(
    "   SHASHANK PROPERTIES"
);

console.log(
    "   Premium Real Estate Agency"
);

console.log(
    "   Website JavaScript Loaded"
);

console.log(
    "===================================="
);
```
