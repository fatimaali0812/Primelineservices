import { useState } from 'react';

interface ImageSource {
  srcSet: string;
  media?: string;
  type?: string;
}

interface OptimizedImageProps {
  src: string;
  alt: string;
  sources?: ImageSource[];
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

const OptimizedImage = ({
  src,
  alt,
  sources = [],
  className = '',
  loading = 'lazy',
  width,
  height,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <picture className={`relative block overflow-hidden ${className}`}>
      {sources.map((source, index) => (
        <source
          key={index}
          srcSet={source.srcSet}
          media={source.media}
          type={source.type}
        />
      ))}
      <img
        src={src}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${hasError ? 'bg-muted' : ''}`}
      />
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </picture>
  );
};

export default OptimizedImage;
