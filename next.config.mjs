/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  
  webpack: (config, { isServer }) => {
    // تجاهل جميع ملفات الأيقونات في app directory
    config.module.rules.push({
      test: /app[/\\](favicon\.ico|icon\.(ico|png|svg))$/,
      loader: 'ignore-loader'
    });
    
    // إضافة تجاهل تام للملفات
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'app/favicon.ico': false,
      'app/icon.ico': false,
      'app/icon.png': false,
      'app/icon.svg': false,
    };
    
    // تجاهل warnings
    config.ignoreWarnings = [
      /next-metadata-image-loader/,
      /Image import.*is not a valid image file/,
      { module: /app[/\\](favicon|icon)\.(ico|png|svg)$/ },
    ];
    
    return config;
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  images: {
    unoptimized: true,
  },
}

export default nextConfig
