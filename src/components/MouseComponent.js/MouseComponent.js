import React, { useRef, useEffect, useState } from "react";
import "./MouseComponent.css";

function MouseComponent() {
  const mouseMove = useRef(null);
  const [cursorSmiley, setCursorSmiley]=useState(true);
 


  useEffect(() => {

     document.addEventListener('mousedown', cursorSmileyEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
       document.removeEventListener("mousedown", cursorSmileyEvent);
    };
  }, []);

  const mouseMoveEvent = (e) => {
    mouseMove.current.setAttribute(
      "style",
      `top: ${e.pageY}px ; left: ${e.pageX}px`
    );

  };

  const cursorSmileyEvent =()=>{
   
      setCursorSmiley(false);

      setTimeout(() => {
           setCursorSmiley(true);
      }, 2000);

   
  }


  return (
    <>
      <div ref={mouseMove} className={cursorSmiley ? "mouseComponent" : "smiley"}></div>
     
    </>
  );
}

export default MouseComponent;
