$("#zatemnenie").click(function() {
  var isOpen = $(this).attr("class") === "open";
  if(isOpen){
    $(this).attr("class", "");
  }else{
     $(this).attr("class", "open");
  }
});