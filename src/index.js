// index.js

import $ from 'jquery';

// add the style sheet onto the page
import './style.scss';

$("#nav-home").click((e) => {
  e.preventDefault();
  $(document).scrollTop(0);
});

$("#nav-about").click((e) => {
  e.preventDefault();
  let aboutMe = $("#about-me");
  let offset = aboutMe.offset();
  $(document).scrollTop(offset.top - 50);
});

$("#nav-skills").click((e) => {
  e.preventDefault();
  let skills = $("#skills");
  let offset = skills.offset();
  $(document).scrollTop(offset.top - 50);
});

$("#nav-contact").click((e) => {
  e.preventDefault();
  let contactMe = $("#contact-me");
  let offset = contactMe.offset();
  $(document).scrollTop(offset.top - 50);
});
