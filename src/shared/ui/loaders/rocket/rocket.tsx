import cx from "clsx";

import rocketGif from "./images/rocket.gif";

export interface IRocketLoader {
  fullWidth?: number;
}

export const RocketLoader = ({ fullWidth }: IRocketLoader) => {
  return (
    <div
      className={cx(
        "w-100 h-100 flex justify-center items-center overflow-hidden",
        { "100vh 100vw": fullWidth },
      )}
    >
      <img src={rocketGif} alt="loading..." />
    </div>
  );
};
