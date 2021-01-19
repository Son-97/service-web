import React from "react";
import { Link } from "react-router-dom";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

import { Container } from "./style";
import { Row } from "../layout";
import Logo from "../../images/logo_dark.png";
import Navbar from "./Navbar/Navbar";
import { Icon } from "../ui/Icon";

const Header = () => {
  return (
    <React.Fragment>
      <Container>
        <div className="bg-yellow-1 w-1 bg-yellow" />
        <div className="absolute flex items-center justify-center w-full justify-between top-header">
          <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
          </Link>
          <Row>
            <Row>
              <Icon>
                <MdEmail size="23" />
              </Icon>
              {/* <p>son.lequang97@gmail.com</p> */}
            </Row>
            {/* <Line /> */}
            <Row>
              <Row>
                <Icon>
                  <MdPhone size="23" />
                </Icon>
                {/* <div>
                <p>0941.386.676</p>
                <p>0347.366.345</p>
                <p>0986.223.390</p>
              </div> */}
              </Row>
            </Row>
            {/* <Line /> */}
            <Row>
              <Row>
                <Icon>
                  <MdLocationOn size="23" />
                </Icon>
                {/* <div>
                <p>CN1: Xã Hạ Trạch - Bố Trạch - Quảng Bình</p>
                <p>CN2: Phường Tân Đông Hiệp - Dĩ An - Bình Dương</p>
                <p>CN3: Phường Linh Chiểu - Thủ Đức - TP.HCM</p>
              </div> */}
              </Row>
            </Row>
            {/* <Line /> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/dichvudietmoiQuangDuong"
              title="https://www.facebook.com/dichvudietmoiQuangDuong"
            >
              <Icon className="contact-icon">
                <FaFacebookF size="23" />
              </Icon>
            </a>
          </Row>
        </div>
      </Container>

      <Navbar />
    </React.Fragment>
  );
};

export default Header;
