import React from "react";
import { useSpring, a } from "@react-spring/web";

const AboutUs = () => {
  const [springs, api] = useSpring(() => ({
    from:{x:0},
    x: -10,
  }));

  const [opacitySprings, opacityApi] = useSpring(() => ({
    opacity: 1,
    x:0,
  }));

  const [opacitySpringsReverse, opacityApiReverse] = useSpring(() => ({
    opacity: 0,
    x:-10,
  }));
  return (
    <div
      className="nav_btn_lg flex items-center justify-center hover:bg-brblue py-6 bg-white shadow-md mt-10 hover:text-white"
      onMouseEnter={() => {
        api.start({  x: 20 });
        opacityApi.start({ opacity: 0, x: 5 });
        opacityApiReverse.start({ opacity: 1, x: 3 });
      }}
      onMouseLeave={() => {
        api.start({  x: 0 });
        opacityApi.start({ opacity: 1 , x:0});
        opacityApiReverse.start({ opacity: 0, x: -10 });
      }}
    >

      <a.div style={opacitySpringsReverse} className="opacity-0">➔</a.div>
      <a.div style={springs}>ABOUT IIT BHUBANESWAR HOSTEL&nbsp;</a.div>
      <a.div style={opacitySprings}>&nbsp;•&nbsp;</a.div>
    </div>
  );
};

export default AboutUs;
