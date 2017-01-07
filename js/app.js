//Problem: User when clicking on image goes to dead end.
//Solution: Create an overlay with the large image - Lightbox
var $overlay = $('<div id= "overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$("body").append($overlay);

//1. Capture click event on a link to an image.
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  //1.1 Show the overlay.
  $overlay.show();
  //1.2 Update overaly with the image linked in the link.
  //1.3 Get child's alt atribute and set caption.
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
}); 

//2. Add overlay.
  //2.1 An image 
  //2.2 A caption
//3. When overlay is clicked
  //3.1 Hide the overlay.
$overlay.click(function(){
  $overlay.hide();
});