import bigCircle from "../../assets/hero/circle.png";
import x from "../../assets/hero/x.png";
import smallX from "../../assets/hero/smallX.png";
import smallCircle from "../../assets/hero/smallCircle.png";
import line from "../../assets/hero/line.png";
import x2 from "../../assets/hero/x2.png";
import photoline from "../../assets/hero/photoline.png";
const ShapeSprites = () => {
  return (
    <>
      <img
        className="absolute -z-5 md:top-[15%]
                lg:left-[30%] lg:w-[90px] 
                md:left-[30%] md:w-[70px]
                -top-[10%] right-[20%] w-[50px]"
        src={bigCircle}
        alt="circle"
      />
      <img
        className="absolute -z-5  md:top-[25%] 
                lg:left-[15%] lg:w-[60px]  
                md:left-[10%] md:w-[40px]
                top-[30%] right-[5%] w-[50px]"
        src={x}
        alt="x"
      />
      <img
        className="absolute -z-5  
                lg:right-[50%] lg:top-[27%] lg:w-[40px]
                md:left-[40%]  md:top-[60%] md:w-[25px]
                w-[20px] top-[17%] left-[10%]"
        src={smallX}
        alt="smallX"
      />
      <img
        className="absolute -z-5  md:top-[60%] 
                lg:left-[25%] lg:w-[25px]  
                md:left-[10%]
                top-[70%] left-[5%] w-[20px]"
        src={smallCircle}
        alt="smallCIrcle"
      />
      <img
        className="absolute -z-5 md:top-[53%]
                lg:left-[30%] lg:w-[200px] 
                md:left-[25%] md:w-[170px]
                top-[10%] right-[30%] w-[100px]"
        src={line}
        alt="line"
      />
      <img
        className="absolute z-5  lg:block
                lg:right-[13%] lg:-top-[5%] lg:w-[80px]
                hidden"
        src={x2}
        alt="x2"
      />
      <img
        className="absolute z-5  lg:block
                lg:right-[33%] lg:bottom-[-15%] lg:w-[200px]
                hidden"
        src={photoline}
        alt="photoline"
      />
    </>
  );
};

export default ShapeSprites;
