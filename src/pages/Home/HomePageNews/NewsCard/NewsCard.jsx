import PropTypes from "prop-types";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { details } = news;
  return (
    <div>
      <div
        className="card-wrap rounded-md overflow-hidden mb-[30px] border border-[#F3F3F3]
      "
      >
        <div className="author-info flex justify-between p-4 bg-[#F3F3F3]">
          <div className="author flex gap-4">
            <div className="author-img w-10 h-10 rounded-full overflow-hidden">
              <img src={news.author.img} alt="" />
            </div>
            <div>
              <h1 className="font-bold">{news.author.name}</h1>
              <p>{news.author.published_date}</p>
            </div>
          </div>
          <div className="share">
            <p className="share-icon flex gap-1">
              <a href="#">
                <CiBookmark />
              </a>
              <a href="#">
                <CiShare2 />
              </a>
            </p>
          </div>
        </div>
        <div className="news-body p-5 space-y-5">
          <h2 className="text-xl font-bold">{news.title}</h2>
          <img src={news.image_url} alt="" />
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link
                to={`/news/${news._id}`}
                className="text-[#FF8C47] block mt-2"
              >
                Read more ..
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}

          <hr />
          <div className="rating-views flex justify-between">
            <p>{news.rating.number}</p>
            <p className="flex items-center gap-2">
              <FaRegEye />
              <span>{news.total_view}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
