$(document).ready(function() {
  var reactions = [
    "Mmm delicious!",
    "Scrumptious!",
    "Mouthwatering!",
    "Delectable!"
  ];

  $.getJSON("https://alexsdinner.herokuapp.com/api/v1/today.json", function(data) {
    if (data.length === 1) {
      $("#food").text(data[0].food);
      var reaction = reactions[Math.floor(Math.random() * reactions.length)];
      $("#reaction").text(reaction);
    } else {
      $("#food").text("Alex has not eaten yet today. Check back later!")
    }
  });
});
