import React, { Component } from "react";
import styles from "./detail.module.css";
import cx from "classnames";
import { Form, Button, InputGroup } from "react-bootstrap";
import data from "../../assets/JSON/Data.json";
import gg from "../../assets/images/citizencard.svg";
import { Helmet } from "react-helmet";
import axios from "axios";
import Swal from "sweetalert2";

export default class detail extends Component {
  constructor() {
    super();
    this.state = {
      activity: data.dataResp.groupList,
      cat: [],
      subCat: [],
      districtList: [],
      provinceList: [],
      subDistrictList: [],
      districtId: "",
      provinceId: "",
      mapIsShow: false,
      latitude: null,
      longitude: null,
      onlyShow: "day-mounth-year",
    };
  }

  getLocation = (value) => {
    let body = {
      bodyReq: {
        zipCode: value,
      },
      headerReq: {
        reqBy: "guest",
        reqChannel: "THStopWeb",
        reqDtm: "2020-11-18 21:50:03.116",
        reqID: "1605711003116QHvyY",
        service: "InquiryGeo",
      },
    };
    axios
      .post("https://applied2020.thaichana.com/api/inquiry/zipcode", body)
      .then((res) => {
        console.log(res);
        this.setState({
          districtList: res.data.dataResp.districtList,
          provinceList: res.data.dataResp.provinceList,
          subDistrictList: res.data.dataResp.subDistrictList,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.mapIsShow === true) {
      Swal.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html:
          "You can use <b>bold text</b>, " +
          '<a href="//sweetalert2.github.io">links</a> ' +
          "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        cancelButtonText: "ปิด",
        confirmButtonText: "ยืนยันตำแหน่ง",
        reverseButtons: true,
      });
    }

    let year = [];
    for (let index = 2545; index > 2445; index--) {
      year.push(index);
    }
    let mounth = [];
    for (let index = 1; index < 13; index++) {
      mounth.push(index);
    }

    let day = [];
    for (let index = 1; index < 32; index++) {
      day.push(index);
    }

    return (
      <div className={styles.container}>
        <Helmet>
          <title>ลงทะเบียนกิจกรรม/กิจการ/สถานประกอบการโครงการไทยชนะ</title>
        </Helmet>
        <div className={styles.bar}></div>
        <div className="px-3 py-3 pt-md-5 mx-auto text-center">
          <h1
            className={cx("display-6", styles.textMuted)}
            style={{ color: "#2a4365" }}
          >
            ลงทะเบียนกิจกรรม / กิจการ / สถานประกอบการ
          </h1>
          <p
            className={cx("lead mx-auto", styles.textColor)}
            style={{ maxWidth: 700 }}
          >
            กรุณากรอกข้อมูลกิจกรรม / กิจการ /
            สถานประกอบการของท่านให้ถูกต้องครบถ้วน
            เพื่อใช้ในการประเมินการเปิดให้บริการ
          </p>
        </div>
        <Form
          className="ng-untouched ng-pristine ng-invalid"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <h4 className={styles.textMuted}>ส่วนที่ 1</h4>
                <p className={styles.textColor}>
                  ข้อมูลกิจกรรม / กิจการ / สถานประกอบการ
                </p>
              </div>
              <div className="col-lg-9">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <label className="mb-4">
                          กลุ่มของกิจกรรม / กิจการ / สถานประกอบการ
                          <span className="text-danger"> *</span>
                        </label>
                        {this.state.activity.map((data, index) => {
                          return (
                            <Form.Check
                              custom
                              type="radio"
                              id={"group-radio" + index}
                              label={data.groupName}
                              name="group"
                              className="mb-4 ng-star-inserted"
                              onClick={() => {
                                this.setState({
                                  cat: data.cat,
                                });
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                    <hr />
                    <div className="row ng-star-inserted">
                      <div className="col-lg-12">
                        {this.state.cat.length !== 0 ? (
                          <>
                            <label className="mb-4">
                              ประเภทกิจกรรม / กิจการ / สถานประกอบการ
                              <span className="text-danger"> *</span>
                            </label>
                            {this.state.cat.map((data, index) => {
                              return (
                                <Form.Check
                                  custom
                                  type="radio"
                                  name="cat"
                                  id={"cat-radio" + index}
                                  label={data.catName}
                                  className="mb-4 ng-star-inserted"
                                  onClick={() => {
                                    this.setState({
                                      subCat: data.subCat,
                                    });
                                  }}
                                />
                              );
                            })}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    {this.state.cat.length !== 0 ? <hr /> : <></>}
                    <div className="row">
                      <div className="col-lg-12">
                        <Form.Group>
                          <Form.Label>
                            รูปแบบกิจกรรม / กิจการ / สถานประกอบการ
                            <span className="text-danger">
                              {" "}
                              * <small>(ไม่สามารถแก้ไขภายหลัง)</small>
                            </span>
                          </Form.Label>
                          <Form.Control
                            as="select"
                            custom
                            className={styles.textMuted}
                          >
                            <option value="โปรดเลือก">โปรดเลือก</option>
                            {this.state.subCat.map((data) => {
                              return (
                                <optgroup
                                  label={data.subCatName}
                                  className={styles.textMuted}
                                  style={{ fontWeight: 800 }}
                                >
                                  {data.businessType.map((data2) => {
                                    return (
                                      <option
                                        value={data.subCatName}
                                        className={styles.textColor}
                                      >
                                        {data2.businessTypeName}
                                      </option>
                                    );
                                  })}
                                </optgroup>
                              );
                            })}
                          </Form.Control>
                        </Form.Group>
                      </div>
                      <div className="col-lg-12">
                        <Form.Group>
                          <Form.Label>
                            จำนวนผู้ใช้บริการสูงสุดที่สามารถรองรับ
                            (คำนวณโดยยึดหลักเว้นระยะห่าง 1 - 2 เมตร)
                            <span className="text-danger">
                              {" "}
                              * <small>(กรอกได้เฉพาะตัวเลขเท่านั้น)</small>
                            </span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            appvalidation
                            placeholder="จำนวนผู้ใช้บริการสูงสุดที่สามารถรองรับ"
                          />
                          <Form.Control.Feedback>
                            กรุณาระบุข้อมูลให้ถูกต้อง
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <Form.Group>
                          <Form.Label>
                            พื้นที่ให้บริการลูกค้าโดยไม่รวมลานจอดรถ (ตารางเมตร)
                            <span className="text-danger"> *</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            appvalidation
                            placeholder="พื้นที่ให้บริการโดยไม่รวมลานจอดรถ"
                          />
                          <Form.Control.Feedback>
                            กรุณาระบุข้อมูลให้ถูกต้อง
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-12">
                        <Form.Group>
                          <Form.Label>
                            ชื่อกิจกรรม / กิจการ / สถานประกอบการ
                            <span className="text-danger">
                              {" "}
                              *<small>โปรดระบุสาขา (ถ้ามี)</small>
                            </span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            appvalidation
                            placeholder="ชื่อกิจกรรม / กิจการ / สถานประกอบการ"
                          />
                          <Form.Control.Feedback>
                            กรุณาระบุข้อมูลให้ถูกต้อง
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <Form.Group>
                          <Form.Label>
                            ที่ตั้ง เลขที่
                            <span className="text-danger"> *</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            appvalidation
                            placeholder="เลขที่"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-lg-6">
                        <Form.Group>
                          <Form.Label>หมู่</Form.Label>
                          <Form.Control
                            type="text"
                            appvalidation
                            placeholder="หมู่"
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <Form.Group>
                          <Form.Label>หมู่บ้าน / อาคาร / ชั้น</Form.Label>
                          <Form.Control
                            type="text"
                            appvalidation
                            placeholder="หมู่บ้าน / อาคาร / ชั้น"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-lg-6">
                        <Form.Group>
                          <Form.Label>ซอย</Form.Label>
                          <Form.Control
                            type="text"
                            appvalidation
                            placeholder="ซอย"
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <Form.Group>
                          <Form.Label>ถนน</Form.Label>
                          <Form.Control
                            type="text"
                            appvalidation
                            placeholder="ถนน"
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <Form.Group>
                          <Form.Label>
                            รหัสไปรษณีย์<span className="text-danger"> *</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            appvalidation
                            placeholder="รหัสไปรษณีย์"
                            mask="00000"
                            maxLength="5"
                            onChange={(event) => {
                              if (event.target.value.length === 5) {
                                this.getLocation(event.target.value);
                              }
                            }}
                          />
                        </Form.Group>
                      </div>
                      <div className="col-lg-6">
                        <Form.Group>
                          <Form.Label>
                            ตำบล / แขวง<span className="text-danger"> *</span>
                          </Form.Label>
                          <Form.Control
                            as="select"
                            custom
                            className={styles.textMuted}
                            onChange={(e) => {
                              this.setState({
                                districtId: e.target.value,
                              });
                            }}
                          >
                            <option value="โปรดเลือก">โปรดเลือก</option>
                            {this.state.subDistrictList.map((data) => {
                              return (
                                <option
                                  value={data.districtId}
                                  className={styles.textColor}
                                >
                                  {data.subDistrictName}
                                </option>
                              );
                            })}
                          </Form.Control>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <Form.Group>
                          <Form.Label>
                            อำเภอ / เขต<span className="text-danger"> *</span>
                          </Form.Label>
                          <Form.Control
                            as="select"
                            custom
                            className={styles.textMuted}
                            disabled
                            onChange={(e) => {
                              this.setState({
                                provinceId: e.target.value,
                              });
                              console.log(e.target.value);
                            }}
                          >
                            {this.state.districtId !== "" ? (
                              <>
                                {this.state.districtList.map((data) => {
                                  if (
                                    this.state.districtId === data.districtId
                                  ) {
                                    return (
                                      <option
                                        value={data.proviceId}
                                        className={styles.textColor}
                                      >
                                        {data.districtName}
                                      </option>
                                    );
                                  }
                                })}
                              </>
                            ) : (
                              <option value="โปรดเลือก">โปรดเลือก</option>
                            )}
                          </Form.Control>
                        </Form.Group>
                      </div>
                      <div className="col-lg-6">
                        <Form.Group>
                          <Form.Label>
                            จังหวัด<span className="text-danger"> *</span>
                          </Form.Label>
                          <Form.Control
                            as="select"
                            custom
                            className={styles.textMuted}
                            disabled
                          >
                            {this.state.districtId !== "" ? (
                              <>
                                {this.state.provinceList.map((data) => {
                                  return (
                                    <option
                                      value={data.provinceName}
                                      className={styles.textColor}
                                    >
                                      {data.provinceName}
                                    </option>
                                  );
                                })}
                              </>
                            ) : (
                              <option value="โปรดเลือก">โปรดเลือก</option>
                            )}
                          </Form.Control>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <Form.Group>
                          <Form.Label>
                            เบอร์โทรศัพท์
                            <span className="text-danger"> *</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            appvalidation
                            placeholder="เบอร์โทรศัพท์"
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <Form.Group>
                          <Form.Label>
                            ตำแหน่งที่ตั้งบน Google Map
                            <span className="text-danger"> *</span>
                          </Form.Label>
                          <Button
                            variant="outline-primary"
                            className="btn btn-block btn-outline-primary"
                            onClick={() => {
                              navigator.geolocation.getCurrentPosition((e) => {
                                this.setState({
                                  latitude: e.coords.latitude,
                                  longitude: e.coords.longitude,
                                  // mapIsShow: true,
                                });
                              });
                            }}
                          >
                            <svg
                              _ngcontent-yxb-c50=""
                              aria-hidden="true"
                              width="1em"
                              height="1em"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="map-marked-alt"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              class="svg-inline--fa fa-map-marked-alt fa-w-18 fa-2x"
                            >
                              <path
                                _ngcontent-yxb-c50=""
                                fill="currentColor"
                                d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"
                              ></path>
                            </svg>{" "}
                            ระบุตำแหน่งกิจกรรม / กิจการ / สถานประกอบการ
                          </Button>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <Form.Group>
                          <Form.Label>
                            ละติจูด
                            <span className="text-danger"> *</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            appvalidation
                            disabled
                            placeholder="ละติจูด"
                            value={this.state.latitude}
                          />
                        </Form.Group>
                      </div>
                      <div className="col-lg-12">
                        <Form.Group>
                          <Form.Label>
                            ลองจิจูด
                            <span className="text-danger"> *</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            appvalidation
                            disabled
                            placeholder="ลองจิจูด"
                            value={this.state.longitude}
                          />
                        </Form.Group>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row mb-5">
              <div className="col-lg-3">
                <h4 className={styles.textMuted}>ส่วนที่ 2</h4>
                <p className={cx(styles.textColor)}>
                  ข้อมูลผู้ติดต่อของกิจกรรม/กิจการ/สถานประกอบการ
                </p>
                <p>
                  <b className={styles.textMuted}>
                    (สำหรับเจ้าของกิจกรรม/กิจการ หรือ
                    ผู้ได้รับมอบหมายจากกิจกรรม/กิจการ เท่านั้น)
                  </b>
                </p>
              </div>
              <div className="col-lg-9">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <Form.Group>
                          <Form.Label>
                            ชื่อภาษาไทย
                            <span className="text-danger">
                              {" "}
                              *{" "}
                              <small>
                                ไม่ต้องระบุคำนำหน้าชื่อ (เช่น นาย, นาง, นางสาว)
                              </small>
                            </span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            appvalidation
                            placeholder="ชื่อภาษาไทย"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-lg-6">
                        <Form.Group>
                          <Form.Label>
                            นามสกุลภาษาไทย
                            <span className="text-danger"> *</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            appvalidation
                            placeholder="นามสกุลภาษาไทย"
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <Form.Group>
                          <Form.Label>
                            เลขประจำตัวประชาชนของผู้ติดต่อ
                            <span className="text-danger"> *</span>
                          </Form.Label>
                          <InputGroup className="mb-3">
                            <Form.Control
                              type="text"
                              appvalidation
                              placeholder="เลขประจำตัวประชาชนของผู้ติดต่อ"
                            />
                            <InputGroup.Append>
                              <Button variant="outline-secondary">
                                <svg
                                  _ngcontent-dib-c50=""
                                  width="1rem"
                                  height="1rem"
                                  viewBox="0 0 16 16"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="bi bi-eye"
                                >
                                  <path
                                    _ngcontent-dib-c50=""
                                    fill-rule="evenodd"
                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z"
                                    clip-rule="evenodd"
                                  ></path>
                                  <path
                                    _ngcontent-dib-c50=""
                                    fill-rule="evenodd"
                                    d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </Button>
                            </InputGroup.Append>
                          </InputGroup>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <Form.Group>
                          <Form.Label>
                            ยืนยันเลขประจำตัวประชาชนของผู้ติดต่อ
                            <span className="text-danger"> *</span>
                          </Form.Label>
                          <InputGroup className="mb-3">
                            <Form.Control
                              type="text"
                              appvalidation
                              placeholder="ยืนยันเลขประจำตัวประชาชนของผู้ติดต่อ "
                            />
                            <InputGroup.Append>
                              <Button variant="outline-secondary">
                                <svg
                                  _ngcontent-dib-c50=""
                                  width="1rem"
                                  height="1rem"
                                  viewBox="0 0 16 16"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="bi bi-eye"
                                >
                                  <path
                                    _ngcontent-dib-c50=""
                                    fill-rule="evenodd"
                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z"
                                    clip-rule="evenodd"
                                  ></path>
                                  <path
                                    _ngcontent-dib-c50=""
                                    fill-rule="evenodd"
                                    d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </Button>
                            </InputGroup.Append>
                          </InputGroup>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <Form.Group className="row">
                          <div className="col-12">
                            <Form.Label>
                              รหัสหลังบัตรประจำตัวประชาชน
                              <span className="text-danger">
                                {" "}
                                *{" "}
                                <small>
                                  โปรดกรอก 2 หลักแรกเป็นอักษรภาษาอังกฤษและ 10
                                  หลักหลังเป็นตัวเลข
                                </small>
                              </span>
                            </Form.Label>
                          </div>
                          <div className="col-9 d-flex align-items-center">
                            <div style={{ flex: 1 }}>
                              <Form.Control
                                type="text"
                                appvalidation
                                placeholder="XX0-0000000-00"
                                mask="AA0-0000000-00"
                              />
                            </div>
                          </div>
                          <div className="col-3 d-flex align-items-center">
                            <img
                              src={gg}
                              alt="gg"
                              style={{
                                width: "100%",
                                objectFit: "contain",
                                maxHeight: 75,
                              }}
                            />
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <label>
                          วันเดือนปีเกิดที่ปรากฎในบัตรประชาชน
                          <span class="text-danger"> *</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-12">
                            <Form.Group
                              className="row mx-0"
                              onChange={(e) => {
                                console.log(e.target.id);
                                this.setState({
                                  onlyShow: e.target.id,
                                });
                              }}
                            >
                              <Form.Check
                                custom
                                type="radio"
                                id="day-mounth-year"
                                name="data-ggth"
                                label="มีวัน/เดือน/ปีเกิด"
                                defaultChecked
                                style={{ marginRight: "1rem" }}
                              />
                              <Form.Check
                                custom
                                type="radio"
                                id="mounth-year"
                                name="data-ggth"
                                label="มีเฉพาะเดือนและปีเกิด"
                                style={{ marginRight: "1rem" }}
                              />
                              <Form.Check
                                custom
                                type="radio"
                                id="year"
                                name="data-ggth"
                                label="มีเฉพาะปีเกิด"
                              />
                            </Form.Group>
                          </div>
                        </div>
                        <Form.Group className="row">
                          <div className="col-lg-4 col-md-12">
                            <Form.Group className="m-lg-0">
                              <Form.Label>ปี:</Form.Label>
                              <Form.Control as="select" custom>
                                <option>โปรดเลือก</option>
                                {year.map((data) => {
                                  return <option>{data}</option>;
                                })}
                              </Form.Control>
                            </Form.Group>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <Form.Group className="m-lg-0">
                              {this.state.onlyShow === "mounth-year" ? (
                                <>
                                  <Form.Label>เดือน:</Form.Label>
                                  <Form.Control as="select" custom>
                                    <option>โปรดเลือก</option>
                                    {mounth.map((data) => {
                                      return <option>{data}</option>;
                                    })}
                                  </Form.Control>
                                </>
                              ) : (
                                <></>
                              )}
                              {this.state.onlyShow === "day-mounth-year" ? (
                                <>
                                  <Form.Label>เดือน:</Form.Label>
                                  <Form.Control as="select" custom>
                                    <option>โปรดเลือก</option>
                                    {mounth.map((data) => {
                                      return <option>{data}</option>;
                                    })}
                                  </Form.Control>
                                </>
                              ) : (
                                <></>
                              )}
                            </Form.Group>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <Form.Group className="m-lg-0">
                              {this.state.onlyShow === "day-mounth-year" ? (
                                <>
                                  <Form.Label>วัน:</Form.Label>
                                  <Form.Control as="select" custom>
                                    <option>โปรดเลือก</option>
                                    {day.map((data) => {
                                      return <option>{data}</option>;
                                    })}
                                  </Form.Control>
                                </>
                              ) : (
                                <></>
                              )}
                            </Form.Group>
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <Form.Group>
                          <Form.Label>
                            เบอร์โทรศัพท์มือถือที่ติดต่อได้
                            <span className="text-danger">
                              {" "}
                              *{" "}
                              <small>
                                เพื่อการติดต่อและยืนยัน OTP (จำกัดการลงทะเบียน 1
                                เบอร์ต่อ 1 กิจกรรม / กิจการ เท่านั้น)
                              </small>
                            </span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            appvalidation
                            placeholder="เบอร์โทรศัพท์ที่สามารถติดต่อได้"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-lg-12">
                        <Form.Group>
                          <Form.Label>E-mail</Form.Label>
                          <Form.Control
                            type="text"
                            appvalidation
                            placeholder="E-mail"
                          />
                        </Form.Group>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-right bg-white">
                    <a href="/register/terms-conditions">
                      <Button variant="btn-link" className="btn mx-2">
                        ยกเลิก
                      </Button>
                    </a>
                    {/* <a href="www.google.com"> */}
                    <Button
                      // type="bu"
                      variant=" btn-primary"
                      className="btn mx-2"
                      onClick={() => {
                        window.location.replace(
                          "https://applied2020.thaichana.com/register/detail"
                        );
                      }}
                    >
                      ดำเนินการต่อ
                    </Button>
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
        <footer _ngcontent-jdy-c35="" class={cx("mb-4", styles.copy)}>
          <p _ngcontent-jdy-c35="" class="lead text-center text-muted">
            Copyright © 2020
          </p>
        </footer>
      </div>
    );
  }
}
