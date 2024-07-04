import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardInterface {
  title: string;
  subtitle: string;
  text: string;
  image: string;
  date: string;
  link: string;
  thumbnail?: boolean;
}

const MyCard: React.FC<CardInterface> = (props) => {
  return (
    <>
      {props.thumbnail ? (
        <div className="flex md:flex-col gap-2 p-3 shadow-md rounded-md md:max-w-md bg-white w-full">
          <div className="overflow-hidden rounded-md w-fit h-full md:w-auto md:h-auto md:aspect-w-4 md:aspect-h-3">
            <img src={props.image} className="object-cover" alt="" />
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-col md:py-2 mt-1 border-t-1 border-zinc-100/50 rounded-b-md">
              <h3 className="text-gray-500 text-xs font-bold tracking-wide">
                {props.subtitle}
              </h3>
              <h2 className="text-black text-lg font-bold tracking-wider">
                {props.title}
              </h2>
              <p className="text-md mt-2 hidden md:block tracking-wide">
                {props.text}
              </p>
            </div>
            <div className="flex mt-1 justify-between pt-1 items-center gap-1">
              <p className="text-sm font-semibold text-gray-400 tracking-wider">
                {props.date}
              </p>
              <button className="hidden md:block text-gray-400 hover:text-gray-900 z-10">
                <FontAwesomeIcon icon={faBookmark} size="lg" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 p-3 shadow-md rounded-md max-w-md bg-white">
          <a href={props.link}>
            <div className="overflow-hidden rounded-md aspect-w-4 aspect-h-3">
              <img src={props.image} className="object-cover " alt="" />
            </div>
            <div className="flex flex-col py-2 mt-1 border-t-1 border-zinc-100/50 rounded-b-md">
              <h3 className="text-gray-500 text-xs font-bold tracking-wide">
                {props.subtitle}
              </h3>
              <h2 className="text-black text-lg font-bold tracking-wider">
                {props.title}
              </h2>
              <p className="text-md mt-2 tracking-wide">{props.text}</p>
            </div>
          </a>
          <div className="flex mt-1 justify-between pt-1 items-center gap-1">
            <p className="text-sm font-semibold text-gray-400 tracking-wider">
              {props.date}
            </p>
            <button className="text-gray-400 hover:text-gray-900 z-10">
              <FontAwesomeIcon icon={faBookmark} size="lg" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MyCard;
