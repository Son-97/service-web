import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Trang chủ",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: "Về chúng tôi",
    path: "/about-us",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: "Dịch vụ",
    path: "/service",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Service 1",
        path: "/service/detail",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Service 2",
        path: "/service/services2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Service 3",
        path: "/service/services3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Sản phẩm",
    path: "/products",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Tin tức",
    path: "/blog",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Liên hệ",
    path: "/contact-us",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
