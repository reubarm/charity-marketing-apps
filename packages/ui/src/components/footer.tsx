"use client";

import { styles } from "../theme/styles";
import { Divider, Typography, useMediaQuery, useTheme } from "@mui/material";

type Props = {
  app: string;
};

export const Footer = (props: Props) => {
  const { app } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    !isMobile && (
      <div className={styles.footer}>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body1">
          <a href="/">{app}</a> is an open source project, made with &hearts; by{" "}
          <a href="https://reubarm.com/" target="_blank">
            reuben armstrong
          </a>
          <br />
          and powered by this advert ^ from{" "}
          <a href="https://charity.marketing/" target="_blank">
            charity.marketing
          </a>
        </Typography>
      </div>
    )
  );
};
