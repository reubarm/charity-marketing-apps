import { styles } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <iframe
      title="Happy Bird"
      src="https://happybird.vercel.app/happybird/index.html"
      className={styles.happyBird}
    />
  );
}
