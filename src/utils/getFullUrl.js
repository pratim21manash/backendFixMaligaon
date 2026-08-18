/**
 * Get the backend base URL (without /api)
 * For production: https://maligaonbackend-3.onrender.com
 * For development: http://localhost:5000
 */
export const getBackendUrl = () => {
  const baseUrl =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
  // Remove /api from the end
  return baseUrl.replace(/\/api$/, "");
};

/**
 * Get the full URL for a file
 * @param {string} path - The file path (e.g., /uploads/images/image.jpg)
 * @returns {string} - Full URL
 */
export const getFullFileUrl = (path) => {
  if (!path) return "";

  // If already absolute URL, return as is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Ensure path starts with /
  const filePath = path.startsWith("/") ? path : `/${path}`;

  return `${getBackendUrl()}${filePath}`;
};

export default { getBackendUrl, getFullFileUrl };
