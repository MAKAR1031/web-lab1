const $ = require('jquery')
require('./app.css')
$(document).ready(function() {
    $('#add-todo').on('click', function() {
        var title = $('#title').val();
        $('#title').val('');
        $('#todos').append('<li>' + title + '</ll>');
    })
});