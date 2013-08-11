
function cssDims(w, opt_h) {
  return w + 'px' + (opt_h ? (' ' + opt_h + 'px') : '');
}

function loadImage(path, callback) {
  var image = new Image();
  image.src = path;
  $(image).load(function() {
    callback(image);
  });
}

var images = [
  '/images/kitchen1.jpg',
  '/images/kitchen2.jpg'
];
var index = 0;

function resizeImage(image, $imageWindow) {
  var iw = image.width;
  var ih = image.height;
  var ww = $imageWindow.width();
  var wh = $imageWindow.height();
  var aspect = iw / ih;
  var zoomY = wh * 0.1;
  var newHeight = iw / aspect;
  var windowHeight = $(window).height();
  var newHeight = windowHeight - $imageWindow.position().top;
  var actualHeight = ww * aspect;
  if (newHeight > actualHeight) {
    newHeight = actualHeight;
  }
  var zoom = 0.1;
  var sizeX = ww;
  var sizeY = ww / aspect;
  $imageWindow.height(newHeight);
  $imageWindow.css('background-size', cssDims(ww * (zoom + 1), ww / aspect * (zoom + 1)));
  $imageWindow.css('background-position', cssDims(-sizeX * zoom * 0.5, -sizeY * zoom * 0.5));
}

function changeImage(imageUrl) {
  $imageWindow = $('.image-window');
  loadImage(imageUrl, function(image) {
    $imageWindow.css('background-image', 'url(' + imageUrl + ')');
    resizeImage(image, $imageWindow);
    $(window).resize(function() {
      resizeImage(image, $imageWindow);
    });
  });
}

function __main__() {
  $imageWindow = $('.image-window');
  changeImage(images[index]);
  $imageWindow.click(function() {
    $imageWindow.fadeOut("fast", function() {
      index = (index + 1) % images.length;
      changeImage(images[index]);
      $imageWindow.fadeIn("fast");
    });
  });
}
