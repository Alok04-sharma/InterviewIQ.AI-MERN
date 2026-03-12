🤖 InterviewIQ — AI Mock Interview Platform (MERN)
A full-stack AI-powered interview preparation platform that helps users practice mock interviews and improve their interview skills using AI-generated questions and feedback.
Users can sign up, log in using email or Google, start AI-based interview sessions, and unlock premium features through secure online payments.
This project demonstrates a complete full-stack architecture with authentication, REST APIs, payment integration, protected routes, and database management.

🔗 Project Overview
InterviewIQ is an AI-powered mock interview platform designed to help students and job seekers prepare for real interviews in an interactive and intelligent way.
Users can sign in using their Google account and receive initial interview credits. The platform analyzes the user’s uploaded resume and automatically identifies the candidate’s job role and relevant interview topics. Based on this analysis, the AI conducts a personalized interview session.
Before starting the interview, users can choose the type of interview they want to practice, such as HR interview or Technical interview.
During the interview session, the AI asks multiple questions related to the user's resume and selected role. Users can answer the questions either by typing or speaking in English.
After the interview is completed, the system generates a detailed performance analysis report, evaluating factors such as communication skills, confidence level, and overall interview performance. This report can also be downloaded as a PDF for future reference.
The platform follows a credit-based system, where each user receives initial credits after login. When the credits are exhausted, users can purchase additional credits through secure online payments integrated using Razorpay.
This project demonstrates a complete full-stack application with AI integration, authentication, resume analysis, interview simulation, payment gateway integration, and report generation.


✨ Key Features

Authentication
• Secure login using Google OAuth
• Real Google account authentication
• JWT-based session management

AI Resume Analysis
• Upload resume before interview
• AI analyzes resume content
• Automatically detects job role and interview domain

AI Mock Interview
• Choose interview type (HR / Technical)
• AI asks questions related to resume
• 5 dynamic interview questions per session
• Users can answer by voice or text

Interview Performance Analysis
After completing the interview, the system generates a detailed evaluation including:
• Confidence level
• Communication skills
• Answer quality
• Overall interview performance

PDF Report Generation
• Interview feedback available as downloadable PDF report
• Helps users track improvement over time
Credit-Based System
• Users receive 100 free interview credits after login
• Credits are used for interview sessions

Payments
When credits are exhausted, users can purchase additional credits using secure payments via
Razorpay.


UI / UX
• Responsive UI (mobile + desktop)
• Clean and modern interface
• Fast frontend using React + Vite

🧱 Tech Stack
Frontend
• React.js
• Vite
• Tailwind CSS
• Axios (API communication)

Backend
• Node.js
• Express.js
• REST API architecture

Database
• MongoDB
• Mongoose ODM

Authentication
• JWT Authentication
• Google OAuth


⚙️ How to Run Locally
1.⁠ ⁠Clone the Repository
Bash
Copy code
git clone https://github.com/Alok04-sharma/InterviewIQ.AI-MERN.git
cd InterviewIQ.AI-MERN

2.⁠ ⁠Backend Setup
Bash
Copy code
cd server
npm install
Create a .env file inside the server folder (see Environment Variables section below), then run:
Bash
Copy code
npm run dev
Backend will start on:
Copy code

http://localhost:8000

3.⁠ ⁠Frontend Setup
Open a new terminal:
Bash
Copy code
cd client
npm install
npm run dev
Frontend will run on:
Copy code

http://localhost:5173
Open the browser and the application should be working.


🔐 Environment Variables
This project uses environment variables to keep sensitive data secure.
The .env file is NOT uploaded to GitHub for security reasons.
Create a file:
Copy code

server/.env
Example format:
Environment
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
Frontend environment variables:
Copy code

client/.env
Example:
Environment
Copy code
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=your_key
VITE_GOOGLE_CLIENT_ID=your_google_client_id
🧪 API Architecture
The backend follows REST principles:
•⁠  ⁠GET → fetch interview sessions
•⁠  ⁠POST → create interview session
•⁠  ⁠POST → process payments
•⁠  ⁠PUT → update user data
•⁠  ⁠DELETE → remove session data
All database operations are handled through Mongoose models.


----------

👨‍💻 Author
Alok Sharma
Full Stack MERN Developer passionate about building AI-powered web applications.
