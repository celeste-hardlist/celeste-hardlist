import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as PiIcons from "react-icons/pi";

export const SidebarData = [
  {
    title: "Home",
    path: "",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Levels",
    icon: <FaIcons.FaList />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "3 Star",
        path: "/levels/three-star",
        icon: <RiIcons.RiStarFill />,
      },
      {
        title: "2 Star",
        path: "/levels/two-star",
        icon: <RiIcons.RiStarHalfFill />,
      },
      {
        title: "1 Star",
        path: "/levels/one-star",
        icon: <RiIcons.RiStarLine />,
      },
    ],
  },
  {
    title: "Update Log",
    path: "/updatelog",
    icon: <PiIcons.PiReadCvLogoFill />,
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: <FaIcons.FaQuestion />,
  },
];
