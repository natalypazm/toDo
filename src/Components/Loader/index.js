import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={780}
    height={300}
    viewBox="0 0 780 300"
    backgroundColor="#fff"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="10" rx="5" ry="5" width="100%" height="60" />
    <rect x="0" y="85" rx="5" ry="5" width="100%" height="60" />
    <rect x="0" y="160" rx="5" ry="5" width="100%" height="60" />
    <rect x="0" y="235" rx="5" ry="5" width="100%" height="60" />
  </ContentLoader>
)

export {MyLoader}