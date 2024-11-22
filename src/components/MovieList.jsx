import { useState } from "react";

import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-modal";
import YouTube from "react-youtube";

const customStyles = {
  overlay: {
    position: "fixed",
    zIndex: 9999,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// setup youtube
const opts = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1550 },
    items: 7,
  },
  desktopTablet: {
    breakpoint: { max: 1550, min: 1280 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1280, min: 910 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 910, min: 0 },
    items: 3,
  },
};

const MovieList = ({ title, data }) => {
  // setup modal
  const [modalIsOpen, setModelIsOpen] = useState(false);

  const [trailerKey, setTrailerKey] = useState();

  const handleTrailer = async (id) => {
    setTrailerKey("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      // console.log(data);
      setTrailerKey(data.results[0].key);
      setModelIsOpen(true);
    } catch (error) {
      setModelIsOpen(false);
      console.log(error);
    }
  };

  return (
    <div className="text-white sm:p-10 sm:mb-10 p-3 mb-3">
      <h2 className="uppercase text-xl mb-4">{title}</h2>
      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {data && data.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              className="max-xl:w-[95%] w-[200px] h-auto group"
              onClick={() => handleTrailer(item.id)}
            >
              <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                <div className="top-0 left-0 w-full h-full bg-black/40">
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
      </Carousel>
      <Modal
        appElement={document.getElementById("root")}
        isOpen={modalIsOpen}
        onRequestClose={() => setModelIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <YouTube videoId={trailerKey} opts={opts} iframeClassName={'max-sm:w-full max-sm:h-500px md:w-[740px] md:h-[480px]'}/>
      </Modal>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default MovieList;
