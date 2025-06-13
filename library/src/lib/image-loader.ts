export default function imageLoader({ src }: { src: string }) {
  // For production builds with basePath, prepend the basePath
  if (process.env.NODE_ENV === 'production') {
    return `/branding-design-tokens${src}`;
  }
  
  // For development, use the original src
  return src;
}