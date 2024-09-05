import { getPrimaryColors } from "../theme/themeUtils";

const iconSize = "16px";

type Props = {
  app: string;
};

export const Heart = (props: Props) => {
  const { app } = props;
  const primaryColors = getPrimaryColors(app);
  return (
    <div style={{ width: iconSize, height: iconSize }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
      >
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={primaryColors.light} />
            <stop offset="100%" stopColor={primaryColors.light} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={primaryColors.light} />
            <stop offset="100%" stopColor={primaryColors.light} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={primaryColors.light} />
            <stop offset="100%" stopColor={primaryColors.light} />
          </linearGradient>
        </defs>
        <g
          fill={primaryColors.light}
          fillRule="evenodd"
          stroke="none"
          strokeWidth="1"
        >
          <path
            fill="url(#BG1)"
            d="M192.478 63.0263C177.419 78.0115 166.937 96.9741 162.258 117.697C157.578 138.42 158.895 160.047 166.054 180.049C142.017 171.16 115.658 170.792 91.3819 179.006C67.1062 187.22 46.3856 203.518 32.684 225.175C18.9824 246.832 13.1302 272.537 16.1057 297.991C19.0812 323.445 30.7041 347.107 49.0314 365.02C132.08 448.068 392.549 406.544 392.549 406.544C392.549 406.544 434.074 146.075 351.025 63.0263C330.001 42.0017 301.485 30.1902 271.752 30.1902C242.019 30.1902 213.503 42.0016 192.478 63.0263V63.0263Z"
          />
        </g>
      </svg>
    </div>
  );
};
