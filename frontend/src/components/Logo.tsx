import cx from "classix";

interface Props {
  size?: LogoSize;
}

export enum LogoSize {
  NORMAL,
  LARGE,
}

const SIZE_MAP: Record<LogoSize, string> = {
  [LogoSize.NORMAL]: `
  text-xl
  `,
  [LogoSize.LARGE]: `
  text-4xl
  `,
};

function Logo(props: Props) {
  return (
    <h1
      className={cx(
        SIZE_MAP[props.size || LogoSize.NORMAL],
        "text-white font-bold logo-glow "
      )}
    >
      Wishlist
    </h1>
  );
}

export default Logo;
