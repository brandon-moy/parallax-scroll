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

scene1.to('.section1-trees', {
  y: 3 * speed,
  x: 0,
  scale: 1,
  ease: 'power1.in'
},
0.1
);
scene1.to('.section1-mountain1', {
  y: 6 * speed,
  x: -3 * speed,
  scale: 1,
  ease: 'power1.in'
},
0
);

const scene2 = gsap.timeline();
ScrollTrigger.create({
  animation: scene2,
  trigger: '.scroll-element',
  start: '15% top',
  end: '40% 100%',
  scrub: 4
});
scene2.fromTo('.section2-trees',
  { y: 500, opacity: 0 },
  { y: 0, opacity: 1 },
  0
);
scene2.fromTo('.section2-mountain1',
  { y: 500, opacity: 0 },
  { y: 0, opacity: 1 },
  0.2
);
