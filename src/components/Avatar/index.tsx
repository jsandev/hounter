import React from "react";
import Image from "next/image";
import classNames from "classnames";

interface IProps {
  src: string;
  isMini?: boolean;
  className?: string;
  bordered?: boolean;
}
export const Avatar: React.FC<IProps> = ({ src, isMini, bordered = false, className }) => {
  return (
    <div
      className={classNames(
        "rounded-[50%] overflow-hidden bg-[#ddd]",
        { "w-[2.5rem] h-[2.5rem]": isMini },
        { "w-[3.5rem] h-[3.5rem]": !isMini },
        { "border-white border-[0.1875rem]": bordered },

        className
      )}
    >
      <Image width={56} height={56} src={src} objectFit="cover" objectPosition="center" />
    </div>
  );
};
