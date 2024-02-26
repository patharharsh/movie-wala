import { useRef, useEffect } from "react";

export function useHorizontalScroll(element: any) {
    element.addEventListener("wheel", (event: any) => {
      event.preventDefault();
  
      let [x, y] = [event.deltaX, event.deltaY];
      let magnitude;
  
      if (x === 0) {
        magnitude = y > 0 ? -30 : 30;
      } else {
        magnitude = x;
      }
  
      //console.log({ x, y, magnitude });
      element.scrollBy({
        left: magnitude
      });
    });
  }