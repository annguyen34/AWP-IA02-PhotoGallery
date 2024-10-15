import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPhoto } from '../services/photo';
import Spinner from '../components/Spinner';

function PhotoDetail() {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // Fetch photo data from the API
  const fetchPhoto = async () => {
    const data = await getPhoto(id);
    setLoading(false);
    setPhoto(data.data);
  };

  // Fetch photo data when the component mounts
  useEffect(() => {
    fetchPhoto();
  }, [id]);

  // Show a spinner while loading
  if (loading) return <Spinner />;

  return (
    <div>
      <div className="container mx-auto p-4">
        {photo && (
          <>
            <img
              src={photo.urls.full}
              alt={photo.alt_description}
              className="w-full rounded-lg"
            />
            <h1 className="text-4xl font-bold mt-4">
              {photo.description || 'No Description'}
            </h1>
            <p className="text-xl mt-2">By {photo.user.name}</p>
            <p className="text-gray-600 mt-2">
              {photo.alt_description || 'No additional description available.'}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default PhotoDetail;
