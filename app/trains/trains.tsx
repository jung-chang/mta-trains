import { animate, createScope, Scope } from "animejs";
import { useEffect, useRef, useState } from "react";

const LineA = () => {
  return (
    <svg
      width="955"
      height="777"
      viewBox="0 0 955 777"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 0V55.5L12 72L56.5 116.5V491L69 504.5H135.5L140.5 512V651L154.5 664.5H359.5L364 669.5V768L372 776.5H407.5L415.5 773L477 711.5L484.5 707.5H528L536.5 702.5L677.5 561.5L686.5 557H720L728.5 553L795.5 486M835 446.5L795.5 486M795.5 486C795.5 486 806 484.5 811 489.5C816 494.5 926.5 605 936 614.5C945.5 624 954.5 614.5 954.5 611.5C954.5 608.5 954.5 504.5 954.5 504.5"
        stroke="black"
      />
    </svg>
  );
};

export function Trains() {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<Scope | null>(null);
  const [rotations, setRotations] = useState(0);

  useEffect(() => {
    if (!root.current) {
      return;
    }

    scope.current = createScope({ root: root.current }).add((scope) => {
      var pathEls = document.querySelectorAll("path");
      for (var i = 0; i < pathEls.length; i++) {
        var pathEl = pathEls[i];
        animate(pathEl, {
          duration: 3000,
          delay: 2000,
          loop: true,
          direction: "alternate",
          easing: "easeInOutSine",
          autoplay: true,
        });
      }
    });

    return () => scope.current?.revert();
  }, []);

  return (
    <div ref={root} style={{ width: "100vw", height: "100vh" }}>
      <div
        style={{
          width: "1050px",
          height: "1223px",
        }}
      >
        <LineA />
        {/* <image
          className="block stroke-1 stroke-blue-700"
          href="/lines/a.svg"
          style={{
            width: "954px",
            height: "776.5px",
          }}
        />
        <image href="/areas/staten_island.svg" height="100%" width="100%" /> */}
      </div>
    </div>
  );
}
