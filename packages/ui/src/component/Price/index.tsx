import { FC } from "react";

export const Price: FC<{ value: number }> = ({ value }) => {
  return <h3 style={{ color: "blue" }}>¥{value}</h3>;
};
