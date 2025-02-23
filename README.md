# 7TPL - AI Research Assistant Web Application

## Project Overview
7TPL is a modular, AI-driven research companion designed to assist academic researchers and white-collar professionals in conducting high-quality research. The application focuses on automated summarization, citation generation, and integrated analysis, ensuring a user-centric experience.

## Key Principles
- **Modularity**: Each phase of the application is deployable independently.
- **Extensibility**: New features can be added without disrupting existing functionality.
- **Rollback Capability**: Versioning is maintained to allow reversion to previous phases if necessary.
- **User-Centric Design**: The interface is minimalist, prioritizing usability for non-technical users.

## Technology Stack
- **Frontend**: React.js
- **Backend**: Flask
- **Database**: PostgreSQL
- **AI Integration**: Hugging Face Transformers
- **Infrastructure**: Docker for containerization, Git for version control, CI/CD pipeline setup.

## Project Structure
The project is organized into the following directories:
- **backend**: Contains the Flask application, models, routes, and AI integration.
- **frontend**: Contains the React application, components, and styles.
- **docs**: Documentation for API endpoints and user guides.

## Initial Setup
1. Clone the repository:
   ```
   git clone https://github.com/p19shreshth/7TPL
   cd 7TPL
   ```

2. Set up the backend:
   - Navigate to the `backend` directory.
   - Create a virtual environment and activate it:
     ```
     python -m venv venv
     source venv/bin/activate  # On Windows use `venv\Scripts\activate`
     ```
   - Install dependencies:
     ```
     pip install -r requirements.txt
     ```

3. Set up the database:
   - Ensure PostgreSQL is installed and running.
   - Create a database for the application.

4. Run the backend:
   ```
   python run.py
   ```

5. Set up the frontend:
   - Navigate to the `frontend` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Start the React application:
     ```
     npm start
     ```

## Usage
- Access the application at `http://localhost:3000`.
- Register a new account and complete the onboarding questionnaire.
- Create and manage research projects, perform searches, and view AI-generated summaries with citations.

## Testing
- Unit tests for the backend can be run using:
  ```
  pytest backend/tests
  ```

## Documentation
- API documentation is available in the `docs/API.md` file.
- A user guide is provided in the `docs/UserGuide.md` file.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.