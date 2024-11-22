import IconRatingHalf from "../../public/rating.png";
import IconRating from "../../public/star.png";
import ImageBanner from "../../public/poster.webp";
import IconPlay from "../../public/play-button.png";

const Banner = () => {
    return (
        <div className="bg-gradient-to-t">
            <div className="w-full xl:h-[700px] bg-banner bg-center bg-no-repeat bg-cover relative">
                <div className="w-full h-full md:flex items-center justify-center md:space-x-[30px] p-4 sm:p-12 relative z-1">
                    <div className="space-y-5 md:w-[40%]">
                        <button className="text-white bg-gradient-to-r from-red-600 to-white py-2 px-5">TV Show</button>
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-white text-3xl">ARCANE Season Two: Here’s Everything You Need to Know</h2>
                            <div className="flex items-center space-x-3">
                                <img src={IconRating} alt="rating" className="w-8 h-8"></img>
                                <img src={IconRating} alt="rating" className="w-8 h-8"></img>
                                <img src={IconRating} alt="rating" className="w-8 h-8"></img>
                                <img src={IconRating} alt="rating" className="w-8 h-8"></img>
                                <img src={IconRatingHalf} alt="rating" className="w-8 h-8"></img>
                            </div>
                            <div className="flex items-center space-x-3">
                                <p className="text-white max-sm:truncate">Act I and Act II of Season Two are now streaming, and Act III, arriving on Nov. 23, will be the final chapter of ARCANE. According to co-creator Christian Linke, it’s been a long time coming. “ARCANE is just the beginning of our larger storytelling journey and partnership with the wonderful animation studio that is Fortiche Production,” said Linke during a League Dev Update. “From the very beginning, since we started working on this project, we had a very specific ending in mind, which means the story of ARCANE wraps up with this second season. But ARCANE is just the first of many stories that we want to tell in Runeterra.”</p>
                            </div>
                            <div className="sm:flex sm:space-x-3">
                                <button className="max-md:w-full py-2 px-5 text-black bg-white font-bold text-sm">Chi tiết</button>
                                <button className="max-md:w-full max-sm:mt-2 py-2 px-5 text-white bg-red-600 font-bold text-sm">Xem phim</button>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-5 md:w-[60%] max-md:mt-3 flex justify-center">
                        <div className="w-full md:w-[400px] relative group cursor-pointer">
                            <img src={ImageBanner} alt="image-banner" className="w-full h-full object-cover" />
                            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                <img src={IconPlay} alt="play" className="w-16 h-16 z-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;