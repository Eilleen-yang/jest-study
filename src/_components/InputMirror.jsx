import React, { useState } from "react";

export default function InputMirror() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>입력한 값 : {text}</p>
    </div>
  );
}
