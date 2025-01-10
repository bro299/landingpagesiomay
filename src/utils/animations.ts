import gsap from 'gsap';

export const fadeInUp = (element: string, delay: number = 0) => {
  return gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out'
  });
};

export const staggerFadeInUp = (elements: string, staggerTime: number = 0.2) => {
  return gsap.from(elements, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: staggerTime,
    ease: 'power3.out'
  });
};

export const fadeIn = (element: string, delay: number = 0) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 0.8,
    delay,
    ease: 'power2.out'
  });
};