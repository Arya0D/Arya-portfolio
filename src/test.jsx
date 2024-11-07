import { useGesture } from "@use-gesture/react";

function Test() {
  const bind = useGesture({
    onWheel: (state) => {
      console.log("Wheel gesture detected", state);
    },
    onScroll: (state) => {
      console.log("Scroll gesture detected", state);
    },
    onDrag: (state) => {
      console.log("Drag gesture detected", state);
    },
  });

  return (
    <div {...bind()} style={{ height: "100vh" }}>
      Swipe or scroll here
    </div>
  );
}

export default Test;
