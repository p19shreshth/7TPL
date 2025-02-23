import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

// User Registration
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// User Login
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Create New Project
export const createProject = async (projectData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/projects`, projectData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Get User Projects
export const getUserProjects = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/projects`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Search Query
export const searchQuery = async (query) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search`, { params: { query } });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};