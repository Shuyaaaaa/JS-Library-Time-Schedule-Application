// CalendarGenerator simple examples
"use strict"; 

const cg = new CalendarGenerator()
function examples() {
	cg.BasicCalendar([
		{
			date: 1,
			photo: "./img/5.jpg",
		},
		{
			date: 18,
			photo: "./img/6.jpg",
		},
		{
			date: 20,
			photo: "./img/7.jpg"
		}
	]);

	cg.SlideCalendar([
		{
			event: "Day 1: Try to Slow Down",
			photo: "./img/1.jpg",
		},
		{
			event: "Day 2: Rearrange My Hope List",
			photo: "./img/2.jpg",
	
		},
		{
			event: "Day 3: Admire the Moon",
			photo: "./img/3.jpg",
	
		},
		{
			event: "Day 4: Set Myself Free",
			photo: "./img/4.jpg",
	
		},
	]);

	cg.SlideGalleryCalendar([
		{
			event: "Day 1: Try to Slow Down",
			photo: "./img/1.jpg",
		},
		{
			event: "Day 2: Rearrange My Hope List",
			photo: "./img/2.jpg",
		},
		{
			event: "Day 3: Admire the Moon",
			photo: "./img/3.jpg",
		},
	]);

	cg.ImageGrid([
		{
			event: "Day 1: Try to Slow Down",
			photo: "./img/1.jpg",
		},
		{
			event: "Day 2: Rearrange My Hope List",
			photo: "./img/2.jpg",
		},
		{
			event: "Day 3: Admire the Moon",
			photo: "./img/3.jpg",
		},
		{
			event: "Day 4: Set Myself Free",
			photo: "./img/4.jpg",
		},
	]);

	cg.TodoList();

	cg.TimeLine({
		events:[
			{
				title: "2019/Aug/30",
				content: "First Arrive in Canada",
				photo: "./img/5.jpg",
			},
			{
				title: "2020/Jan/1",
				content: "Good Time with Crazy Friends",
				photo: "./img/8.jpg",
			},
			{
				title: "2020/Sep/1",
				content: "Go to School",
				photo: "./img/7.jpg",
			},
		]
	});

	cg.Timesheet({
		start_year:2012,
		end_year:2023,
		events:[
			{
				start_month: 9,
				start_year: 2012,
				end_month: 6,
				end_year: 2015,
				content: "High School",
			},
			{
				start_month: 8,
				start_year:2012,
				end_month: 2,
				end_year: 2018,
				content: "My Last Relationship",
			},
			{
				start_month: 9,
				start_year:2015,
				end_month: 6,
				end_year: 2019,
				content: "University",
			},
			{
				start_month: 9,
				start_year: 2019,
				end_month: 4,
				end_year: 2020,
				content: "First Year of MEng Program",
			},
			{
				start_month: 11,
				start_year: 2019,
				end_month: 6,
				end_year: 2020,
				content: "Be with My Cat",
			},
		]
	}); // end of timesheet

	cg.Timetable({
		start_time:8,
		end_time:18,
		events:[
			[
				{
					start_hour: 9,
					start_min: 30,
					end_hour: 10,
					end_min: 30,
					content: "Amy",
				},
				{
					start_hour: 12,
					start_min: 0,
					end_hour: 13,
					end_min: 15,
					content: "Irene",
				}
			], //1st

			[
				{
					start_hour: 14,
					start_min: 0,
					end_hour: 17,
					end_min: 16,
					content: "April",
				}

			], //2nd

			[
				{
					start_hour: 8,
					start_min: 20,
					end_hour: 13,
					end_min: 0,
					content: "Jack",
				}

			], //3rd

			[
				{
					start_hour: 12,
					start_min: 20,
					end_hour: 15,
					end_min: 0,
					content: "Bruce",
				},
				{
					start_hour: 15,
					start_min: 10,
					end_hour: 18,
					end_min: 0,
					content: "Jessica",
				}

			], //4th

			[
				{
					start_hour: 14,
					start_min: 20,
					end_hour: 15,
					end_min: 10,
					content: "Steve",
				},
				{
					start_hour: 15,
					start_min: 20,
					end_hour: 16,
					end_min: 30,
					content: "Tony",
				}

			], //5th

		]
	}); // end of timetable example


	cg.changeTimeZone({
		start_time:8,
		end_time:18,
		events:[
				{
					start_hour: 9,
					start_min: 0,
					end_hour: 10,
					end_min: 0,
					content: "Course 1",
				},
				{
					start_hour: 12,
					start_min: 0,
					end_hour: 13,
					end_min: 0,
					content: "Course 2",
				}
			],
	}); // end of timezone example

	cg.SearchTable({
		events: [
			{
				date: "2020/DEC/19",
				description: "csc309 Individual Due",
			},
			{
				date: "2020/DEC/25",
				description: "Christmas",
			},
			{
				date: "2021/JAN/1",
				description: "New Year",
			}

		],

	}); // end of search table example 

	
}

examples();