import { cn } from "~/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({ as, className, ...props }) => {
  const Tag = as || "div";

  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-screen-sm px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl",
        // "max-w-[1440px] mx-auto px-[10%]",
        className,
      )}
      {...props}
    >
      {props.children}
    </Tag>
  );
};

export default Container;
