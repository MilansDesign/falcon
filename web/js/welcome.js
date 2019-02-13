document.addEventListener('DOMContentLoaded', () => {
  anime.timeline({
    targets: '.welcome',
    easing: 'easeOutExpo',
  })
  .add({
    opacity: 1,
    duration: 0,
  })
  .add({
    delay: 3000,
    translateX: '100vw',
    duration: 1500,
    complete: function(anime) {
      document.querySelector('.welcome').remove();
    },
  })
  anime({
    targets: '.wing',
    delay: 800,
    opacity: ['0', '1'],
    duration: 3000,
    easing: 'easeOutExpo',
  })
  anime({
    targets: '.feather-1',
    delay: 1700,
    opacity: ['0', '1'],
    duration: 300,
    easing: 'easeOutExpo',
  })
  anime({
    targets: '.feather-2',
    delay: 1800,
    opacity: ['0', '1'],
    duration: 300,
    easing: 'easeOutExpo',
  })
  anime({
    targets: '.feather-3',
    delay: 1900,
    opacity: ['0', '1'],
    duration: 300,
    easing: 'easeOutExpo',
  })
  anime({
    targets: '.feather-4',
    delay: 2000,
    opacity: ['0', '1'],
    duration: 300,
    easing: 'easeOutExpo',
  })
  anime({
    targets: '.circle-1',
    delay: 2300,
    opacity: ['1', '0'],
    scale: ['0', '5'],
    duration: 400,
    easing: 'easeOutExpo',
  })
  anime({
    targets: '.circle-2',
    delay: 2400,
    opacity: ['1', '0'],
    scale: ['0', '5'],
    duration: 1200,
    easing: 'easeOutExpo',
  })
})