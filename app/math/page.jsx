"use client";
import { useState } from "react";
import Link from "next/link";
import MathInput from "./MathInput";

const MathPage = () => {
  const [input, setInput] = useState(2);
  const variable = 1;

  const result = input + variable;
  return (
    <main>
      <Link href="../">Go back</Link>{" "}
      <math display="block">
        <mrow>
          <mi>{Number.isNaN(result) ? variable : result}</mi>
          <mo>=</mo>
          <mn>{variable}</mn>
          <mo>+</mo>
          <mn>
            <MathInput
              value={input}
              onChangeCallback={(e) => setInput(parseFloat(e.target.value))}
            />
          </mn>
        </mrow>
      </math>
    </main>
  );
};

export default MathPage;
