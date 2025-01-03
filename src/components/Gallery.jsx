/* eslint-disable react/prop-types */
import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowLeft, Loader } from "lucide-react";
import { useLocation } from "react-router-dom";
import Header2 from "./Header2";
import MobileNav from "./MobileNav";

const Gallery = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "mining";
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageData, setImageData] = useState([]);
  const [columns, setColumns] = useState([[], [], []]);
  const loader = useRef(null);

  const PEXELS_API = "https://api.pexels.com/v1";
  const API_KEY = "mO2nhmyGs04O0wfP6YOIfe5UfTY98yaNmXTW1eNM7kR1hnCJPdXBhFSl";

  const fetchImages = async (pageNum) => {
    try {
      const response = await fetch(
        `${PEXELS_API}/search?query=${query}&per_page=30&page=${pageNum}`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const data = await response.json();

      if (!data.photos || data.photos.length === 0) {
        setHasMore(false);
        return [];
      }

      return data.photos.map((photo) => ({
        id: photo.id,
        src: photo.src.large,
        alt: photo.alt || photo.photographer,
        url: photo.src.large,
        width: photo.width,
        height: photo.height,
        aspect: photo.height / photo.width,
      }));
    } catch (error) {
      console.error("Error fetching images:", error);
      return [];
    }
  };

  const distributeImages = (images) => {
    const columnCount = window.innerWidth >= 1024 ? 3 : 2;
    const newColumns = Array.from({ length: columnCount }, () => []);
    let heights = Array(columnCount).fill(0);

    images.forEach((image) => {
      const shortestColumn = heights.indexOf(Math.min(...heights));
      newColumns[shortestColumn].push(image);
      heights[shortestColumn] += image.aspect;
    });

    setColumns(newColumns);
  };

  // Handle intersection observer for infinite scroll
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isLoading && hasMore) {
        setPage((prev) => prev + 1);
      }
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, [handleObserver]);

  useEffect(() => {
    const loadMoreImages = async () => {
      if (!hasMore || isLoading) return;

      setIsLoading(true);
      const newImages = await fetchImages(page);

      if (newImages.length > 0) {
        setImageData((prev) => [...prev, ...newImages]);
        distributeImages([...imageData, ...newImages]);
      }

      setIsLoading(false);
    };

    loadMoreImages();
  }, [page]);

  useEffect(() => {
    const handleResize = () => {
      distributeImages(imageData);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imageData]);

  const ImageCard = ({ image }) => {
    return (
      <div
        className="relative group cursor-pointer overflow-hidden bg-gray-900 mb-4"
        onClick={() => setSelectedImage(image)}
      >
        <div className="relative">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            style={{
              aspectRatio: `${image.width} / ${image.height}`,
            }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-sm font-light">{image.alt}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Gallery Grid */}
      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="flex gap-4">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex-1">
              {column.map((image, index) => (
                <ImageCard key={index} image={image} />
              ))}
            </div>
          ))}
        </div>

        {/* Loading Indicator */}
        <div ref={loader} className="flex justify-center py-8">
          {isLoading && (
            <div className="flex items-center space-x-2">
              <Loader className="animate-spin" size={24} />
              <span className="text-gray-600">
                {imageData.length <= 0
                  ? "Loading images"
                  : "Loading more images..."}
              </span>
            </div>
          )}
          {!hasMore && !isLoading && imageData.length > 0 && (
            <p className="text-gray-600">No more images to load</p>
          )}
        </div>
      </div>

      {/* Header */}
      <Header2 setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-7xl max-h-[90vh] w-full h-full p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <ArrowLeft className="transform rotate-45" size={24} />
          </button>
        </div>
      )}

      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default Gallery;
