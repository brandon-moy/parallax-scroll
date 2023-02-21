/* global gsap, ScrollTrigger */

gsap.registerPlugin(ScrollTrigger);

const speed = 100;

const scene1 = gsap.timeline();
ScrollTrigger.create({
  animation: scene1,
  trigger: '.scroll-element',
  start: 'top top',
  end: '45% 100%',
  scrub: 3
});

// gsap.to('.mountain', {
//   x: -1000,
//   y: 1000,
//   duration: 5,
//   scrollTrigger: {
//     trigger: '.scene-two',
//     start: 'top 30%',
//     end: 'bottom',
//     markers: true
//   }
// });

scene1.to('.section-trees', {
  y: 3 * speed,
  x: 0,
  scale: 1,
  ease: 'power1.in'
},
0);
