
let friends = ['David', 'Alex', 'Pawel', 'Casper', 'Joseph'];
let i = 0;

$('button').on('click', function () {
    if (i < friends.length) {
        let name = friends[i];
        i++;
        $('body').append('<div id="friend ' + [i] + '">' + '<h3 class="h' + [i] + '">' + name.toUpperCase() + ':' + ' </h3>' + '</div');
    }
    for (let line = 99; line > 0; line--) {
        if (line === 2) {
            $('.h' + [i]).append("<p>" + line + " line of code in the file, " + line + " lines of code; " + name + " strikes one out, clears it all out " + (line - 1) + " lines of code in the file </p>");
        } else if (line === 1) {
            $('.h' + [i]).append("<p>" + line + " line of code in the file, " + line + " lines of code; " + name + " strikes one out, clears it all out, no more lines of code in the file </p>");
            if (i === friends.length) {
                console.log('Song is OVER...Thank you!')
                $('button').off('click')
            }
        } else {
            $('.h' + [i]).append("<p>" + line + " lines of code in the file, " + line + " lines of code; " + name + " strikes one out, clears it all out " + (line - 1) + " lines of code in the file </p>");

        };
    };
});

