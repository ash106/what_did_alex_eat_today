# What Did Alex Eat Today?

[![Code Climate](https://codeclimate.com/github/ash106/what_did_alex_eat_today/badges/gpa.svg)](https://codeclimate.com/github/ash106/what_did_alex_eat_today)

[What Did Alex Eat Today?](http://whatdidalexeattoday.herokuapp.com/) is a very basic Rails app that consumes the [Alex's Dinner](https://github.com/ash106/alexs_dinner) API. It also uses Unsplash's [Source](https://source.unsplash.com/) API to create a beautiful backdrop for incredibly useless information.

[Javascript code for API](app/assets/javascripts/home.js)

```javascript
$(document).ready(function() {
  var reactions = [
    "Mmm delicious!",
    "Scrumptious!",
    "Mouthwatering!",
    "Delectable!"
  ];

  $.getJSON("https://alexsdinner.herokuapp.com/api/v1/dinner/today", function(data) {
    if (data.length === 1) {
      $("#food").text(data[0].food);
      var reaction = reactions[Math.floor(Math.random() * reactions.length)];
      $("#reaction").text(reaction);
    } else {
      $("#food").text("Alex has not eaten yet today. Check back later!")
    }
  });
});
```

[Relevant CSS code for Unsplash Source](app/assets/stylesheets/application.scss)

```css
html {
  background: url(https://source.unsplash.com/category/nature/1800x1200) no-repeat center center fixed;
  background-size: cover;
}
```
