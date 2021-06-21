# JS Library: Time Schedule Application
### Link to landing page: https://time-schedule.herokuapp.com/
### Link to documentation: https://time-schedule.herokuapp.com/documentation.html
### Getting Started
- The library is used for recording special events on special timestamps, like a calendar or a notepad, but in a more visually rich and interactive way. In this library, you will find many kinds of traditional calendars, like the monthly calendar, slide calendar, agenda, timeline, timetable, to-do list, time resource organization, world clock planner and so on.
- Some APIs are implemented with photo adding. After inputting events, you can also add an image for this event. Then, when you click the special timestamp on the webpage, whose corresponding photo will show dynamically.
- The left APIs add a variety of features to the calendar itself. For example, the API **.SearchTable()** can not only add events in the timetable, but also can search the event with the date keywords.
- It is easy to use this library. You just need to import the css file **style.css** and js file **script.js** in the **head** section of your html. You also need to import the external modules **jQuery**. For convenience, you can create an **example.js** file and include it in you **head** section as well.
- In **example.html** (you can customize its name), you can import the libraries with the code below:
```
< link rel="stylesheet" href="style.css" />
< script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
< script defer type="text/javascript" src="script.js"> </script >
< script defer type="text/javascript" src="example.js"> </script >
```
- In **example.js**, you can directly use the library APIs with the code below. In the section **API List**, all APIs will be talked about in detail.
```
"use strict";
const cg = new CalendarGenerator()
function examples() {
    cg.BasicCalendar();
    cg.SlideCalendar();
    cg.SlideGalleryCalendar();
    cg.ImageGrid();
    cg.TodoList();
    cg.TimeLine();
    cg.Timesheet();
    cg.Timetable();
    cg.changeTimeZone();
    cg.SearchTable();
}
examples();
```

### API List
The 10 API functions are the most important part of this time-schedule library. The table below will show you their parameters and functionalities. 

- **.BasicCalendar()**
For the class of each event, it has two parameters: date (int) and photo (url). These two parameters help locate the date of each event and display the event image in the day calendar when the date cell is clicked.
- **.SlideCalendar()**
For the class of each event, it has two parameters: event (str) and photo (url). These two parameters help build the slide calendar with the event contents and event images.
- **.SlideGalleryCalendar()**
For the class of each event, it has two parameters: event (str) and photo (url). These two parameters help build the slide gallery calendar with the event contents and event images.
- **.ImageGrid()**
For the class of each event, it has two parameters: event (str) and photo (url). These two parameters help build the image grid calendar with the event contents and event images.
- **.TodoList()**
Users can directly import this function in script. All user interactions are finished in the webpage.
- **.TimeLine()**
For the class of each event, it has three parameters: title (str), content (str) and photo (url). These three parameters help build the timeline with the dates, event contents and event images.
- **.Timesheet()**
For the class of timesheet, it has three parameters: start_year (int), end_year (int) and events (class). The first two parameters help to plot the whole timesheet. For every event in events, it has 5 parameters: start_month (int), start_year (int), end_month (int), end_year (int) and content (str). The first four parameters help to draw the event at the right time / place. The last parameter shows the event content in the timesheet.
- **.Timetable()**
For the class of timetable, it has three parameters: start_time (int), end_time (int) and events (class). The first two parameters help to plot the whole timetable. For every reservation in events, it has 5 parameters: start_hour (int), start_min (int), end_hour (int), end_min (int) and content(str). The first four parameters help to draw the event at the right time / place. The last parameter shows the event content in the timetable.
- **.changeTimeZone()**
For the class of timetable, it has three parameters: start_time (int), end_time (int) and events (class). The first two parameters help to plot the time range of the whole timetable. For every event in events, it has 5 parameters: start_hour (int), start_min (int), end_hour (int), end_min (int) and the content (str). The first four parameters help to draw the event at the right time / place. The last parameter can tell users the content of the event. Then the webpage will display the event in five different zones.
- **.SearchTable()**
For the class of each event, it has two parameters: date (str) and description (str). These two parameters help build the timetable with the dates and event contents. Then this API function can help us search the events which satisfy the input date keywords on the webpage.

These functions can be applied as below in Javascript.
```
const cg = new CalendarGenerator();

cg.BasicCalendar([
    { date: 1, photo: "./img/5.jpg", },
    { date: 18, photo: "./img/6.jpg", },
    { date: 20, photo: "./img/7.jpg" } ]);

cg.Timesheet({
    start_year:2012,
    end_year:2023,
    events:[
            { start_month: 9, start_year: 2012, end_month: 6, end_year: 2015, content: "High School", },
            { start_month: 8, start_year:2012, end_month: 2, end_year: 2018, content: "My Last Relationship", },
            { start_month: 9, start_year:2015, end_month: 6, end_year: 2019, content: "University", },
            { start_month: 9, start_year: 2019, end_month: 4, end_year: 2020, content: "First Year of MEng Program", },
            { start_month: 11, start_year: 2019, end_month: 6, end_year: 2020, content: "Be with My Cat", }, ] });

cg.Timetable({
    start_time:8,
    end_time:18,
    events:[
            [ { start_hour: 9, start_min: 30, end_hour: 10, end_min: 30, content: "Amy", }, { start_hour: 12, start_min: 0, end_hour: 13, end_min: 15, content: "Irene", } ],
            [ { start_hour: 14, start_min: 0, end_hour: 17, end_min: 16, content: "April", } ],
            [ { start_hour: 8, start_min: 20, end_hour: 13, end_min: 0, content: "Jack", } ],
            [ { start_hour: 12, start_min: 20, end_hour: 15, end_min: 0, content: "Bruce", }, { start_hour: 15, start_min: 10, end_hour: 18, end_min: 0, content: "Jessica", } ],
            [ { start_hour: 14, start_min: 20, end_hour: 15, end_min: 10, content: "Steve", }, { start_hour: 15, start_min: 20, end_hour: 16, end_min: 30, content: "Tony", } ], ] });

cg.changeTimeZone({
     start_time:8,
     end_time:18,
     events:[
             { start_hour: 9, start_min: 0, end_hour: 10, end_min: 0, content: "Course 1", },
             { start_hour: 12, start_min: 0, end_hour: 13, end_min: 0, content: "Course 2", } ], });

cg.SearchTable({
     events: [
            { date: "2020/DEC/19", description: "csc309 Individual Due", },
            { date: "2020/DEC/25", description: "Christmas", },
            { date: "2021/JAN/1", description: "New Year", } ], });

cg.SlideCalendar([
    { event: "Day 1: Try to Slow Down", photo: "./img/1.jpg", },
    { event: "Day 2: Rearrange My Hope List", photo: "./img/2.jpg", },
    { event: "Day 3: Admire the Moon", photo: "./img/3.jpg", },
    { event: "Day 4: Set Myself Free", photo: "./img/4.jpg", }, ]);

cg.SlideGalleryCalendar([
    { event: "Day 1: Try to Slow Down", photo: "./img/1.jpg", },
    { event: "Day 2: Rearrange My Hope List", photo: "./img/2.jpg", },
    { event: "Day 3: Admire the Moon", photo: "./img/3.jpg", }, ]);

cg.ImageGrid([
    { event: "Day 1: Try to Slow Down", photo: "./img/1.jpg", },
    { event: "Day 2: Rearrange My Hope List", photo: "./img/2.jpg", },
    { event: "Day 3: Admire the Moon", photo: "./img/3.jpg", },
    { event: "Day 4: Set Myself Free", photo: "./img/4.jpg", }, ]);

cg.TodoList();

cg.TimeLine({
    events:[
            { title: "2019/Aug/30", content: "First Arrive in Canada", photo: "./img/5.jpg", },
            { title: "2020/Jan/1", content: "Good Time with Crazy Friends", photo: "./img/8.jpg", },
            { title: "2020/Sep/1", content: "Go to School", photo: "./img/7.jpg", }, ] });
```


