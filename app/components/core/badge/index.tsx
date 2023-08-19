import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  css?: string;
  count?: number;
  onClick?: () => void;
  name?: string;
};

const Badge = ({
  css,
  count,
  name = "badge-count",
  children,
  ...rest
}: Props) => {
  return (
    <div
      className={`${css} h-[42px] flex items-center px-3 rounded bg-[#F9FAFB] border-[1px] border-[E9E9E9] cursor-pointer hover:bg-primary/10 relative`}
      data-testid="badge"
      {...rest}
    >
      {children}
      {!!count && (
        <div className="w-max bg-primary flex items-center aspect-square rounded-3xl p-[5px] absolute -top-1/2 -right-1/2 transform -translate-x-1/2 translate-y-1/4">
          <p className="font-medium text-white text-[8px]">
            {String(count).padStart(2, "0")}
          </p>
        </div>
      )}
    </div>
  );
};

export default Badge;
