

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function animateNav() {
    var tl = gsap.timeline();

    tl.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
    });

    tl.from(".navcomp a", {
        y: '-10',
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: Expo.easeInOut,
        delay: -1
    });

    tl.from(".pag1footer > div", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1
    });

    tl.from("span", {
        x: 1,
        opacity: 0,
        ease: Expo.easeInOut,
        delay: 1
    });
}
 
animateNav();
// Shery.js image effect configuration
Shery.imageEffect(".project img", {
    style: 4,
    config: {
        uFrequencyX: { value: 16.79, range: [0, 100] },
        uFrequencyY: { value: 12, range: [0, 100] },
        uFrequencyZ: { value: 24.43, range: [0, 100] },
        geoVertex: { range: [1, 64], value: 32.26 },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 0.75 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: false },
        infiniteGooey: { value: false },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.46, range: [1, 5] },
        scrollType: { value: 0 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0.002, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
    },
    // debug:true
});

// Shery.js magnet effect configuration for icons and images
Shery.makeMagnet(".skillcomp i", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
});

Shery.makeMagnet(".skillcomp img", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
});

Shery.makeMagnet(".social a", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
});

// Custom cursor interaction
const projects = document.querySelectorAll(".project");
const skillsSection = document.querySelector(".skillscover");

const cursorColors = ['#50B498', '#96C9F4', '#F4A261', '#5A72A0'];

projects.forEach(function (project, index) {
    const projectLink = project.querySelector("a");

    project.addEventListener("mousemove", function (event) {
        const color = cursorColors[index % cursorColors.length];
        gsap.to("#cursor", {
            top: event.clientY,
            left: event.clientX,
            backgroundColor: color,
            scale: 1,
        });
    });

    project.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            scale: 0,
        });
    });

    projectLink.addEventListener("mousemove", function (event) {
        event.stopPropagation(); // Prevents event from bubbling to parent elements
    });
});

skillsSection.addEventListener("mousemove", function (event) {
    gsap.to("#cursor", {
        top: event.clientY,
        left: event.clientX,
        backgroundColor: 'white', // Set cursor color to white in skills section
        scale: 1,
    });
});

// skillsSection.addEventListener("mouseleave", function () {
//     gsap.to("#cursor", {
//         scale: 0,
//     });
// });

document.addEventListener("mousemove", function (event) {
    gsap.to("#cursor", {
        top: event.clientY,
        left: event.clientX,
    });
});

// Initialize animations

