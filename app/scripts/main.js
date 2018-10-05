$(document).ready(function() {
  $('.main-menu-item').each(function() {
    let isContain = $(this).is(function() {
      return $('.sub-menu', this).length > 0;
    });
    if (isContain) {
      $(this).find('.main-menu-link').append(`
      	<svg fill="grey">
					<use xlink:href="#chevron" />
				</svg>
      	`);
    }
    let children = $(this).find('.sub-menu li').length;
    if (children > 6) {
      $(this).find('.sub-menu').css({
        'max-height': 264,
        'overflow-y': 'scroll'
      })
    }
  });

  $('.main-banner').on('init', function() {
    doAnimations($('.main-banner-item').find('[data-animation]'));
  });

  $('.main-banner').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    doAnimations($('.main-banner-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]'));
  });

  $('.main-banner').slick({
    rows: 0,
    dots: true,
    nextArrow: `<button type="button" class="slick-next">
  									<svg fill="black">
											<use xlink:href="#chevron" />
										</svg>
									</button>`,
    prevArrow: `<button type="button" class="slick-prev">
  									<svg fill="black">
											<use xlink:href="#chevron" />
										</svg>
									</button>`
  });

  $('.slider-news').slick({
    slidesToShow: 3,
    rows: 0,
    dots: true,
    nextArrow: `<button type="button" class="slick-next">
  									<svg fill="black">
											<use xlink:href="#chevron" />
										</svg>
									</button>`,
    prevArrow: `<button type="button" class="slick-prev">
  									<svg fill="black">
											<use xlink:href="#chevron" />
										</svg>
									</button>`
  });

  $('.banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    speed: 800,
    dots: true,
    // autoplay: true,
    lazyLoad: 'ondemand',
    cssEase: 'cubic-bezier(0.845, 0.045, 0.355, 1)',
    nextArrow: `<button type="button" class="slick-next">
  									<svg fill="black">
											<use xlink:href="#chevron" />
										</svg>
									</button>`,
    prevArrow: `<button type="button" class="slick-prev">
  									<svg fill="black">
											<use xlink:href="#chevron" />
										</svg>
									</button>`
  });

  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var animationDelay = $(this).data('delay');
      var animationType = 'animated ' + $(this).data('animation');
      $(this).css({
        'animation-delay': animationDelay,
        '-webkit-animation-delay': animationDelay
      });
      $(this).addClass(animationType).one(animationEndEvents, function() {
        $(this).removeClass(animationType);
      });
    });
  };

  $('#video').YTPlayer({
    videoURL: 'https://www.youtube.com/watch?v=F-CmFX5pKHU',
    containment: '.video-action',
    ratio: 'auto',
    mute: true,
    loop: true,
    optimizeDisplay: false,
    /*anchor:'bottom, center',*/
    startAt: 0,
    realfullscreen: true,
    showControls: false,
    rows: 0,
    onError: function() {
      console.log(this);
    }
  });

  $('.search').on('click', function(event) {
    event.preventDefault();
    $('.search-block').addClass('show');
    $('.search-block').find('input').focus();
  });

  $('.cancel').on('click', function() {
    $('.search-block').removeClass('show');
    $('.search-block').find('input').val('')
  });

  let newsPost = [
    {
      image: 'https://fakeimg.pl/380x380/?text=380x380"',
      date: '15 серпня 2018',
      name: 'school fest',
      link: '#'
    },
    {
      image: 'https://fakeimg.pl/500x380/?text=500x380"',
      date: '10 серпня 2018',
      name: 'перезавантажся разом з нами і виграй електротранспорт',
      link: '#'
    },
    {
      image: 'https://fakeimg.pl/400x200/?text=400x200"',
      date: '20 серпня 2018',
      name: 'серпень починається з дуже приємної новини! у etam нова колекція - осінь 2018. саме час завітати в etam.',
      link: '#'
    },
    {
      image: 'https://fakeimg.pl/400x300/?text=400x300"',
      date: '13 серпня 2018',
      name: 'мода на щастя! нова колекція luckylook прикрасить це літо',
      link: '#'
    },
    {
      image: 'https://fakeimg.pl/400x350/?text=400x350"',
      date: '19 липня 2018',
      name: 'дрім таун юквест',
      link: '#'
    },
    {
      image: 'https://fakeimg.pl/285x300/?text=285x300"',
      date: '18 липня 2018',
      name: 'день поцілунків в трц dream town!',
      link: '#'
    },
    {
      image: 'https://fakeimg.pl/235x300/?text=235x300"',
      date: '17 липня 2018',
      name: 'Here are some examples you can look at',
      link: '#'
    },
    {
      image: 'https://fakeimg.pl/295x300/?text=295x300"',
      date: '17 липня 2018',
      name: 'This is a first draft, so you may expect some new features soon.',
      link: '#'
    },
    {
      image: 'https://fakeimg.pl/295x300/?text=295x300"',
      date: '20 серпня 2018',
      name: 'Use them directly in an image tag or a CSS background',
      link: '#'
    }/*,
    {
      image: 'https://fakeimg.pl/380x300/?text=380x300"',
      date: '21 серпня 2018',
      name: 'Choose the size, the colors, even the text. It’s free and open-source.'
    }*/
  ],
  size = newsPost.length;;

  if($('.news-container').length){
  	function item(image,date,name,link) {
  		return `
  				<div class="news-col-item">
            <div class="news-col-img">
              <img src="`+image+`" alt="#">
            </div>
            <p class="news-col-date">`+date+`</p>
            <a href="`+link+`" class="news-col-name">`+name+`</a>
            <a class="primary-link" href="`+link+`">детальніше</a>
          </div>
  		`
  	}
  	for (let i = 0; i < size; i+=3) {
  		$('.news-col-1').append(item(newsPost[i].image, newsPost[i].date, newsPost[i].name));
  	};
  	for (let i = 1; i < size; i+=3) {
  		$('.news-col-2').append(item(newsPost[i].image, newsPost[i].date, newsPost[i].name));
  	};
  	for (let i = 2; i < size; i+=3) {
  		$('.news-col-3').append(item(newsPost[i].image, newsPost[i].date, newsPost[i].name));
  	}
  }

});
