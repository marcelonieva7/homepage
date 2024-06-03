if (screen.width >= 576) {
  const cursor = new MouseFollower({
    el: null,
    container: 'body',
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
      '-pointer': 'a,button',
      '-hidden': 'iframe'
    },
    visible: true,
    visibleOnState: false,
    speed: 0.55,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 2,
    skewingIcon: 1,
    skewingMedia: 2,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    stickDelta: 0.15,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300,
  });
}

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

if (!reducedMotion) {
  const introTimeLine = gsap.timeline()
  
  introTimeLine.from(".cover-content", {
    y: '210%',
    ease: Expo.easeInOut,
    duration: 1.7,
    stagger: 0.15
  })
  .from(".end-content", {
    x: '100%',
    ease: Expo.easeInOut,
    duration: 1,
    stagger: 0.2
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

  gsap.from("#sixth-page", {
    x: "-70%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#sixth-page"
    },
    duration: 1.1,
    ease: Power2
  })
}