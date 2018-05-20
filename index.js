'use strict';
/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . Also make any necessary adjustments to make this app accessible. */
 
function getDataFromApi(artist, title, callback) {
  const artistJSON = JSON.stringify(artist);
  const titleJSON = JSON.stringify(title);
  const BASE_URL = 'https://api.lyrics.ovh/v1/';

  $.getJSON(`${BASE_URL}${artistJSON}/${titleJSON}`, callback);

}

function displaySearchData(data) {
  return `<span> Lyrics: ${data.lyrics} </span>`;
}

function watchSubmit() {
  $('.js-search-form').submit(function(event) {
    event.preventDefault();
    
    const artist = $('.js-query-artist').val();
    const title = $('.js-query-title').val();
    if( !artist || !title) {
      $('.js-error-container').html('Please enter an artist and a song title');
    } else {
      $('.js-error-container').html('');
      getDataFromApi(artist, title, (response) => {
       $('.js-search-results').html(displaySearchData(response));
      });
    }
  });
}

$(watchSubmit);     