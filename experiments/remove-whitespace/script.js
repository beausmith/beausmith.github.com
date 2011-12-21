jQuery.fn.cleanWhitespace = function() {
  this.contents().filter(function() {
    if (this.nodeType != 3) {
      $(this).cleanWhitespace();
      return false;
    } else {
      return !/\S/.test(this.nodeValue);
    }
  }).remove();
}

$(function(){
  $('#target-list').cleanWhitespace();
});