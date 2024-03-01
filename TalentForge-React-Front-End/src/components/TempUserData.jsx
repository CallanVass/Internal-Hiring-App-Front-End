

const tempUsers = [
	{
		"_id": "65dfac0ce95d4b133c52e1a7",
		"firstName": "Adam",
		"lastName": "Andrews",
		"email": "adam@email.com",
		"password": "$2b$08$mU/8JnncMa1zqU4i1RvZduUOiVoT9jL8rRU0duJZ6nbha3ZJxgR.y",
		"role": "Recruitment Manager",
		"department": "Human Resources",
		"image": "./misc/male_user_image.jpeg",
		"admin": true,
		"aboutMe": {
			"text": "I am a manager of the recruitment team",
			"careerDevelopment": "I am keen to experience all areas of Human Rescources",
			"tags": [
				"Happy where I am!",
				"Might be willing to move!"
			]
		},
		"applications": [],
		"__v": 0
	},
	{
		"_id": "65dfac0ce95d4b133c52e1a8",
		"firstName": "Betty",
		"lastName": "Bailey",
		"email": "betty@email.com",
		"password": "$2b$08$e7qQPrLHRIbr4b3UYMBkkudIc1tisoIN9bTL0vqYkuWNsag.iGNu6",
		"role": "HR Specialist",
		"department": "Human Resources",
		"image": "./misc/female_user_image.jpeg",
		"admin": false,
		"aboutMe": {
			"text": "I am a HR Specialist, looking after onboarding and training",
			"careerDevelopment": "I aspire to be Learning and Development manager",
			"tags": [
				"Looking for a new job!"
			]
		},
		"applications": [],
		"__v": 0
	},
	{
		"_id": "65dfac0ce95d4b133c52e1a9",
		"firstName": "Charlie",
		"lastName": "Castleton",
		"email": "charlie@email.com",
		"password": "$2b$08$n5HEw2NM9.ZLFSRQ6YDezug67unVV6h8/C8oiNQPuIaWeUSIdLCaK",
		"role": "Software Engineer",
		"department": "IT",
		"image": "./misc/male_user_image.jpeg",
		"admin": false,
		"aboutMe": {
			"text": "I am a Software Engineer, having been recently promoted from Junior Software Engineer",
			"careerDevelopment": "My long term plan is to be Head of IT",
			"tags": [
				"Happy where I am!",
				"Might be willing to move!"
			]
		},
		"applications": [],
		"__v": 0
	},
	{
		"_id": "65dfac0ce95d4b133c52e1aa",
		"firstName": "David",
		"lastName": "Denley",
		"email": "david@email.com",
		"password": "$2b$08$K5hoSRfaeH7lbydQAj9n1e5LZKVsf2aAwDDEKBgyK64qU09kaJBwC",
		"role": "Product Manager",
		"department": "Production",
		"image": "./misc/male_user_image.jpeg",
		"admin": false,
		"aboutMe": {
			"text": "I am a Product Manager and I manage a team of Product Developers",
			"careerDevelopment": "Having gained extensive experience in the overseas market, I am keen to develop my skills within the local Production team",
			"tags": [
				"Happy where I am!"
			]
		},
		"applications": [],
		"__v": 0
	},
	{
		"_id": "65dfac0ce95d4b133c52e1ab",
		"firstName": "Adam",
		"lastName": "Hunter",
		"email": "adamh@email.com",
		"password": "$2b$08$Vdt1EFK1/VGNAQouuxNVU.BP0fEuZTeUpRVmmhu5Z75x/3Y5be1X6",
		"role": "Developer",
		"department": "IT",
		"image": "./misc/male_user_image.jpeg",
		"admin": false,
		"aboutMe": {
			"text": "I am a developer",
			"careerDevelopment": "I want to be a senior developer",
			"tags": [
				"Looking for a new job!",
				"Happy where I am!",
				"Might be willing to move!",
				"Unsure how I feel about it!"
			]
		},
		"applications": [],
		"__v": 0
	},
	{
		"_id": "65dffb5d8af2da76d1d6303f",
		"firstName": "Added",
		"lastName": "Via POST METHOD",
		"email": "john.doe@example.com",
		"password": "$2b$08$Z1sFupXPxbZ1GiGN1wXJDOGiuweU57AnWDrJ2jcCljNGK6oCCcmjm",
		"role": "Software Engineer",
		"department": "Engineering",
		"admin": false,
		"aboutMe": {
			"headline": "Passionate Software Engineer",
			"career_goals": "To build impactful software products",
			"tags": [
				"developer",
				"engineer",
				"software"
			]
		},
		"applications": [],
		"__v": 0
	},
	{
		"_id": "65dffbc88af2da76d1d63044",
		"firstName": "Added",
		"lastName": "Via POST METHOD",
		"email": "john.doe@example.com",
		"password": "$2b$08$mHKFrvFSr6elA5N7qclDk.BJ.TjfOEgHL.vqgu9S9OTrDRLyGFfBe",
		"role": "Software Engineer",
		"department": "Engineering",
		"admin": false,
		"aboutMe": {
			"headline": "Passionate Software Engineer",
			"career_goals": "To build impactful software products",
			"tags": [
				"developer",
				"engineer",
				"software"
			]
		},
		"applications": [],
		"__v": 0
	},
	{
		"_id": "65dffec5b28681846f8efa69",
		"firstName": "Added",
		"lastName": "Via POST METHOD",
		"email": "john.doe@example.com",
		"password": "$2b$08$ls7A3BXHpX0GnN5WaK5Nmuooox7qeyG71Qo.FI001.dQeDpaaypRC",
		"role": "Software Engineer",
		"department": "Engineering",
		"admin": false,
		"aboutMe": {
			"headline": "Passionate Software Engineer",
			"career_goals": "To build impactful software products",
			"tags": [
				"developer",
				"engineer",
				"software"
			]
		},
		"applications": [],
		"__v": 0
	},
	{
		"_id": "65e002424da8fc6ca6800a21",
		"firstName": "Amy",
		"lastName": "Lawson",
		"email": "amy@email.com",
		"password": "$2b$08$NOPGQLdIb98Sf3TEgbwHqOIwHOflAuyyLN06icL.HIre4PkmutQcG",
		"role": "Planner",
		"department": "Finance",
		"admin": false,
		"aboutMe": {
			"headline": "",
			"career_goals": "",
			"tags": [
				"",
				"",
				""
			]
		},
		"applications": [],
		"__v": 0
	}
]

export default tempUsers