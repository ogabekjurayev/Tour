import React, { useState, useEffect } from "react";
import ResCollects from "./CollectsMoments";
import MediaCollect from "./MobilniCollect";

const ResponsiveComponent: React.FC = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 435px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 435px)");

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return <>{isMobile ? <MediaCollect /> : <ResCollects />}</>;
};
export default ResponsiveComponent;
