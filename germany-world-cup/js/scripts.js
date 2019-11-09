$(document).ready(function() {
  $("#legendhide").click(function() {
    $(".legend").toggle();
    $("#hide, #show").toggle();
    $("#legendhide").toggleClass("btn-danger");
  });
  $("#togglequarterfinalists").click(function() {
    $("#hideteams, #showteams").toggle();
    var series = chart.series[1];
    if(series.visible) {
      series.hide();
    } else {
      series.show();
    }
    $("#togglequarterfinalists").toggleClass("btn-danger");
  });
});
