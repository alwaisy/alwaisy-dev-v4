import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge"; // Optional, for merging classes

// Define typography variants with Tailwind classes
export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: [
        "font-[Inter_Display]", // Ensure font is loaded
        "text-white", // Uses hsl(var(--background)) or hsl(var(--primary-foreground))
        "text-left",
        "tracking-[-0.02em]", // Letter spacing
        "leading-[1.25]", // Line height
        "lg:text-[36px] md:text-[32px] text-[28px]", // Responsive font sizes
      ].join(" "),
      h2: [
        "font-[Inter]", // Ensure font is loaded
        "text-primary", // Uses hsl(var(--primary)) ≈ #2B2B2B, closest to #333333
        "text-left",
        "tracking-[-0.03em]", // Letter spacing
        "leading-[1.3]", // Line height
        "xl:text-[28px] lg:text-[26px] text-[26px]", // Responsive font sizes
      ].join(" "),
      h3: [
        "font-[Inter_Display]", // Ensure font is loaded
        "text-white", // Maps to White 90; using text-white for now
        "text-left",
        "tracking-[-0.02em]", // Letter spacing
        "leading-[1.5]", // Line height
        "xl:text-[22px] lg:text-[20px] text-[20px]", // Responsive font sizes
      ].join(" "),
      h4: [
        "font-[Manrope]", // Ensure font is loaded
        "text-white", // Uses hsl(var(--background)) or hsl(var(--primary-foreground))
        "text-left",
        "tracking-[-0.02em]", // Letter spacing
        "leading-[2]", // Line height
        "xl:text-[20px] lg:text-[20px] text-[20px]", // Responsive font sizes
      ].join(" "),
      handwritten: [
        "font-[Reenie_Beanie]", // Ensure font is loaded
        "text-white", // Uses hsl(var(--background)) or hsl(var(--primary-foreground))
        "text-left",
        "tracking-[-0.04em]", // Letter spacing
        "leading-[1.1]", // Line height
        "xl:text-[22px] lg:text-[22px] text-[20px]", // Responsive font sizes
        "mb-[20px]", // Paragraph spacing
      ].join(" "),
      mono: [
        "font-[DM_Mono]", // Ensure font is loaded
        "text-white", // Uses hsl(var(--background)) or hsl(var(--primary-foreground))
        "text-left",
        "tracking-[-0.02em]", // Letter spacing
        "leading-[1.25]", // Line height
        "xl:text-[15px] lg:text-[15px] text-[15px]", // Responsive font sizes
        "mb-[20px]", // Paragraph spacing
      ].join(" "),
      "body-s": [
        "font-[Manrope]", // Ensure font is loaded
        "text-white opacity-50", // Maps to White 50; using text-white with opacity-50
        "text-left",
        "tracking-[-0.01em]", // Letter spacing
        "leading-[1.5]", // Line height
        "xl:text-[14px] lg:text-[14px] text-[14px]", // Responsive font sizes
        "mb-[20px]", // Paragraph spacing
      ].join(" "),
      "body-m": [
        "font-[Manrope]", // Ensure font is loaded
        "text-white opacity-80", // Maps to White 80; using text-white with opacity-80
        "text-left",
        "tracking-[-0.01em]", // Letter spacing
        "leading-[1.75]", // Line height
        "xl:text-[15px] lg:text-[15px] text-[15px]", // Responsive font sizes
        "mb-[20px]", // Paragraph spacing
      ].join(" "),
      "body-l": [
        "font-[Manrope]", // Ensure font is loaded
        "text-white opacity-60", // Maps to White 60; using text-white with opacity-60
        "text-left",
        "tracking-[-0.01em]", // Letter spacing
        "leading-[1.75]", // Line height
        "xl:text-[16px] lg:text-[16px] text-[16px]", // Responsive font sizes
        "mb-0", // Paragraph spacing is 0px
      ].join(" "),
    },
    weight: {
      thin: "font-thin",
      light: "font-light",
      normal: "font-normal",
      regular: "font-normal", // Alias for Regular weight (common in monospace fonts)
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
    style: {
      normal: "not-italic",
      italic: "italic",
    },
    decoration: {
      none: "no-underline",
      underline: "underline",
      "line-through": "line-through",
    },
  },
  defaultVariants: {
    variant: "h1", // Default to H1
    weight: "medium", // Default to Medium (matches most presets)
    style: "normal", // Default to Italic (matches most presets)
    decoration: "none", // Default to no decoration
  },
  compoundVariants: [
    // Ensure bold weight and italic style work together (optional, for consistency)
    {
      weight: "bold",
      style: "italic",
      class: "font-bold italic",
    },
  ],
});

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType; // Allow custom HTML tag (e.g., <h1>, <h2>, <div>, <p>)
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  weight,
  style,
  decoration,
  children,
  className,
  as: Component = "h1", // Default to <h1>, but can be <p> for Body variants
}) => {
  const classes = twMerge(
    typographyVariants({ variant, weight, style, decoration }),
    className,
  );

  return <Component className={classes}>{children}</Component>;
};
