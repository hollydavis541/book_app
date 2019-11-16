'use strict';

// Hides update/save form on search results page until select button is clicked
$('.select-button').on('click', function() {
  $(this).next().removeClass('hide-me');
});

// Hides update/save form on book details page until update button is clicked
$('#update-button').on('click', function() {
  $(this).next().removeClass('hide-me');
});
