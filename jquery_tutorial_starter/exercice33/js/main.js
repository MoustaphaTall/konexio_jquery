$(function() {
    $('button').click(function() {
        $.ajax('https://restcountries.eu/rest/v2/name/france', {
            success: function(country) {
                $('#country').html(country[0].name);
                $('#capital').html(country[0].capital);
            }
        });
    });
});