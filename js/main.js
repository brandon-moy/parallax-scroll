/* global gsap, ScrollTrigger */

gsap.registerPlugin(ScrollTrigger);

gsap.to('.mountain', {
  x: -1000,
  y: 1000,
  duration: 5,
  scrollTrigger: {
    trigger: '.scene-two',
    start: 'top 30%',
    end: 'bottom',
    markers: true
  }
});

gsap.to('.mountain2', {
  x: -500,
  y: 1000,
  duration: 5,
  scrollTrigger: {
    trigger: '.scene-two',
    start: 'top 30%',
    end: 'bottom'
  }
});
