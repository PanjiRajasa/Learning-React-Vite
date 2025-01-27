import { useState } from "react";

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let pictureClass = "picture ";
  let backgroundCLass = "background ";

  if (isActive) {
    pictureClass += "background--active";
  } else {
    backgroundCLass += "background--active";
  }

  return (
    <div onClick={() => setIsActive(false)} className={backgroundCLass}>
      <img
        className={pictureClass}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
      />
    </div>
  );
}