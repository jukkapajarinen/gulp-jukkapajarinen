/**********************************************************************/
/* Document ready handler
/**********************************************************************/
let onReady = () => {

  // Toggle spinning of the icon
  $("#main-icon").on("click", () => {
    $(this).toggleClass("rotate");
  });
};

/**********************************************************************/
/* Initially call the onReady handler
/**********************************************************************/
$(onReady);