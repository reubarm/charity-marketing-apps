import { styles } from "../theme/styles";
import { Logo } from "./logo";
import { Navigation } from "./navigation";

type Props = {
  app: string;
};

export const Header = (props: Props) => {
  const { app } = props;

  const textMap: {
    [key: string]: {
      text1: string;
      text2: string;
      theme: string;
      color1: string;
      color2: string;
    };
  } = {
    learning: {
      text1: "learning",
      text2: "gives",
      theme: "#6482AD",
      color1: "#6482AD",
      color2: "#7FA1C3",
    },
    playing: {
      text1: "playing",
      text2: "gives",
      theme: "#43b1bb",
      color1: "#fff",
      color2: "#eefeff",
    },
  };

  const { text1, text2, theme, color1, color2 } = textMap[app] || {
    text1: "",
    text2: "",
    theme: "",
    color1: "",
    color2: "",
  };

  return (
    <div className={styles.navigation} style={{ zIndex: 9 }}>
      <Logo
        text1={text1}
        text2={text2}
        color1={color1}
        color2={color2}
        themeColor={theme}
        app={app}
      />
      <Navigation app={app} color={theme} />
    </div>
  );
};
