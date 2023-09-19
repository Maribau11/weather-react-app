import React from "react"
import GridLayout from "react-grid-layout";

export default function Heading(){
    const layout = [
      { i: "a", x: 0, y: 0, w: 5, h: 0, static: true },
      { i: "b", x: 2, y: 0, w: 5, h: 0, minW: 2, maxW: 4 },
      { i: "c", x: 3, y: 0, w: 10, h: 0 },
    ];
    return(
        <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a">City Name</div>
        <div key="b">Current Weather Icon</div>
        <div key="c">Current Date and Time</div>
      </GridLayout>
    )
}