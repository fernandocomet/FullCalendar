
// my events array
var myEvents = [];
    
$(document).ready(function () {
		// creating variables

    var eventTitle = 0;
    var startDate = 0;
    var startEnd = 0;
    var eventUrl = 0;
    var allday = 0;
    var classname = 0;
    var webflowLink = 0;
    // creating loop on events collection list item
    $('.ec-col-item').each(function(){ 
		// collect data from html
    var eventTitle = $(this).find('.title').text();
    var startDate = $(this).find('.start-date').text().replace(/-/g, '-');
    var startEnd = $(this).find('.end-date').text().replace(/-/g, '-');
    var eventUrl = $(this).find('.url').text();
    var eventAllday = $(this).find('.allday').text();
    var eventClassName = $(this).find('.classname').text();
    var webflowLink = $(this).find('.webflow-link').attr('href');
		// logging results
    console.log(eventTitle)
    console.log(startDate)
    console.log(startEnd)
    console.log(eventUrl)
    console.log(eventAllday)
    console.log(eventClassName)
    console.log(webflowLink)
    // pushing results onto calender
    myEvents.push({
        title: eventTitle,
        start: new Date(startDate) ,
        end: new Date(startEnd),
        url: webflowLink,
        allDay: eventAllday,
        className: eventClassName
    })
        
    });
    // create a date map for calender
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    // create calender inside of div with id
    var calendar = $('#divCalendar').fullCalendar({
        header: {
            left: 'prev,next, today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        buttonText: {
            prev: '<',
            next: '>'
        },
        selectable: true,
        events: myEvents
    });
});
