import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  console.log("going up!");
  useEffect(() => {
    const container = document.getElementById("scroll-container");
    container?.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
