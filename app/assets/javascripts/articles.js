

var countWords;
countWords = function(){

  var articleText = document.getElementById('article_text');
  var wordCounter = document.getElementById('wordCounter')
  var checkBox = document.getElementById('checkBox')

Countable.live(articleText, function (counter) {
  wordCounter.innerHTML = counter.words;

  if(counter.words > 10){
    articleText.setAttribute("class", "green");
    checkBox.setAttribute("class", "fa fa-check-square-o goalReached");
  }

  else{
    articleText.removeAttribute("class", "green");
    checkBox.setAttribute("class", "fa fa-square-o");
  }
})

}


var markDownConvert;
markDownConvert = function(){
var converter = new showdown.Converter(),
 // articleText = document.getElementById('article_text').textContent;
 articleText = document.getElementById('article_text').value;
 markDown = document.getElementById('markDown');
 html = converter.makeHtml(articleText);

markDown.innerHTML = html;

}

var attachToElement = function(){
  $('#article_text').bind('input propertychange', markDownConvert);
  countWords();

  // var articleText = document.getElementById('article_text');
  // articleText.onChange = markDownConvert;
}

// $(document).ready(countWords);
// $(document).on('turbolinks:load', countWords);

$(document).ready(attachToElement);
$(document).on('turbolinks:load', attachToElement);
