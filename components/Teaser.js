const Teaser = ({ blok }) => {
  const resizedImage = function (imageUrl) {
    if (typeof imageUrl !== "undefined") {
      return imageUrl.filename.replace(
        "//a.storyblok.com",
        "//img2.storyblok.com/"
      );
    }
    return null;
  };
  return (
    <div className="py-10">
      <div className="relative">
        <img src={resizedImage(blok.hero)} className="pb-10 h-auto w-full" />
        <h2 className="font-serif text-3xl text-center absolute top-0 left-0 text-white">
          {blok.headline}
        </h2>
      </div>
    </div>
  );
};

export default Teaser;
