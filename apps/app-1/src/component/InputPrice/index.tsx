"use client";

import { useState } from "react";
import { Price } from "@sample/ui";

export const InputPrice = () => {
  const [price, setPrice] = useState(0);
  const handleOnChange = (val: string) => setPrice(Number(val));
  return (
    <div>
      test3
      <input
        value={price}
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <Price value={price} />
    </div>
  );
};
