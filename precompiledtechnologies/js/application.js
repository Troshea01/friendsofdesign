$(document).ready(function() {
  var timer = null;
  var mainMenu = $('#main-menu');
  var landingPageVideo = videojs('landing-page-video', {
    controls: false,
    autoplay: false,
    preload: 'auto',
    loop: true
  });

  setTimeout(function(){
    mainMenu.removeClass('hidden')
  }, 1000);

  setTimeout(function(){
    mainMenu.addClass('hidden')
  }, 3000);

  $(document).scroll(function() {
    var height = $(window).height() - mainMenu.height();
    var position = $(document).scrollTop();

    if(position > height){
      mainMenu.removeClass('on-landing-page');
    } else {
      mainMenu.addClass('on-landing-page');
    }
  });

  $("#landing-page").on('mousemove', function () {
    mainMenu.removeClass('hidden');
    try {
      clearTimeout(timer);
    } catch (e) {}
    timer = setTimeout(function () {
      mainMenu.addClass('hidden');
    }, 5000);
  });

  $('#fullpage').fullpage({
    fitToSection: false,
    autoScrolling: false
  });

  $('#fullpage .section').each(function(){
    var title = $(this).attr('data-title');
    var mainMenuHtml = mainMenu.html();
    var sectionAnchor = $(this).attr('data-anchor');

    mainMenuHtml += `<li><a href="javascript:void(0);" data-section-anchor="${sectionAnchor}">${title}</a><ul>`;

    $(this).find('.slide').each(function(){
      var title = $(this).attr('data-title');
      var slideAnchor = $(this).attr('data-anchor');
  
      mainMenuHtml += `<li><a href="javascript:void(0);" data-section-anchor="${sectionAnchor}" data-slide-anchor="${slideAnchor}">${title}</a></li>`;
  
      mainMenu.html(mainMenuHtml);
    })

    mainMenuHtml += `</ul></li>`;

    mainMenu.html(mainMenuHtml);
  })

  mainMenu.on('click', 'a', function(event){
    var slideAnchor = $(event.target).attr('data-slide-anchor');
    var sectionAnchor = $(event.target).attr('data-section-anchor');

    $.fn.fullpage.moveTo(sectionAnchor, slideAnchor);
  });

  landingPageVideo.on('canplaythrough', function(){
    videoLoading = false;
    landingPageVideo.play();

    $('body').removeClass('loading');
  });
});
