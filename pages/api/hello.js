// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as react from "react";

const are = () => {
  return (
    <div>
      hello this is ok
    </div>
  )
}

export default function handler(req, res) {
  const a = {
    $$typeof: Symbol(react.element),
    key: null,
    type: "div",
    _owner: null,
    _store: {
      validate: true
    },
    _source: {
      columnNumber: 22,
      fileName: "/home/mihail/Desktop/personal-portfolio/components/Footer.js",
      lineNumber: 27
    }
  }
  // console.log(JSON.stringify(a));
  res.status(200).json(are())
}
