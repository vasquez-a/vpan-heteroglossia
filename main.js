let fulltext = [];
let counter = 0;
let max = 0;

$(document).ready(function(){
  $.getJSON("poemtext.json", function(result){
    fulltext = result.texts;
    max = result.texts.length;
    //console.log(fulltext + "\n" + max);
  });
});

$("#continueButton").click(function(){
  if(counter < max){
      $("#mainToastContainer").append("<div class='toast show' role='alert' aria-live='assertive' aria-atomic='true'> <div class='toast-header'><img src='...' class='rounded me-2' alt='...'><strong class='me-auto'>Bootstrap</strong><small class='text-muted'>just now</small><button type='button' class='btn-close' data-bs-dismiss='toast' aria-label='Close'></button></div><div class='toast-body wsans'>" + fulltext[counter] + "</div></div>");
      counter++;
    }
});

/*

<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded me-2" alt="...">
    <strong class="me-auto">Bootstrap</strong>
    <small class="text-muted">just now</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    See? Just like this.
  </div>
</div>


*/