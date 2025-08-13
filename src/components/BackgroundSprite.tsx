import backgroundSprite from "../assets/hero/background.png";

const BackgroundSprite = () => {
  return (
    <img src={backgroundSprite} alt="background Sprite" className="absolute bottom-0 right-0 md:w-[600px] md:h-[600px] w-[300px] h-[300px] -z-10" />
  );
};

export default BackgroundSprite;
