import React, { useState } from "react";
import homeFaqData from "../data/homeFaqData";

function FAQSection() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="container py-5">
      {homeFaqData.map((item) => (
        <div key={item.id} className="mb-3">
          <h5
            style={{ cursor: "pointer" }}
            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
          >
            {item.question}
          </h5>

          {activeId === item.id ? <p>{item.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}

export default FAQSection;