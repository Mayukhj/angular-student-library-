import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

studentdata= [{
			"id": 1,
			"rollNumber": "634437673bc0eed27acf4a64",
			"name": "Ashwin",
			"branch": "CSE",
			"emailId": "ashwin@test.com",
			"year": "2016",
			"books": [{
				"id": 1,
				"name": "Obsessive Genius"
			}]
		},
		{
			"id":2,
			"rollNumber": "634437673bc0eed27acfha64",
			"name": "Shreyas",
			"branch": "ISE",
			"emailId": "shreyas@test.com",
			"year": "2019",
			"books": []
		},
		{
			"id":3,
			"rollNumber": "634437673bw0eed27acfha64",
			"name": "Akshay",
			"branch": "ECE",
			"emailId": "akshay@test.com",
			"year": "2020",
			"books": [{
				"id": 1,
				"name": "Romeo & Juliet"
			}]
		},
		{
			"id":4,
			"rollNumber": "634237673bw0eed27acfha64",
			"name": "Dhanush",
			"branch": "ISE",
			"emailId": "dhanush@test.com",
			"year": "2022",
			"books": [{
				"id": 1,
				"name": "The Great Gatsby"
			}]
		},
		{
			"id":4,
			"rollNumber": "634237673bw0eed2acfha64",
			"name": "Anjan",
			"branch": "ECE",
			"emailId": "anjan@test.com",
			"year": "2023",
			"books": []
		},
		{
			"id":5,
			"rollNumber": "634237973bw0eed2acfha64",
			"name": "Suresh",
			"branch": "ISE",
			"emailId": "suresh@test.com",
			"year": "2023",
			"books": []
		},
		{
			"id":6,
			"rollNumber": "638237973bw0eed2acfha64",
			"name": "Shashank",
			"branch": "ISE",
			"emailId": "shashank@test.com",
			"year": "2013",
			"books": []
		},
		{
			"id":7,
			"rollNumber": "638237973bwieed2acfha64",
			"name": "Indresh",
			"branch": "ISE",
			"emailId": "indresh@test.com",
			"year": "2033",
			"books": [{
				"id": 1,
				"name": "Invaluable"
			}]
		},
		{
			"id":8,
			"rollNumber": "638237873bwieed2acfha64",
			"name": "Yamuna",
			"branch": "ISE",
			"emailId": "yamuna@test.com",
			"year": "2083",
			"books": []
		},
		{
			"id":9,
			"rollNumber": "638237923bwieed2acfha64",
			"name": "Sudharshan",
			"branch": "ISE",
			"emailId": "sudharshan@test.com",
			"year": "2013",
			"books": []
		}
	];
}
