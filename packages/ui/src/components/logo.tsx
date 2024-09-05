"use client";

import Link from "next/link";

import { Heart } from "../icons/heart";
import { styles } from "../theme/styles";
import { useMediaQuery, useTheme } from "@mui/material";

type Props = {
  text1?: string;
  text2?: string;
  color1?: string;
  color2?: string;
  themeColor: string;
  app: string;
};

export const Logo = (props: Props) => {
  let { text1, text2, color1, color2, themeColor, app } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const logoStyle = {
    display: "flex",
    fontWeight: "600",
    fontSize: "2.3em",
    letterSpacing: "-1.2px",
    marginTop: "auto",
    marginBottom: "auto",
    color: isMobile ? "#fff" : color1,
  };

  const iconStyle = {
    display: "flex",
    marginLeft: "2px",
    marginRight: "-2px",
    paddingTop: "3px",
    color: themeColor,
  };

  const faded = {
    color: isMobile ? "#fff" : color2,
  };

  return (
    <div className={styles.logo} style={{backgroundColor: isMobile ? themeColor : ""}}>
      <Link href="/">
        <span style={logoStyle}>
          {text1}
          <span style={iconStyle}><Heart app={app} /></span>
          <span style={faded}>{text2}</span>
        </span>
      </Link>
    </div>
  );
};
