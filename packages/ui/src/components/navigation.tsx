"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
  useTheme,
  Paper,
  Typography,
  Box,
} from "@mui/material";

import Diversity1Icon from "@mui/icons-material/Diversity1";
import StoryIcon from "@mui/icons-material/AutoStories";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { styles } from "@repo/ui";
import { getPrimaryColors } from "../theme/themeUtils";
import { Share } from "./share";

type Props = {
  app: string;
  color: string;
};

const links = [
  { label: "foundation", href: "/foundation", icon: <Diversity1Icon /> },
  { label: "donations", href: "/donations", icon: <FavoriteIcon /> },
];

const mobileLinks = [
  { label: "Play", href: "/", icon: <Diversity1Icon /> },
  { label: "Foundation", href: "/foundation", icon: <StoryIcon /> },
  { label: "Donations", href: "/donations", icon: <FavoriteIcon /> },
];

export const Navigation = (props: Props) => {
  const { app, color } = props;

  const primaryColors = getPrimaryColors(app);

  const pathname = usePathname();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={styles.nav}>
      {!isSmallScreen ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          {links.map(({ href, label }) => (
            <Link key={label} href={href} passHref>
              <Typography
                sx={{
                  color: "inherit",
                  fontWeight: 500,
                  fontSize: "17px",
                  textDecoration: pathname === href ? "underline" : "none",
                  textUnderlinePosition: "under",
                  lineHeight: 2,
                  "&:hover": {
                    opacity: 0.7,
                  },
                }}
              >
                {label}
              </Typography>
            </Link>
          ))}
          <Share primaryColors={primaryColors} app={app} />
        </Box>
      ) : (
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: color,
            padding: 1,
            borderRadius: 0,
            backgroundImage: "none",
            boxShadow: "none",
          }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={pathname}
            sx={{ bgcolor: color, padding: 1, boxShadow: "none", }}
          >
            {mobileLinks.map(({ href, label, icon }) => (
              <BottomNavigationAction
                key={label}
                component={Link}
                href={href}
                label={label}
                value={href}
                icon={icon}
                sx={{
                  color: "#fff",
                  boxShadow: "none",
                  "&.Mui-selected": {
                    color: "#F5EDED",
                  },
                }}
              />
            ))}
          </BottomNavigation>
        </Paper>
      )}
    </div>
  );
};
