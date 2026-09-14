CraftCV — 3-Week Project
CraftCV is an online CV/Resume Builder.
The problem it solves is simple: creating a good-looking CV can be difficult. Users often struggle with formatting, arranging sections, maintaining consistent spacing, and creating a professional-looking PDF.
CraftCV removes that difficulty. Instead of designing a CV manually, the user simply enters their information into a structured form, and the application takes care of presenting it professionally.
The finished application should allow a user to:
Register → Login → Enter CV Information → See Live Preview → Choose a Template → Save → Download PDF
If the user leaves and comes back later:
Login Again → Retrieve Existing CV → Edit → Download Updated PDF
What the interns are actually building
This isn't just a frontend project where they create some forms. It is a small real-world full-stack application.
The frontend will provide the interface the user interacts with: registration/login screens, dashboard, CV editor, dynamic Education and Experience forms, template selection, live preview, validation, error messages and PDF download.
The backend will handle registration/login, authentication and authorization, CV data storage and retrieval, business logic, database communication and server-side PDF generation.
The database will store users and their CV information so that closing the browser doesn't cause users to lose their work.
The CV itself
A user should be able to provide information such as:

Personal details — name, email, phone, location, LinkedIn, etc.
Professional summary
Education
Work experience
Skills
Certifications, languages or other additional information
Education and Work Experience must support multiple entries.
For example, a user shouldn't be restricted to one job. They should be able to click Add Experience, create another entry, edit it and remove it if necessary.
Templates and PDF Generation
The team must create at least two visually different CV templates.
For example:
Template 1: Traditional single-column professional CV.
Template 2: Modern two-column CV with contact information and skills in a sidebar.
Changing templates must not change or delete the user's CV information. It only changes how that information is presented.
The PDF must be generated on the server, returned to the frontend and downloaded by the user.
What makes this a learning project
The purpose isn't only to produce CraftCV.
The interns should finish the three weeks understanding how the different pieces of a real application work together.
A frontend intern should understand concepts such as HTML/CSS, responsive layouts, JavaScript, components, forms, validation, state, events, asynchronous programming, APIs, HTTP, authentication, dynamic forms, live rendering, error handling and file downloads.
A backend intern should understand programming fundamentals, REST APIs, HTTP, CRUD, databases, relationships, authentication, authorization, password hashing, data validation, error handling, resource ownership, PDF generation and automated testing.
Everyone should gain experience with Git, GitHub, branches, pull requests, code reviews, merge conflicts, meaningful commits, debugging, testing, documentation and working as a development team.

How the 3 weeks should work
Week 1 — Build the Foundation
The team establishes the project structure, Git workflow and architecture. They work on authentication, database design, CV models, APIs and the initial frontend.
By the end of Week 1:
A user should be able to register, log in, enter basic CV information, save it and retrieve it.Week 2 — Build the Complete Product
Complete all CV sections, dynamic Education/Experience entries, live preview, two templates and PDF generation. Frontend and backend should be properly integrated.
By the end of Week 2:
The complete user journey should work, even if the application still needs polishing.Week 3 — Make It Production-Ready for the Demo
Week 3 should focus primarily on completing unfinished details, testing, security, validation, responsive design, PDF formatting, error handling, documentation and bug fixing.
The team should also test unusual situations such as very long work descriptions, missing fields, unauthorized requests and multiple Education/Experience entries.
By the end of Week 3:
CraftCV must be complete, tested and ready for demonstration.The final demonstration
The strongest way to determine whether the project is finished is to have the interns demonstrate the complete journey:
A new user registers and logs in. They enter their personal information, education, work experience and skills. They add multiple education/experience entries. As they type, they see their CV preview. They select Template 1 and download the PDF. They switch to Template 2 and download a differently designed PDF containing the same information. They log out, log back in and find their CV information still available.At the end, they should not only be able to show that CraftCV works. If you ask, “What happens from the moment I click Download PDF until the file reaches my computer?” or “How does the backend know this CV belongs to this user?”, the interns should be able to explain the flow.