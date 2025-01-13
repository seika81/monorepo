"use client";

import { useState } from "react";
import { Price } from "@sample/ui";

export const InputPrice = () => {
  const [price, setPrice] = useState(0);
  const handleOnChange = (v: string) => setPrice(Number(v));
  return (
    <div>
      <input
        value={price}
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <Price value={price} />
    </div>
  );
};
