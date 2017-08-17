$(document).ready(function() {
  var mainMenu = $('#main-menu');

  $('#fullpage').fullpage();

  $('#fullpage .section').each(function(){
    var title = $(this).attr('data-title');
    var mainMenuHtml = mainMenu.html();
    var sectionAnchor = $(this).attr('data-anchor');

    mainMenuHtml += `<li><a href="javascript:void(0);" data-section-anchor='${sectionAnchor}'>${title}</a><ul>`;

    $(this).find('.slide').each(function(){
      var title = $(this).attr('data-title');
      var slideAnchor = $(this).attr('data-anchor');
  
      mainMenuHtml += `<li><a href="javascript:void(0);" data-section-anchor='${sectionAnchor}' data-slide-anchor='${slideAnchor}'>${title}</a></li>`;
  
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
});
