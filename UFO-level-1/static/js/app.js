var tableData = data;

// display table
var tbody = d3.select('tbody');
tableData.forEach(item => {
    var tr = tbody.append('tr');
    tr.append('td').text(item.datetime);
    tr.append('td').text(item.city);
    tr.append('td').text(item.state);
    tr.append('td').text(item.country);
    tr.append('td').text(item.shape);
    tr.append('td').text(item.durationMinutes);
    tr.append('td').text(item.comments);
});

// select button
var button = d3.select('#filter-btn');

// button filtering function
button.on('click', function() {
    d3.event.preventDefault();
    var dateInput = d3.select('#datetime');
    var dateValue = dateInput.property('value');

    var filtered = tableData.filter(item => item.datetime === dateValue)
    tbody.html(``);

    filtered.forEach( item => {
        var tr = tbody.append('tr');
        tr.append('td').text(item.datetime);
        tr.append('td').text(item.city);
        tr.append('td').text(item.state);
        tr.append('td').text(item.country);
        tr.append('td').text(item.shape);
        tr.append('td').text(item.durationMinutes);
        tr.append('td').text(item.comments);
    });
});