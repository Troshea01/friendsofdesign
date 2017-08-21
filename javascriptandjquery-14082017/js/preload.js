var pageLoading = true;
var videoLoading = true;

window.onload = function() {
  var body = document.getElementsByTagName('body')[0];

  while (pageLoading) {
    if (!videoLoading) {
      pageLoading = false;
      body.classList -= 'loading';
    }
  }
};
