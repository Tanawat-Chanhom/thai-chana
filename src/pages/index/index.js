import React, { Component } from "react";
import "./css/main.css";
import "./css/responsive.css";
import "./css/style.css";

import bannerCallcenter from "./images/banner-callcenter.png";
import bg from "./images/bg.png";
import logoThaiChana from "./images/logo-Thaichana.png";
import imgFaq from "./images/img-faq.png";
import mobileDownloadManual from "./images/mobile-download-manual.png";

export default class index extends Component {
  render() {
    return (
      <div id="home-page">
        <div id="wrap-top">
          <div className="container pt-5 pb-5">
            <div className="row justify-content-center logo-container">
              <div className="col-lg-5 col-md-6 col-8 text-center">
                <a href="">
                  <img className="img-fluid" src={logoThaiChana} alt="ไทยชนะ" />
                </a>
              </div>
            </div>

            <div className="row mt-5 mb-5">
              <h3 className="col text-center white light">
                เปิดให้ลงทะเบียนร้านค้าตั้งแต่
                <span className="bold">
                  วันอาทิตย์ที่ 17 พฤษภาคม 2563 เวลา 06.00 น.
                </span>
              </h3>
            </div>

            <div className="row btn-container mt-5 mb-5">
              <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
                <a
                  id="btn-top-find"
                  className="btn yellow"
                  href="https://merchant.thaichana.com"
                  target="_blank"
                >
                  <div className="name">ค้นหาร้านค้า</div>
                  <div className="arrow-right"></div>
                </a>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
                <a
                  id="btn-top-register"
                  className="btn orange"
                  href="/register/terms-conditions"
                  target="_blank"
                >
                  <div className="name">ลงทะเบียนร้านค้าใหม่</div>
                  <div className="arrow-right"></div>
                </a>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12"></div>
              <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
                <a
                  id="btn-top-manage-info"
                  className="btn blue"
                  href="https://portal.thaichana.com/sjtc-front/"
                  target="_top"
                >
                  <div className="name">จัดการข้อมูลร้านค้า</div>
                  <div className="arrow-right"></div>
                </a>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12">
                <img className="img-fluid" src={bg} alt="ไทยชนะ" />
              </div>
            </div>
          </div>
        </div>

        <div id="wrap-platform">
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col">
                <div className="border-container">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 download-container">
                      <div>
                        <h1>DOWNLOAD</h1>
                        <h2>
                          คู่มือสำหรับ
                          <br />
                          ผู้ประกอบการลงทะเบียน
                          <br />
                          และวิธีการสแกน QR
                        </h2>
                        <a
                          id="btn-download-manual"
                          className="btn dark-blue mt-4"
                          href="http://www.ไทยชนะ.com/manual/คู่มือสำหรับผู้ประกอบการลงทะเบียน%20และวิธีการสแกน%20QR.pdf"
                          target="_blank"
                        >
                          <div className="name">ดาวน์โหลด</div>
                          <div className="arrow-right"></div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-center">
                      <div className="img-mobile">
                        <img
                          className="img-fluid mobile"
                          src={mobileDownloadManual}
                          alt="ไทยชนะ"
                          width="255"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="wrap-faq">
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mt-3 mb-3">
                <img className="img-fluid" src={imgFaq} alt="ไทยชนะ" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 align-center mt-3 mb-3">
                <div>
                  <h1 className="text-center mb-3">คำถามที่พบบ่อย</h1>
                  <a
                    id="btn-faq"
                    className="btn blue"
                    href="faq.html"
                    target="_top"
                  >
                    <div className="name">ดูคำถามทั้งหมด</div>
                    <div className="arrow-right"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="wrap-callcenter">
          <div className="container pt-5">
            <div className="row">
              <div className="col">
                <img
                  className="img-fluid"
                  src={bannerCallcenter}
                  alt="Call Center 1119"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="wrap-footer">
          <div className="container pt-3 pb-3">
            <div className="row pt-2 pb-2">
              <div className="col text-center">
                สงวนสิทธิ์ พ.ศ. 2563 สายด่วนไทยชนะ 1119
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
