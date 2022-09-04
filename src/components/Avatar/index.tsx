import React from "react";
import Image from "next/image";
import classNames from "classnames";

interface IProps {
  src: string;
  isMini?: boolean;
  className?: string;
}
export const Avatar: React.FC<IProps> = ({ src, isMini, className }) => {
  return (
    <div
      className={classNames(
        "w-[3.5rem] h-[3.5rem] border-[0.1875rem] border-white rounded-[50%] overflow-hidden bg-[#ddd]",
        className
      )}
    >
      <Image width={56} height={56} src={src} objectFit="cover" objectPosition="center" />
    </div>
  );
};
