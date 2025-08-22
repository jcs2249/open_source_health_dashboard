# Open Source Health Dashboard JVN Communications - Joseph Saponaro

A lightweight web application that checks a public GitHub repository for open-source best practices. Looks for items:

1. LICENSE  
2. README.md  
3. `.gitignore`  
4. A recent commit (within 6 months)  
5. GitHub Actions workflows  

## Usage

Open `index.html` directly in your browser, or run with Docker (intended use):

Open bash
    Type the command: docker-compose up --build
        Then, in your browser visit http://localhost:8080

# Tech Stack

1. HTML,CSS,JavaScript
2. GitHub REST API
3. Docker/Docker Compose
4. Husky + HTMLHint for linting 
5. GitHub Actions for CI

Notes: When creating this project I had to familiarize myself with Docker. The desktop documentation was especially helpful when setting up a multi-stage build and running Nginx. I chose HTML, CSS, and JavaScript for the UI because I have solid experience with them and could call the GitHub API directly. These technologies also allowed me to quickly build a clean, functional interface that meets the project requirements.
