import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

// Create axios instance with dynamic base URL
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API service functions
export const apiService = {
  // Events
  getAllEvents: () => apiClient.get('/events/all'),
  getEvent: (id) => apiClient.get(`/events/${id}`),
  createEvent: (data) => apiClient.post('/events/create', data),
  updateEvent: (id, data) => apiClient.put(`/events/${id}`, data),
  deleteEvent: (id) => apiClient.delete(`/events/${id}`),

  // Projects
  getAllProjects: () => apiClient.get('/projects/all'),
  getProject: (id) => apiClient.get(`/projects/${id}`),
  createProject: (data) => apiClient.post('/projects/create', data),
  updateProject: (id, data) => apiClient.put(`/projects/${id}`, data),
  deleteProject: (id) => apiClient.delete(`/projects/${id}`),

  // Gallery
  getAllGallery: () => apiClient.get('/gallery/all'),
  getGalleryItem: (id) => apiClient.get(`/gallery/${id}`),
  createGalleryItem: (data) => apiClient.post('/gallery/create', data),
  updateGalleryItem: (id, data) => apiClient.put(`/gallery/${id}`, data),
  deleteGalleryItem: (id) => apiClient.delete(`/gallery/${id}`),

  // Testimonials
  getAllTestimonials: () => apiClient.get('/testimonials/all'),
  getTestimonial: (id) => apiClient.get(`/testimonials/${id}`),
  createTestimonial: (data) => apiClient.post('/testimonials/create', data),
  updateTestimonial: (id, data) => apiClient.put(`/testimonials/${id}`, data),
  deleteTestimonial: (id) => apiClient.delete(`/testimonials/${id}`),

  // Leadership
  getAllLeaders: () => apiClient.get('/leadership/all'),
  getLeader: (id) => apiClient.get(`/leadership/${id}`),
  createLeader: (data) => apiClient.post('/leadership/create', data),
  updateLeader: (id, data) => apiClient.put(`/leadership/${id}`, data),
  deleteLeader: (id) => apiClient.delete(`/leadership/${id}`),

  // Services
  getAllServices: () => apiClient.get('/services/all'),
  getService: (id) => apiClient.get(`/services/${id}`),
  createService: (data) => apiClient.post('/services/create', data),
  updateService: (id, data) => apiClient.put(`/services/${id}`, data),
  deleteService: (id) => apiClient.delete(`/services/${id}`),

  // Contact
  getAllContacts: () => apiClient.get('/contact/all'),
  getContact: (id) => apiClient.get(`/contact/${id}`),
  createContact: (data) => apiClient.post('/contact/create', data),
  updateContact: (id, data) => apiClient.put(`/contact/${id}`, data),
  deleteContact: (id) => apiClient.delete(`/contact/${id}`),

  // Admin/Users
  loginUser: (data) => apiClient.post('/dev/admin/login', data),
  createUser: (data) => apiClient.post('/dev/admin/create', data),
  getAllUsers: () => apiClient.get('/dev/admin/all'),
  updateUser: (id, data) => apiClient.put(`/dev/admin/${id}`, data),
  deleteUser: (id) => apiClient.delete(`/dev/admin/${id}`),
};

export default apiClient;