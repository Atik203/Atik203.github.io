declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "react-vertical-timeline-component" {
  import { ReactNode } from "react";

  export interface VerticalTimelineElementProps {
    id?: string;
    className?: string;
    date?: string;
    dateClassName?: string;
    iconStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    iconClassName?: string;
    icon?: ReactNode;
    position?: "left" | "right";
    textClassName?: string;
    children?: ReactNode;
  }

  export const VerticalTimeline: React.FC<{
    className?: string;
    animate?: boolean;
    layout?: "1-column" | "2-columns";
    lineColor?: string;
    children?: ReactNode;
  }>;

  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
