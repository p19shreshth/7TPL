# API Documentation for 7TPL

## Overview
This document provides an overview of the API endpoints available in the 7TPL application. The API is designed to facilitate user registration, project management, and AI-driven research functionalities.

## Base URL
The base URL for all API endpoints is:
```
http://localhost:5000/api
```

## Endpoints

### User Registration
- **Endpoint:** `/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string"
  }
  ```
- **Response:**
  - **201 Created:** User successfully registered.
  - **400 Bad Request:** Validation errors.

### User Login
- **Endpoint:** `/login`
- **Method:** `POST`
- **Description:** Authenticates a user.
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  - **200 OK:** Authentication successful.
  - **401 Unauthorized:** Invalid credentials.

### Create Project
- **Endpoint:** `/projects`
- **Method:** `POST`
- **Description:** Creates a new research project.
- **Request Body:**
  ```json
  {
    "title": "string",
    "description": "string",
    "topics": ["string"]
  }
  ```
- **Response:**
  - **201 Created:** Project successfully created.
  - **400 Bad Request:** Validation errors.

### List Projects
- **Endpoint:** `/projects`
- **Method:** `GET`
- **Description:** Retrieves a list of all projects for the authenticated user.
- **Response:**
  - **200 OK:** Returns a list of projects.
  - **401 Unauthorized:** User not authenticated.

### Search
- **Endpoint:** `/search`
- **Method:** `POST`
- **Description:** Processes a search query and returns a summary with citations.
- **Request Body:**
  ```json
  {
    "query": "string"
  }
  ```
- **Response:**
  - **200 OK:** Returns a summary and dummy citations.
  - **400 Bad Request:** Validation errors.

## Error Handling
All API responses will include an appropriate HTTP status code and a message detailing the error when applicable.

## Conclusion
This API documentation outlines the key endpoints for the 7TPL application, enabling developers to integrate and utilize the backend functionalities effectively. For further details, refer to the source code and implementation in the backend directory.