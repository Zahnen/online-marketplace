
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const addressInput = $("input#address").val();
    const radioInput = $("input:radio[name=shipping]:checked").val();
  $("#output").show();
  $("#conf1").append(nameInput);
  $("#conf2").append(addressInput);
  $("#conf3").append(radioInput);
  });
});