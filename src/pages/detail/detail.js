import React, { Component } from "react";
import styles from "./detail.module.css";
import cx from "classnames";
import { Form } from "react-bootstrap";

export default class detail extends Component {
  render() {
    return (
      <div className={styles.container}>
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
        <Form className="ng-untouched ng-pristine ng-invalid">
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
                        <Form.Check
                          custom
                          type="radio"
                          id={"custom-radio"}
                          label="กลุ่มที่ 1 : ผ่อนปรนให้เปิดทำการภายใต้มาตรฐานสาธารณสุข เริ่มวันที่ 3 พฤษภาคม 63"
                          className="mb-4 ng-star-inserted"
                        />
                        <Form.Check
                          custom
                          type="radio"
                          id={"custom-radio"}
                          label="กลุ่มที่ 2 : ผ่อนปรนให้เปิดทำการภายใต้มาตรฐานสาธารณสุข เริ่มวันที่ 17 พฤษภาคม 63"
                          className="mb-4 ng-star-inserted"
                        />
                        <Form.Check
                          custom
                          type="radio"
                          id={"custom-radio"}
                          label=" กลุ่มที่ 3 : ผ่อนปรนให้เปิดทำการภายใต้มาตรฐานสาธารณสุข เริ่มวันที่ 1 มิถุนายน 63 "
                          className="mb-4 ng-star-inserted"
                        />
                        <Form.Check
                          custom
                          type="radio"
                          id={"custom-radio"}
                          label=" กลุ่มที่ 4 : ผ่อนปรนให้เปิดทำการภายใต้มาตรฐานสาธารณสุข เริ่มวันที่ 15 มิถุนายน 63 "
                          className="mb-4 ng-star-inserted"
                        />
                        <Form.Check
                          custom
                          type="radio"
                          id={"custom-radio"}
                          label=" กลุ่มที่ 5 : ผ่อนปรนให้เปิดทำการภายใต้มาตรฐานสาธารณสุข เริ่มวันที่ 1 กรกฎาคม 63 "
                          className="mb-4 ng-star-inserted"
                        />
                        <Form.Check
                          custom
                          type="radio"
                          id={"custom-radio"}
                          label=" กลุ่มทั่วไปที่มิได้ถูกกำหนดให้ปิดสถานที่ หรือ ยังคงให้เปิดสถานที่ทำการตามนโยบาย "
                          className="ng-star-inserted"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row ng-star-inserted">
                      <div className="col-lg-12">
                        <label className="mb-4">
                          ประเภทกิจกรรม / กิจการ / สถานประกอบการ{" "}
                          <span className="text-danger"> *</span>
                        </label>
                        <Form.Check
                          custom
                          type="radio"
                          id={"custom-radio"}
                          label=" กิจกรรมด้านเศรษฐกิจและการดำเนินชีวิต "
                          className="mb-4 ng-star-inserted"
                        />
                        <Form.Check
                          custom
                          type="radio"
                          id={"custom-radio"}
                          label=" กิจกรรมด้านการออกกำลังกาย การดูแลสุขภาพ หรือสันทนาการ "
                          className="ng-star-inserted"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-12">
                        <Form.Group>
                          <Form.Label>
                            รูปแบบกิจกรรม / กิจการ / สถานประกอบการ
                          </Form.Label>
                          <Form.Control as="select" size="sm" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </div>
                      <div className="col-lg-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row"></div>
          </div>
        </Form>
      </div>
    );
  }
}
