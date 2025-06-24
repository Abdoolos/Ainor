/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // إعدادات محسّنة للتصدير الثابت
  distDir: '.next',
  generateEtags: false,
  poweredByHeader: false,
  
  // تحسين webpack للأصول
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // إعدادات fallback للتصدير الثابت
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
      crypto: false,
      stream: false,
      http: false,
      https: false,
      zlib: false,
      url: false,
      util: false
    };

    // تحسين معالجة الأصول مع مسارات ثابتة
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|ico|webp)$/i,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: './assets/imgs/',
          outputPath: 'static/media/',
          name: '[name].[ext]'
        }
      }
    });

    // تحسين معالجة الخطوط
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: './assets/fonts/',
          outputPath: 'static/fonts/',
          name: '[name].[ext]'
        }
      }
    });

    // تحسين CSS
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    });

    return config;
  },
  
  // إعدادات تجريبية للأداء
  experimental: {
    forceSwcTransforms: true,
    optimizePackageImports: ['react', 'react-dom'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // تحسين الضغط
  compress: true,
  
  // إعدادات الردود
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },

  // إعدادات إعادة التوجيه
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // متغيرات البيئة
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
    NEXT_PUBLIC_ASSET_PREFIX: '',
    EXPORT_MODE: 'true'
  }
}

export default nextConfig
