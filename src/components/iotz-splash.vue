<template>
  <div class="cover-loading">
    <div class="circle-cover"></div>
    <svg class="logo-svg" xmlns="http://www.w3.org/2000/svg" width="50%" viewBox="0 0 604 676">
      <g fill-rule="evenodd">
        <circle class="circle" fill="#FFF" cx="302" cy="338" r="72.5"/>
        <path class="line" stroke="#FFFFFF" stroke-width="18" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" fill="none" d="
          M 12.65 208.7
          L 302 16.85 302 223.95
          M 589.4 467.3
          L 300.05 659.15 300.05 452.05"/>
      </g>
    </svg>
  </div>
</template>

<script>
  import { TweenMax, Expo, Power1, Linear } from 'gsap/TweenMax';
  import '../js/DrawSVGPlugin';
  import '../js/MorphSVGPlugin';

  export default {
    methods: {
      show() {
        TweenMax.set(this.$el.querySelector('.logo-svg'), { opacity: 1 });
        TweenMax.set(this.$el.querySelector('.logo-svg .circle'), { transformOrigin: '50% 50%' });

        TweenMax.to(this.$el.querySelector('.logo-svg .circle'), 0.8, { scale: 0.9, delay: 0.1, yoyo: true, repeat: -1, ease: Power1.easeInOut });
        TweenMax.fromTo(this.$el.querySelector('.logo-svg .line'), 0.8, { drawSVG: '0%' }, { drawSVG: '50%', delay: 0.8, ease: Expo.easeOut });
      },
      hide() {
        TweenMax.fromTo(this.$el.querySelector('.logo-svg .line'), 0.8, { drawSVG: '50%' }, { drawSVG: '0%', ease: Expo.easeIn });
        TweenMax.set(this.$el.querySelector('.circle-cover'), { width: 1, height: 1 });
        TweenMax.to(this.$el.querySelector('.circle-cover'), 1.2, { scale: Math.max(window.innerWidth, window.innerHeight) * 1.41421, delay: 0.25, ease: Expo.easeInOut });

        TweenMax.to(this.$el, 0.4, { opacity: 0, delay: 1.2, ease: Linear.easeNone, onComplete() { TweenMax.set('.cover-loading', { display: 'none' }); } });
      },
    },
  };
</script>

<style>
  .cover-loading {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: #470071;
    z-index: 9999;
  }

  .cover-loading .logo-svg {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    max-width: 50%;
    max-height: 50%;
  }

  .cover-loading .logo-svg .circle {
    transform-origin: 50% 50%;
  }

  .circle-cover {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 0;
    height: 0;
    background-color: #FFF;
  }
</style>
