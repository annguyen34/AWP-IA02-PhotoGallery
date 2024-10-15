import { useEffect, useState } from 'react';
import Photo from '../components/Photo';
import { getPhotos } from '../services/photo';
import Spinner from '../components/Spinner';

const PAGE_SIZE = 10;

function Home() {
  // State to store the photos
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  // State to store the loading state
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Fetch photos from the API
  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const response = await getPhotos(page, PAGE_SIZE);
        setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
        setHasMore(response.data.length > 0);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchPhotos();
  }, [page]);

  // Infinite scroll
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 1
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div className="container mx-auto p-4 ">
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Photo Gallery
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="border rounded overflow-hidden">
              <Photo data={photo} />
            </div>
          ))}
        </div>
      </div>
      {/* Show the spinner when loading */}
      {loading && <Spinner />}
      {/* Handle cases where there are no more photos to load (end of list)  */}
      {!hasMore && (
        <p className="text-center text-gray-500 mt-4">No more photos to load</p>
      )}
    </div>
  );
}

export default Home;
