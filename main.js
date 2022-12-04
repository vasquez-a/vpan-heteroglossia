let fulltext = [];
let counter = 0;
let max = 0;

$(document).ready(function(){
  //document.getElementById('mainToastContainer').focus();
  const toastElList = document.querySelectorAll('.toast');
  const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl));
  max = toastElList.length;
  $("#continueButton").click(function(){
    if(counter != max){
      toastList[counter].show();
      toastElList[counter].scrollIntoView();
      //toastElList[counter].focus();
      counter++;
    }else{
      document.getElementById("continueButton").disabled = true;
    }
  });
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