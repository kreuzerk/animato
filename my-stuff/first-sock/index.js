function iceCubeBounce() {
  const timeline = new gsap.timeline();
  timeline.staggerFrom(
    '.ice-cube-one, .ice-cube-two, .ice-cube-three',
    2,
    { y: -150, ease: Bounce.easeOut },
    0.1
  );
}

function strawIn() {
  const timeline = new gsap.timeline();
  timeline.from('.straw', 1, { y: -200 }, '+=1');
  return timeline;
}

const master = gsap.timeline();

master.add(iceCubeBounce());
master.add(strawIn());
