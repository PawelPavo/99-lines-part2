$(document).ready(function () {
    let friends = ['David', 'Alex', 'Pawel', 'Casper', 'Joseph'];
    let i = 0;


    $('button').on('click', function () {
        if (i < friends.length) {
            let name = friends[i];
            ++i;
            $('body').append('<div class="friend"></div>');
            $('.friend').append('<h3>' + (name +':').toUpperCase() + '</h3')
            for (let line = 99; line > 0; line--) {
                if (line === 2) {
                    $('.friend').append("<p>" + line + " line of code in the file, " + line + " lines of code; " + name + " strikes one out, clears it all out " + line + " lines of code in the file </p>");
                } else if (line === 1) {
                    $('.friend').append("<p>" + line + " line of code in the file, " + line + " lines of code; " + name + " strikes one out, clears it all out, no more lines of code in the file </p>");
                } else {
                    $('.friend').append("<p>" + line + " lines of code in the file, " + line + " lines of code; " + name + " strikes one out, clears it all out " + (line - 1) + " lines of code in the file </p>");

                };
            };
        };
    });
});