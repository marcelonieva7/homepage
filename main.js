gsap.registerPlugin(ScrollTrigger);

const introTimeLine = gsap.timeline()

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

gsap.from("#first-reach-me", {
  x: "-100%",
  scrollTrigger: {
    trigger: "#first-reach-me"
  },
  duration: 1,
  ease: Power2
})

gsap.from("#second-reach-me", {
  x: "-100%",
  scrollTrigger: {
    trigger: "#second-reach-me"
  },
  duration: 1,
  ease: Power2
})

const contactTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page-middle"
  }
})

contactTimeline.from(".third-page-middle", {
  y: "100%",
  opacity: 0,
  duration: 1,
  delay: 0.1,
  ease: Power2
})


contactTimeline.from(".third-page-lower", {
  y: "100%",
  opacity: 0,
  duration: 1,
  ease: Power2
})

gsap.from(".fourth-page-content", {
  x: "-40%",
  opacity: 0,
  scrollTrigger: {
    trigger: ".fourth-page-content"
  },
  duration: 1.1,
  ease: Power2
})

gsap.from(".fifth-page-content", {
  y: "70%",
  opacity: 0,
  scrollTrigger: {
    trigger: ".fifth-page-content"
  },
  duration: 1.1,
  ease: Power2
})