$('[data-fancybox="gallery"]').fancybox({
    buttons : [ 
      'slideShow',
      'share',
      'zoom',
      'fullScreen',
      'download',
      'close'
    ],
    loop: true,
    gutter : 10,
    keyboard: true,
    arrows: true,
    infobar: true,
    smallBtn: true,
    toolbar: auto,
    protect: true,
    modal: true,
    idleTime: 3,
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionEffect: "tube",
    transitionDuration: 400,
    slideClass: "myClass",
    baseClass: "myclass",
     slideShow: {
      autoStart: true,
      speed: 1000
    },
    thumbs : {
      autoStart : true
    }
  });