// LOADER

     // Wait for the window to load, then start the transition
     window.addEventListener('load', function() {
        // Add the no-scroll class to disable scrolling during the loader
        document.body.classList.add('no-scroll');

        // Simulate a loading delay (adjust as needed)
        setTimeout(function() {
            // Remove the loader and enable scrolling
            document.body.classList.add('loaded'); // Trigger fade-in of content
            document.body.classList.remove('no-scroll'); // Enable scrolling again
        }, 4000); // 4-second loader duration (adjust this based on your preference)
    });


 

// SCROLL
const fadecontainer = document.querySelectorAll(".container");

let scrollTimeout;
document.addEventListener("scroll", function () {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            fadecontainer.forEach((fade) => {
                console.log(`Checking: ${fade}`); // Debug
                if (isInView(fade)) {
                    console.log(`${fade} is in view`); // Debug
                    fade.classList.add("container--visible");
                }
            });
            scrollTimeout = null;
        }, 100); // Adjust debounce delay as needed
    }
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}


// TYPE

const words = ["Aspiring Dev.", "I'm IMMANUEL ODAL", "I.T Analyst"]; // List of words
const typewriterElement = document.querySelector(".typewriter");
let wordIndex = 0; // Tracks the current word
let charIndex = 0; // Tracks the current character
let typing = true; // True for typing, false for erasing

// Ensure the typewriter starts empty
typewriterElement.textContent = "";

function typeEffect() {
    const currentWord = words[wordIndex]; // Current word to type

    if (typing) {
        // Typing the word
        typewriterElement.textContent = currentWord.slice(0, charIndex++);
        if (charIndex > currentWord.length) {
            typing = false; // Start erasing after typing is complete
            setTimeout(typeEffect, 1200); // Pause before erasing
        } else {
            setTimeout(typeEffect, 100); // Typing speed
        }
    } else {
        // Erasing the word
        typewriterElement.textContent = currentWord.slice(0, charIndex--);
        if (charIndex < 0) {
            // Erase complete, switch to the next word
            charIndex = 0; // Reset character index
            wordIndex = (wordIndex + 1) % words.length; // Loop to the next word
            typing = true; // Switch back to typing
            setTimeout(typeEffect, 500); // Pause before typing the next word
        } else {
            setTimeout(typeEffect, 50); // Erasing speed
        }
    }
}

// Start the typewriter effect
typeEffect();




