"use client";

import { useState } from "react";
import { Box, Button, Collapse } from "@mui/material";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { styles } from "../theme/styles";

type Props = {
  primaryColors: {
    main: string;
  };
  app: string;
};

export const Share = (props: Props) => {
  const { primaryColors, app } = props;
  const [showShareButtons, setShowShareButtons] = useState(false);

  const currentUrl =
    app === "learning" ? "https://learning.gives" : "https://playing.gives";

  const handleShareClick = () => {
    setShowShareButtons(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Collapse in={!showShareButtons}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleShareClick}
          className={styles.shareButton}
        >
          share
        </Button>
      </Collapse>
      <Collapse in={showShareButtons}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mt: 1,
          }}
        >
          <FacebookShareButton url={currentUrl}>
            <FacebookIcon
              size={32}
              round
              bgStyle={{ fill: primaryColors.main }}
            />
          </FacebookShareButton>
          <LinkedinShareButton url={currentUrl}>
            <LinkedinIcon
              size={32}
              round
              bgStyle={{ fill: primaryColors.main }}
            />
          </LinkedinShareButton>
          <TwitterShareButton url={currentUrl}>
            <TwitterIcon
              size={32}
              round
              bgStyle={{ fill: primaryColors.main }}
            />
          </TwitterShareButton>
          <WhatsappShareButton url={currentUrl}>
            <WhatsappIcon
              size={32}
              round
              bgStyle={{ fill: primaryColors.main }}
            />
          </WhatsappShareButton>
        </Box>
      </Collapse>
    </Box>
  );
};
