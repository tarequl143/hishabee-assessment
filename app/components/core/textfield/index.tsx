import { HTMLInputTypeAttribute } from "react";

type Props = any & {
  type: HTMLInputTypeAttribute | undefined;
  placeHolder?: string;
};

const TextField = ({
  type,
  placeHolder = "type",
  css = "",
  fullwidth,
  children,
}: Props) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className={`${css} outline-none h-[42px] px-[20px] rounded text-sm focus:outline border-[1px] border-dark_primary text-dark_primary ${
        fullwidth ? "w-full" : "w-max"
      }`}
    />
  );
};

export default TextField;
