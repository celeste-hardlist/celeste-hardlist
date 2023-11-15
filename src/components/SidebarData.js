import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Levels",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "3 Star",
        path: "/levels/three-star",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "2 Star",
        path: "/levels/two-star",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "1 Star",
        path: "/levels/one-star",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  /*
  {
    title: "Search",
    path: "/search",
    icon: <FaIcons.FaPhone />,
  },
  */
  {
    title: "Update Log",
    path: "/updatelog",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: <FaIcons.FaPhone />,
  },
];
