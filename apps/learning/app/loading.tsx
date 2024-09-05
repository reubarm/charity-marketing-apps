import Image from "next/image";

export default function Loading(): JSX.Element {
  return (
    <Image
      src="/loading.gif"
      height="48"
      width="48"
      alt="loading"
      style={{ opacity: 0.7 }}
    />
  );
}
