# Company-Management-MERN
It is a full-stack web application to manage a list of department in a company. Each department has a name, set of teams, and the person in-charge. Each team has a team number, a set of people, and a team lead. It consists of two parts, a RESTful API as the backend and the JavaScript based frontend application.


## Backend implementation
Following API endpoints are implemented:

GET /departments/ - Returns a list of departments in the database in JSON format

GET /departments/{{id}}/ - Returns a detail view of the specified department. Including department, and team IDs in JSON format

GET /teams/ - Returns a list of teams in the database in JSON format

GET /teams/{{id}}/ - Returns a detail view of the specified team id

GET /users/ - Returns a list of users in the database in JSON format

GET /users/{{id}}/ - Returns a detail view of the specified user id

POST /departments/ - Creates a new department with the specified details - Expects a JSON body

POST /teams/ - Creates a new team with the specified details - Expects a JSON body

POST /users/ - Creates a new user with the specified details - Expects a JSON body

PUT /departments/{{id}} - Updates an existing department - Expects a JSON body

PUT /teams/{{id}} - Updates an existing team - Expects a JSON body

PUT /users/{{id}} - Updates an existing user - Expects a JSON body
## Frontend implementation
The frontend shows a list of names of the departments available in the database. Upon clicking the name of a department on the list, the user is navigated to a more detailed view of the selected department, where they are presented with the teams and department in-charge. Once they click a team, they are presented with the team lead, and all the users inside the team. Forms are also implemented where the user is able to create/update departments, teams, and users (using the POST and PUT endpoints)
