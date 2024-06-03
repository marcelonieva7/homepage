gsap.registerPlugin(ScrollTrigger);

const introTimeLine = gsap.timeline();

introTimeLine.from(".cover-content", {
  y: '100%',
  ease: Expo.easeInOut,
  duration: 1,
  stagger: 0.15
})
.from(".end-content", {
  x: '100%',
  ease: Expo.easeInOut,
  duration: 1,
  stagger: 0.3
})

