import { a, useSpring } from "@react-spring/web";
import { Trail } from "./TrailText";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [open, set] = useState();

  useEffect(() => {
    set(true);
  }, []);

  const [horizontal, api] = useSpring(() => ({ from: { transform: 'translateX(0%)' } }));

  const horizontalCallback = open => api.start({ transform: `translateX(${open ? '20%' : '0%'})` });
  return (
    <div className=" text-[9rem] w-full z-10 relative">
      <Trail callback={horizontalCallback}>
        <a.div className="flex" style={horizontal}>
          <div>Hostel&nbsp;</div>
          <div>Life&nbsp;</div>
        </a.div>
        <div className="flex">
          <div>at&nbsp;</div>
          <div>IIT Bhubaneswar</div>
        </div>
      </Trail>
    </div>
  );
};

export default Header;
