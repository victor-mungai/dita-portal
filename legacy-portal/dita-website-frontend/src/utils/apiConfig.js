// Dynamic API base URL based on current domain
const getApiBaseUrl = () => {
  const currentDomain = window.location.hostname;
  
  // If running locally
  if (currentDomain === 'localhost' || currentDomain === '127.0.0.1') {
    return 'http://localhost:5000/api/v1';
  }
  
  // For production - use current domain
  const protocol = window.location.protocol;
  return `${protocol}//${currentDomain}/api/v1`;
};

export const API_BASE_URL = getApiBaseUrl();