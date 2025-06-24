// Enhanced Image Loader for Static Export with Path Fixing
export default function myImageLoader({ src, width, quality }) {
  // Normalize the source path
  let normalizedSrc = src;
  
  // Remove leading slash if present
  if (normalizedSrc.startsWith('/')) {
    normalizedSrc = normalizedSrc.slice(1);
  }
  
  // Ensure proper path structure for static export
  if (normalizedSrc.startsWith('assets/')) {
    return `./${normalizedSrc}`;
  }
  
  // Handle _next static paths
  if (normalizedSrc.startsWith('_next/')) {
    return `./${normalizedSrc}`;
  }
  
  // Handle any other paths
  if (!normalizedSrc.startsWith('./')) {
    return `./${normalizedSrc}`;
  }
  
  return normalizedSrc;
}
