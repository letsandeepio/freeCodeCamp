slideRight = anime({
    targets: '#js--curtain',
    width: ['0vw', '50vw'],
    easing: 'easeInOutSine',
    autoplay: true,
    complete: function(){
        reveal_intro();
    }
})


let nav_logo_reveal = anime({
    targets: '#js--dji-logo',
    scale: ['0', '1'],
    opacity: 1,
    easing: 'easeInOutSine',
    autoplay: false,
    duration: 1000,
    complete: function(){
        highlight_reveal.play();
        other_products_reveal.play();
    }
})

let highlight_reveal = anime({
    targets: ['.product-title', '.desc', '.price', '.buy-btn'],
    translateY: '-70',
    opacity: '1',
    easing: 'easeInOutSine',
    delay: anime.stagger(100),
    autoplay: false // increase delay by 100ms for each elements.
  });

  let other_products_reveal = anime({
    targets: ['#js--also-see', '#js--product-list li'],
    translateY: '-70',
    opacity: '1',
    easing: 'easeInOutSine',
    delay: anime.stagger(100),
    autoplay: false // increase delay by 100ms for each elements.
  });

  let social_nav_reveal = anime({
    targets: ['#js--nav-bar figure'],
    translateX: '-70',
    opacity: '1',
    easing: 'easeInOutSine',
    delay: anime.stagger(100),
    autoplay: false // increase delay by 100ms for each elements.
  });

  

  let nav_bar_links_reveal = anime({
    targets: '#js--nav-links li',
    translateY: ["-5em", 0],
    translateZ: 0,
    opacity: '1',
    duration: 4000,
    delay: function(el, i) {
      return 100  * i;
    },
    autoplay: false,    
  })

$(window).scroll(function(){
    $("#js--curtain").css("opacity", 1 - $(window).scrollTop() / 250);
  });

  function domLoaded(){
    droneDiv.style.top = "-100%"
    droneDiv.style.left = ((parseInt(document.body.clientWidth) / 2) - (parseInt(droneDiv.clientWidth) / 2)) +'px';
    droneDiv.style.opacity = "1";

        fly = anime({
            targets: '#js--drone-div',
            translateY: '-20%',
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutQuad',
            autoplay: false,
            scale: 1.02,
        });
    
      slidein = anime({
              targets: '#js--drone-div',
              top: '40vh',
              easing: 'easeInOutQuad',
              complete: function () {
                  fly.play();
              },
              autoplay: true,
              duration: 1000,
          })
  }

  let  droneDiv = document.querySelector("#js--drone-div");


  var rev12 = new RevealFx(document.querySelector('#rev-12'))
    var rev13 = new RevealFx(document.querySelector('#rev-13'))


    function reveal_intro() {
        rev13.reveal({
            bgcolor: '#7f40f1',
            duration: 400,
            easing: 'easeInOutQuad',
            onStart: function (contentEl, revealerEl) {
                anime.remove(contentEl);
                contentEl.style.opacity = 0;
            },
            onComplete: function (contentEl, revealerEl) {
                reveal_brandname();
                 
            },
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
                anime({
                    targets: contentEl,
                    duration: 800,
                    delay: 80,
                    easing: 'easeOutExpo',
                    scale: [0.5, 1],
                    opacity: [0, 1]
                });
            }
        });
    }

    function reveal_brandname() {
        rev12.reveal({
            bgcolor: '#c1c0b7',
            easing: 'easeOutExpo',
            direction: 'bt',
            onStart: function (contentEl, revealerEl) {
                anime.remove(contentEl);
                contentEl.style.opacity = 0;
            },
            onComplete: function (contentEl, revealerEl) {
                social_nav_reveal.play();
                nav_bar_links_reveal.play();
                nav_logo_reveal.play();
            },
            onCover: function (contentEl, revealerEl) {
                anime({
                    targets: contentEl,
                    duration: 800,
                    delay: 80,
                    easing: 'easeOutExpo',
                    translateY: [40, 0],
                    opacity: [0, 1]
                });
            }
        });
    }

