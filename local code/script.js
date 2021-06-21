"use strict"; 

(function(global, document, $) {
  function CalendarGenerator() {
    this.calendars = [];
	}

let date = new Date(); // I change const to let

CalendarGenerator.prototype = {
  BasicCalendar: function(opt)  {
    let now = new Date();
    console.log(now);
    // let now = new Date(2002, 5, 24) //year month(5=june) day 

    createCalendar(now);

    function createCalendar(){
      const weekNameList = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      const daysOfweek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];

      const body = document.getElementById("BasicMonthlyCalendar");

      const cal_container = document.createElement('div');
      cal_container.className = "cal-container";
      body.appendChild(cal_container);

      const cal_day = document.createElement('cal-day');
      cal_day.className = "cal-day";
      cal_container.appendChild(cal_day);

      const cal_day_name = document.createElement('div');
      cal_day_name.className = "cal-day-name";
      cal_day_name.innerText = daysOfweek[now.getDay()];     // the weekday name
      cal_day.appendChild(cal_day_name);

      const cal_day_number = document.createElement('div');
      cal_day_number.className = "cal-day-number"; 
      cal_day_number.innerText = now.getDate();            // demonstrate day
      cal_day.appendChild(cal_day_number);

      const cal_day_image = document.createElement('img');
      cal_day_image.className = "cal-day-image";         // demonstrate photo
      cal_day.appendChild(cal_day_image);

      const cal_month = document.createElement('div');
      cal_month.className = "cal-month";
      cal_container.appendChild(cal_month);

      const cal_month_header = document.createElement('div');
      cal_month_header.className = "cal-month-header";
      cal_month.appendChild(cal_month_header);

      const cal_month_prev = document.createElement('div');
      cal_month_prev.className = "cal-month-prev";
      // cal_month_prev.innerText = "<";
      cal_month_prev.innerText = "";
      cal_month_header.appendChild(cal_month_prev);

      const cal_month_name = document.createElement('div');
      cal_month_name.className = "cal-month-name";
      cal_month_name.innerText = months[now.getMonth()] + ' ' + now.getFullYear() //month and year
      cal_month_header.appendChild(cal_month_name);

      const cal_month_next = document.createElement('div');
      cal_month_next.className = "cal-month-next";
      // cal_month_next.innerText = ">";
      cal_month_next.innerText = "";
      cal_month_header.appendChild(cal_month_next);

      const cal_month_body = document.createElement('div');
      cal_month_body.className = "cal-month-body";
      cal_month.appendChild(cal_month_body);

      const cal_month_weeks = document.createElement('div');
      cal_month_weeks.className = "cal-month-weeks";
      cal_month_body.appendChild(cal_month_weeks);

      let curChosenDay = now.getDate();
      console.log('Current Chosen Day is', curChosenDay);

      for (let i=0; i<=6; i++){
        let cal_week_day = document.createElement('div');
        cal_week_day.className = "cal-week-day";
        cal_week_day.innerText = weekNameList[i];
        cal_month_weeks.appendChild(cal_week_day);
      }

      const cal_month_days = document.createElement('div');
      cal_month_days.className = "cal-month-days";
      cal_month_body.appendChild(cal_month_days);

      const prevLastDay = now.getDay() // the previous month left {} days

      for (let j=1; j<=prevLastDay; j++){
        let cal_placeholder_day = document.createElement('div');
        cal_placeholder_day.className = "cal-placeholder-day";
        cal_month_days.appendChild(cal_placeholder_day);
      };

      const lastday = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

      // collect the date into an array
      let arr = [];
      for (let i=0; i<opt.length;i++){
        arr.push(opt[i].date)
      }
      
      // collect the photo rsc into an array
      let photo = [];
      for (let j=0; j<opt.length;j++){
        photo.push(opt[j].photo)
      }

      for (let x=1; x<=lastday; x++){
        let cal_month_day = document.createElement('div');
        cal_month_day.className = "cal-month-day";
        cal_month_day.innerText = x;
        if (x == curChosenDay){
          cal_month_day.className = "cal-month-day active";
          cal_month_day.tag = "redOne";
        }
        cal_month_day.onclick = function(){
          cal_day_number.innerText = x;
          let currentDay = new Date(now.getFullYear(),now.getMonth(),x)
          cal_day_name.innerText = daysOfweek[currentDay.getDay()];
          // cal_month_day.className = "cal-month-day active";
          // date = index+1
          let index = arr.indexOf(x)+1;
          if (index){
            console.log('We do have this date in event list!',x);
            cal_day_number.innerText = "";
            cal_day_image.src = photo[index-1];
          }
          else {
            cal_day_image.src = "";
          }

        };
        cal_month_days.appendChild(cal_month_day);
      };

    }

  }, // end of the 1st function: BasicCalendar


  
  SlideCalendar: function(opt) {
    let slides = [];
    let dots = []
    console.log("We have",opt.length,"events to dispaly!");
    const body = document.getElementById("BasicSlide");

    // slideshow container
    const slideshow_container = document.createElement('div');
    slideshow_container.className = "slideshow-container";
		body.append(slideshow_container)

    // full-width images with number and caption text
    for (let i=1; i<=opt.length; i++){
      let slide = document.createElement('div');
      slide.className = "mySlides";
      slideshow_container.appendChild(slide);

      let numbertext = document.createElement('div');
      numbertext.innerText = i + ' / ' + opt.length;
      numbertext.className = "numbertext";
      slide.appendChild(numbertext);

      let image = document.createElement('img');
      image.style = "width:100%";
      image.src = opt[i-1].photo;
      slide.appendChild(image);

      let text = document.createElement('div');
      text.innerText = opt[i-1].event;
      text.className = "text";
      slide.appendChild(text);

      slides.push(slide);
    }

    // next and previous button
    const prev = document.createElement('a');
    prev.className = "prev";
    prev.innerText = "Previous";
    slideshow_container.appendChild(prev);
    prev.onclick = function(){
      plusSlides(-1);
    }

    const next = document.createElement('a');
    next.className = "next";
    next.innerText = "Next";
    slideshow_container.appendChild(next);
    next.onclick = function(){
      plusSlides(1);
    }

    const br = document.createElement('br');
    body.append(br);

    // the dots/circles
    const div = document.createElement('div');
    div.style = "text-align:center";
    body.append(div);

    for (let i=1; i<=opt.length; i++){
      let dot = document.createElement('span');
      dot.className = "dot";
      div.appendChild(dot);
      dot.onclick = function(){
        currentSlide(i)
      }

      dots.push(dot);
    }


    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      if (n > slides.length) {slideIndex = 1} 
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block"; 
      dots[slideIndex-1].className += " active";
    }

  }, // end of the 3rd function : slidecalendar

  SlideGalleryCalendar: function(opt){
    console.log("We have",opt.length,"events to dispaly!");
    const body = document.getElementById("SlideGallery");
    let slides = [];
    let dots = [];

    // slideshow container
    const slideshow_container = document.createElement('div');
    slideshow_container.className = "gallery-container";
    body.append(slideshow_container);
		

    // full-width images with number and caption text
    for (let i=1; i<=opt.length; i++){
      let slide = document.createElement('div');
      slide.className = "gallery-mySlides";
      slideshow_container.appendChild(slide);

      let numbertext = document.createElement('div');
      numbertext.innerText = i + ' / ' + opt.length;
      numbertext.className = "gallery-numbertext";
      slide.appendChild(numbertext);

      let image = document.createElement('img');
      image.style = "width:100%";
      image.src = opt[i-1].photo
      slide.appendChild(image);
      slides.push(slide);
    }

    // next and previous button
    const prev = document.createElement('a');
    prev.className = "gallery-prev";
    prev.innerText = "Previous";
    slideshow_container.appendChild(prev);
    prev.onclick = function(){
      plusSlides(-1);
    }

    const next = document.createElement('a');
    next.className = "gallery-next";
    next.innerText = "Next";
    slideshow_container.appendChild(next);
    next.onclick = function(){
      plusSlides(1);
    }

    // image text
    const caption_container = document.createElement('div');
    caption_container.className = "gallery-caption-container"; // a new class
    slideshow_container.appendChild(caption_container);

    const captionText = document.createElement('h2');
    caption_container.appendChild(captionText);

    // thumbnail images
    const image_row = document.createElement('div');
    image_row.className = "gallery-row";
    slideshow_container.appendChild(image_row);

    for (let i=1; i<=opt.length; i++){
      let image_column = document.createElement('div');
      image_column.className = "gallery-column";
      // set the width for small gallery photos
      image_column.style = `width: ${100/opt.length}%`; 
      image_row.appendChild(image_column);

      let dot = document.createElement('img');
      dot.className = "demo cursor";
      dot.src = opt[i-1].photo;
      dot.style = "width:100%";
      dot.alt = opt[i-1].event;
      dot.onclick = function(){
        currentSlide(i);
      }
      image_column.appendChild(dot);
      dots.push(dot);
    }

    /***************** add the js part ********************/
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      captionText.innerHTML = dots[slideIndex-1].alt;
    }

  }, // end of the 4th function


  ImageGrid: function(opt){
    console.log("We have",opt.length,"events to dispaly! The number of events better be multiple of 4.");
    let elements = []

    const body = document.getElementById("ImageGrid");

    //header
    const grid_header = document.createElement('div');
    grid_header.className = "grid-header";
    body.appendChild(grid_header);

    const h3 = document.createElement('h3');
    h3.innerText = "Image Grid with An Overlay Effect";
    grid_header.appendChild(h3);

    const p = document.createElement('p');
    p.innerText = "Click on the buttons to change the grid view.";
    grid_header.appendChild(p);

    const button1 = document.createElement('button');
    button1.className = "grid-btn";
    button1.onclick = function(){
      one();
    }
    button1.innerText = "1";
    grid_header.appendChild(button1);

    const button2 = document.createElement('button');
    button2.className = "grid-btn";
    button2.onclick = function(){
      two();
    }
    button2.innerText = "2";
    grid_header.appendChild(button2);

    const button4 = document.createElement('button');
    button4.className = "grid-btn";
    button4.onclick = function(){
      four();
    }
    button4.innerText = "4";
    grid_header.appendChild(button4);


    // photo grid
    const grid_row = document.createElement('div');
    grid_row.className = "grid-row";
    body.appendChild(grid_row);

    for (let i=1; i<=4; i++){
      let grid_column = document.createElement('div');
      grid_column.className = "grid-column";
      elements.push(grid_column);
      grid_row.appendChild(grid_column);

      for (let j=1; j<=opt.length/4; j++){

        // add an overlay effect
        let grid_container = document.createElement('div');
        grid_container.className = "grid-container";
        grid_column.appendChild(grid_container);

        let grid_image = document.createElement('img')
        let index = opt.length/4*(i-1)+j-1;
        grid_image.src = opt[index].photo;
        grid_image.style="width:100%";
        grid_image.className = "grid-image";
        grid_container.appendChild(grid_image);
        // console.log("The image number:",index+1);

        let grid_overlay = document.createElement('div');
        grid_overlay.className = "overlay";
        grid_container.appendChild(grid_overlay);

        let grid_text = document.createElement('div');
        grid_text.className = "grid-text";
        grid_text.innerText = opt[index].event;
        grid_overlay.appendChild(grid_text);

      }

    }

    // Declare a loop variable
    var i;

    // Full-width images
    function one() {
        for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "100%";  // IE10
        elements[i].style.flex = "100%";
      }
      console.log('Button One!')
    }

    // Two images side by side
    function two() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "50%";  // IE10
        elements[i].style.flex = "50%";
      }
      console.log('Button Two!')
    }

    // Four images side by side
    function four() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%";  // IE10
        elements[i].style.flex = "25%";
      }
      console.log('Button Four!')
    }

  },  // end of 5th function


  TodoList: function(){
    const body = document.getElementById("TodoList");

    const todo_header = document.createElement('div');
    todo_header.className = "todo-header";
    body.appendChild(todo_header);

    const h2 = document.createElement('h2');
    h2.innerText = 'Customized To Do List';
    h2.style = "margin:5px";
    todo_header.appendChild(h2);

    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Input the event you need to do ...";
    todo_header.appendChild(input);

    const todo_span = document.createElement('span');
    todo_span.onclick = function(){
      console.log('Add a new event!')
      newElement();
      
    }
    todo_span.className = "todo-addBtn";
    todo_span.innerText = "Add";
    todo_header.appendChild(todo_span);

    const ul = document.createElement('ul');
    ul.className = "todo-ul";
    body.appendChild(ul);

    const li1 = document.createElement('li');
    li1.innerText = "Finish my homework";
    ul.appendChild(li1);

    const li2 = document.createElement('li')
    li2.innerText = "Pay bills";
    li2.className = "checked";
    ul.appendChild(li2);

    const li3 = document.createElement('li')
    li3.innerText = "Hit the gym";
    ul.appendChild(li3);


    // Create a "close" button and append it to each list item
    // var myNodelist = document.getElementsByTagName("LI");
    var myNodelist = ul.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "todo-close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("todo-close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

    // Add a "checked" symbol when clicking on a list item
    let list = ul;
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);

    // Create a new list item when clicking on the "Add" button
    function newElement() {
      var li = document.createElement("li");
      var inputValue = input.value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must input an event!");
      } else {
        ul.appendChild(li);
      }
      input.value = "";

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "todo-close";
      span.appendChild(txt);
      li.appendChild(span);

      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }
  }, // end of 6th function


  TimeLine: function(opt){
    const body = document.getElementById("TimeLine");
    body.style="background-color: #474e5d";
    const timeline = document.createElement('div');
    timeline.className = "timeline";
    body.appendChild(timeline);

    for (let i=0; i<opt.events.length; i++){
      let event = opt.events[i];

      // display the event on the left
      if (i%2==0){
        let container_left = document.createElement('div');
        container_left.className = "timeline-container left";
        timeline.appendChild(container_left);

        let content = document.createElement('div');
        content.className = "timeline-content";
        container_left.appendChild(content);

        let h2 = document.createElement('h2');
        h2.innerText = event.title;
        content.appendChild(h2);

        let p = document.createElement('p');
        p.innerText = event.content;
        content.appendChild(p);

        let img = document.createElement('img');
        img.src = event.photo;
        img.style = "width:100%"
        img.className = "shake-img";
        content.appendChild(img);

      }
      // display the event on the right
      else{
        let container_right = document.createElement('div');
        container_right.className = "timeline-container right";
        timeline.appendChild(container_right);
    
        let content1 = document.createElement('div');
        content1.className = "timeline-content";
        container_right.appendChild(content1);
    
        let h21 = document.createElement('h2');
        h21.innerText = event.title;
        content1.appendChild(h21);
    
        let p1 = document.createElement('p');
        p1.innerText = event.content;
        content1.appendChild(p1);

        let img = document.createElement('img');
        img.src = event.photo;
        img.style = "width:100%";
        img.className = "shake-img";
        content1.appendChild(img);

      }
    }

  },



  // remember to change the background container!!!!
  Timesheet: function(opt)  {
    const start_year = opt.start_year;
    const end_year = opt.end_year;
    console.log('We have',opt.events.length,'events to display in the timesheet!');

    const body = document.getElementById("YearlyTimesheet") // using jQuery local variable
    body.className = "timesheet color-scheme-default";

    const scale = document.createElement('div');
    scale.className = "scale";
    body.appendChild(scale);

    for (let i=0; i<=end_year-start_year; i++){
      let section = document.createElement('section');
      section.innerText = start_year+i;
      scale.appendChild(section);
    }

    const ul = document.createElement('ul');
    ul.className = "data";
    body.appendChild(ul);

    const colors = ['lorem','ipsum','sit','dolor','default'];

    for (let i=0; i<opt.events.length;i++){
      let event = opt.events[i];
      let li = document.createElement('li');
      ul.appendChild(li);

      let span1 = document.createElement('span');
      let startCell = ((event.start_year-start_year)*12 + event.start_month - 1)*5;
      let endCell = ((event.end_year-start_year)*12 + event.end_month)*5;
      let lengthCell = endCell - startCell;
      console.log(startCell,endCell,lengthCell);
      span1.style = `margin-left: ${startCell}px; width: ${lengthCell}px;`;
      span1.className = `bubble bubble-${colors[i%colors.length]}`;
      li.appendChild(span1);

      let span2 = document.createElement('span');
      span2.className = "data";
      span2.innerText = `${event.start_month}/${event.start_year} - ${event.end_month}/${event.end_year}`;
      li.appendChild(span2);

      let span3 = document.createElement('span');
      span3.className = "label";
      span3.innerText = `${event.content}`;
      li.appendChild(span3);
    }
    
    
  }, // end of timesheet

  Timetable: function(opt)  {

    const body = document.getElementById('DailyTimetable');
    body.className = "timetable";

    const aside = document.createElement('aside');
    body.appendChild(aside);

    const ul = document.createElement('ul');
    aside.appendChild(ul);
    
    for (let i=1; i<=opt.events.length; i++){   // the sidebar
      let li = document.createElement('li');
      ul.appendChild(li);

      let span = document.createElement('span');
      span.className = "row-heading";
      span.innerText = `Resource ${i}`;
      li.appendChild(span);
    }

    const section = document.createElement('section');
    body.appendChild(section);

    const header = document.createElement('header');
    header.className = "syncscroll";
    section.appendChild(header);

    const ul_header = document.createElement('ul');
    header.appendChild(ul_header);

    for (let i=opt.start_time; i<=opt.end_time; i++){  // the time header
      let li_header = document.createElement('li');
      ul_header.appendChild(li_header);

      let span_header = document.createElement('span');
      span_header.className = "time-label";
      span_header.innerText = `${i}:00`;
      li_header.appendChild(span_header);
    }

    const time = document.createElement('time');
    time.className = "syncscroll";
    section.appendChild(time);

    const time_ul = document.createElement('ul');
    time_ul.className = "room-timeline";
    time_ul.style = `width:${(opt.end_time-opt.start_time)*96}px;`; // the grid background
    time.appendChild(time_ul);

    const colors = ["time-entry", "time-entry purple", "time-entry green", "time-entry yellow", "time-entry blue"];   // assign different colors to different line/resource

    for (let x=0; x<opt.events.length; x++){
      let time_li = document.createElement('li'); 
      time_ul.appendChild(time_li);                  // the li element for every resource

      for (let y=0; y<opt.events[x].length; y++){     // for every line
        let event = opt.events[x][y];

        let time_span = document.createElement('span');

        time_span.className = colors[x%colors.length]; // another color +vip-only

        let startCell = (event.start_hour - opt.start_time) * 96;
        startCell = startCell + event.start_min * 1.6;
        let endCell = (event.end_hour - opt.start_time) * 96;
        endCell = endCell + event.end_min * 1.6;
        time_span.style = `margin-left:${startCell}px;width:${endCell-startCell}px`;
        

        time_li.appendChild(time_span);

        let time_small = document.createElement('small');
        time_small.innerText = event.content;
        time_span.appendChild(time_small);
      }
    }
    
  }, // end of timetable

  changeTimeZone: function(opt)  {

    const body = document.getElementById('DailyTimeZone');
    body.className = "timetable";

    const aside = document.createElement('aside');
    body.appendChild(aside);

    const ul = document.createElement('ul');
    aside.appendChild(ul);

    const CityName = ["Toronto","Vancouver","Edmonton","New York","London"];
    
    for (let i=0; i<CityName.length; i++){   // the sidebar for 5 cities
      let li = document.createElement('li');
      ul.appendChild(li);

      let span = document.createElement('span');
      span.className = "row-heading";
      span.innerText = CityName[i];
      li.appendChild(span);
    }

    const section = document.createElement('section');
    body.appendChild(section);

    const header = document.createElement('header');
    header.className = "syncscroll";
    section.appendChild(header);

    const ul_header = document.createElement('ul');
    header.appendChild(ul_header);

    for (let i=opt.start_time; i<=opt.end_time; i++){  // the time header
      let li_header = document.createElement('li');
      ul_header.appendChild(li_header);

      let span_header = document.createElement('span');
      span_header.className = "time-label";
      span_header.innerText = `${i}:00`;
      li_header.appendChild(span_header);
    }

    const time = document.createElement('time');
    time.className = "syncscroll";
    section.appendChild(time);

    const time_ul = document.createElement('ul');
    time_ul.className = "room-timeline";
    const timelineLength = (opt.end_time-opt.start_time)*96;
    time_ul.style = `width:${timelineLength}px;`; // the grid background
    time.appendChild(time_ul);

    const colors = ["time-entry", "time-entry purple", "time-entry green", "time-entry yellow", "time-entry blue"]; 
    const timeZoneList = [0,-3,-2,0,5];
    console.log(timelineLength);

    for (let y=0; y<CityName.length; y++){

      let time_li = document.createElement('li'); 
      time_ul.appendChild(time_li);

      for (let x=0; x<opt.events.length; x++){
        let event = opt.events[x];
  
        let time_span = document.createElement('span');
  
        time_span.className = colors[x%colors.length]; // change color for each event
  
        let startCell = (event.start_hour - opt.start_time + timeZoneList[y]) * 96;  // change time zone
        startCell = startCell + event.start_min * 1.6;
        let endCell = (event.end_hour - opt.start_time + timeZoneList[y]) * 96;
        endCell = endCell + event.end_min * 1.6;
        console.log(startCell,endCell);

        if (startCell>=0 & startCell<=timelineLength & endCell>=0 & endCell<=timelineLength){
          time_span.style = `margin-left:${startCell}px;width:${endCell-startCell}px`;
          time_li.appendChild(time_span);
    
          let time_small = document.createElement('small');
          time_small.innerText = event.content;
          time_span.appendChild(time_small);
          console.log("1");  
        }
        else if (startCell<0 & endCell>=0 & endCell<=timelineLength){
          time_span.style = `margin-left:0px;width:${endCell}px`;
          time_li.appendChild(time_span);
    
          let time_small = document.createElement('small');
          time_small.innerText = event.content;
          time_span.appendChild(time_small);
          console.log("2");
        }
        else if (startCell>=0 & startCell<timelineLength & endCell>timelineLength){
          time_span.style = `margin-left:${startCell}px;width:${timelineLength-startCell}px`;
          time_li.appendChild(time_span);
          let time_small = document.createElement('small');
  
          time_small.innerText = event.content;
          time_span.appendChild(time_small);
          console.log("3");
        }
        else {
          console.log("4");
        }
         
      }
    }  
    
  }, // end of timezone

  SearchTable: function(opt)  {
    const body = document.getElementById('EventSearchTable');
    let tr = [];

    const input = document.createElement('input');
    input.id = "myInput";
    input.type = "text";
    input.onkeyup = function(){
      myFunction();
    };    
    input.placeholder = "Search for dates ...";
    input.title = "Type in a name";
    body.appendChild(input);

    const table = document.createElement('table');
    table.id = "myTable";
    body.appendChild(table);

    const header_tr = document.createElement('tr');
    header_tr.className = "header";
    table.appendChild(header_tr);

    const header_th1 = document.createElement('th');
    header_th1.style = "width:40%";
    header_th1.innerText = "Date";
    header_tr.appendChild(header_th1);

    let header_th2 = document.createElement('th');
    header_th2.style = "width:60%";
    header_th2.innerText = "Description";
    header_tr.appendChild(header_th2);

    for (let i=0; i<opt.events.length; i++){
      let event = opt.events[i];
      
      let tr = document.createElement('tr');
      table.appendChild(tr);

      let td1 = document.createElement('td');
      tr.appendChild(td1);
      td1.innerText = event.date;

      let td2 = document.createElement('td');
      tr.appendChild(td2);
      td2.innerText = event.description;
    }

    function myFunction() {
      // Declare variables 
      console.log('Input available');
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
    
      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        } 
      }
    }

  } // end of the search table example




}  // end of prototype

global.CalendarGenerator = global.CalendarGenerator || CalendarGenerator

})(window, window.document, $);
