import * as React from "react"

export interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Calendar: React.FC<CalendarProps> = ({ className, ...props }) => (
  <div className={className} {...props}>
    {/* Calendar UI goes here */}
    <span>Calendar Component</span>
  </div>
)