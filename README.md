# Internal-Hiring-App-Front-End

## Table Of Contents:

- [Website Description](#r1---website-description)
- [Dataflow Diagram](#r2---dataflow-diagram)
- [Application Architecture Diagram](#r3---application-architecture-diagram)
- [User Stories](#r3---application-architecture-diagram)
- [Wireframes](#r5---wireframes)
- [Kanban Screenshots](#r6---kanban-screenshots)

### R1 - Website Description

### Purpose

The purpose of TalentForge is to provide a space for organisations and companies to advertise their positions internally before displaying them on job-listing websites. By providing this functionality, we're able to give employees a chance to display their ambitions. This works for the employer by lessening the costs (both time-wise and monetariy) associated with the hiring process, and for the employee by providing them a place to display their interest and ambition for a company position.

### Functionality / Features

The main functionality of TalentForge is the ability to list jobs internally, however the web app consists of five different pages, each possessing a different function/feature. The features go as follows:

- Login Feature:

This will allow Users to login to the application. It will check usernames and passwords (hashed using bcrypt and Mongoose schema) against a MongoDB database. If the username and password do not match / are incorrect, the page will deny them access to the homepage and prompt the user to try again.

- Profile Feature:

Each user will have a profile page they can visit to update their information. Users will be encouraged to update their profile past the bare essentials admins will have to enter upon account creation. It will contain the following sections: Name, Contact Info, Bio, Current Role, Skills, Career Plan, and potentially Resume. This way when the user applies to a job, the information can be taken directly from their profile, making the entire process as simple as a click.

- Job Search Feature:

Users will be able to search for jobs within their companies (seperated by department). This will help users speedily navigate their job search.

- Job Listing Feature:

Admins have access to this feature, which will allow them to list company jobs on the site itself. Jobs will have a listing title along with a department, description, salary, expectations, close date.

- User Search Feature:

Admins will be able to search users via a search feature. This might be to affirm contact details or update details of the user upon acceptance of the new job.

- Account Creation Feature:

This will allow admins to create accounts for users (employees) or other admin users. This priveledge will only be granted to admins so as to prevent standard users from creating accounts. Admins will have to enter a few bare details about the user before account creation, such as: Name, Email, Department.

**(Strictly Nice To Have)**

- Training Opportunities Feature:

This feature will be accessible via the Training page and will allow all users to view upcoming training / upskilling opportunities they might be interested in. Admins will be responsible for adding the opportunities.

- Training Booking Feature:

Upon clicking the training opportunity, users will be able to register their interest for an event. Upon deletion of the listing, all accumulative data will be deleted too.

- Events Page Feature:

This feature will be viewable under the Events page and will show users company updates to keep them informed, conferences, and guest speaker sessions users can also register their interest for.


### Target Audience

### Tech Stack


### R2 - Dataflow Diagram

#### Sitemap
![Sitemap](docs/Sitemap.pdf)


### R3 - Application Architecture Diagram


### R4 - User Stories


### R5 - Wireframes


### R6 - Kanban Screenshots


