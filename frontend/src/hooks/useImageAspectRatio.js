import { useCallback } from 'react';

const useImageAspectRatio = () => {
  const handleImageLoad = useCallback((event, targetElement) => {
    const img = event.target;
    const isLandscape = img.naturalWidth > img.naturalHeight;
    
    if (targetElement) {
      targetElement.classList.toggle('landscape', isLandscape);
    }
  }, []);

  return { handleImageLoad };
};

export default useImageAspectRatio;