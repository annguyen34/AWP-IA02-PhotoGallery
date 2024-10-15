import { Link } from 'react-router-dom';

function Photo({ data }) {
  return (
    <div>
      <Link
        to={`/photos/${data.id}`}
        className="border-4 rounded-lg hover:scale-110 hover:border-green-400 duration-150 cursor-pointer"
      >
        <img src={data.urls.small} alt="" />
        <div>
          <span className="font-bold">{data.user.name}</span>
        </div>
      </Link>
    </div>
  );
}

export default Photo;
