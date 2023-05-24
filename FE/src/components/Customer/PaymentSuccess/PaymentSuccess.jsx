import React from "react";
import paymentSuccessImg from "./payment-success.png";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
export default function PaymentSuccess() {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  // Use the queryParams object to access the query parameters
  console.log(queryParams);
  return (
    <div>
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          padding: "45px 30px 60px",
          background: "#f4f7ff",
          backgroundImage:
            "url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "800px 452px",
          backgroundPosition: "top center",
          fontSize: 14,
          color: "#434343",
        }}
      >
        <main>
          <div
            style={{
              margin: 0,
              marginTop: 70,
              padding: "40px 30px",
              background: "#ffffff",
              borderRadius: 30,
            }}
          >
            <div
              className="image-success"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={paymentSuccessImg}
                alt="Payment Success"
                style={{ width: "50%", marginBottom: "30px" }}
              />
            </div>
            <div style={{ margin: "0 auto", maxWidth: 422 }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: 24,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                THANH TOÁN THÀNH CÔNG
              </h1>
              <p
                style={{
                  margin: 0,
                  marginTop: 17,
                  fontSize: 16,
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                CHI TIẾT
              </p>
              <p
                style={{
                  margin: 0,
                  marginTop: 17,
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {/* Tuyệt vời, bạn đã thanh toán thành công với mã đơn hàng:{" "} */}
                {/* <span style={{ color: "#499fb6" }}>#12465d34d45</span>. */}
              </p>
            </div>
            <table
              style={{
                marginTop: 40,
                width: "100%",
                borderRadius: 15,
                overflow: "hidden",
                border: "1px solid #f0f0f0",
                borderCollapse: "separate",
                borderSpacing: 0,
              }}
            >
              <tbody>
                <tr>
                  <th
                    style={{
                      width: "50%",
                      padding: 20,
                      color: "#000000",
                      background: "rgba(73, 159, 182, 0.3)",
                      borderRight: "1px solid #f0f0f0",
                      textAlign: "center",
                    }}
                  >
                    Mã đơn hàng
                  </th>
                  <th
                    style={{
                      width: "50%",
                      padding: 20,
                      color: "#000000",
                      background: "rgba(73, 159, 182, 0.3)",
                      textAlign: "center",
                    }}
                  >
                    Ngày
                  </th>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: 20,
                      textAlign: "center",
                      borderRight: "1px solid #f0f0f0",
                      fontWeight: 500,
                    }}
                  >
                    123456u677
                  </td>
                  <td
                    style={{
                      padding: 20,
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    12 November 2021
                  </td>
                </tr>
              </tbody>
            </table>
            <p
              style={{
                margin: 0,
                marginTop: 43,
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Here’s what you ordered:
            </p>
            <table
              style={{
                width: "100%",
                paddingBottom: 20,
                marginTop: 43,
                fontSize: 16,
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <tbody>
                <tr>
                  <th style={{ textAlign: "left" }}>Item</th>
                  <th style={{ textAlign: "right" }}>Price</th>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                width: "100%",
                paddingTop: 20,
                paddingBottom: 20,
                borderSpacing: 0,
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      paddingBottom: 16,
                      color: "#1f1f1f",
                      fontWeight: 600,
                    }}
                  >
                    Product Name
                  </td>
                  <td
                    style={{
                      paddingBottom: 16,
                      textAlign: "right",
                      fontWeight: 600,
                      color: "#499fb6",
                    }}
                  >
                    $86.00
                  </td>
                </tr>
                <tr style={{ marginTop: 20 }}>
                  <td style={{ color: "#1f1f1f", fontWeight: 600 }}>
                    Product Name
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                      fontWeight: 600,
                      color: "#499fb6",
                    }}
                  >
                    $86.00
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                width: "100%",
                marginTop: 15,
                paddingTop: 15,
                borderTop: "1px solid #499fb6",
              }}
            >
              <tbody>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      fontSize: 16,
                      color: "#ba3d4f",
                    }}
                  >
                    Total :
                  </th>
                  <th
                    style={{
                      textAlign: "right",
                      fontSize: 16,
                      color: "#ba3d4f",
                    }}
                  >
                    $17.02
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <p
            style={{
              maxWidth: 410,
              margin: "0 auto",
              marginTop: 90,
              textAlign: "center",
              fontWeight: 500,
              color: "#8c8c8c",
            }}
          >
            Need help? Ask at
            <a
              href="mailto:archisketch@gmail.com"
              style={{ color: "#499fb6", textDecoration: "none" }}
            >
              archisketch@gmail.com
            </a>
            or visit our
            <a
              href=""
              target="_blank"
              style={{ color: "#499fb6", textDecoration: "none" }}
            >
              Help Center
            </a>
          </p>
        </main>
        <footer
          style={{
            width: "100%",
            maxWidth: 490,
            margin: "20px auto 0",
            textAlign: "center",
            borderTop: "1px solid #e6ebf1",
          }}
        >
          <p
            style={{
              margin: 0,
              marginTop: 40,
              fontSize: 16,
              fontWeight: 600,
              color: "#434343",
            }}
          >
            Archisketch Company
          </p>
          <p style={{ margin: 0, marginTop: 8, color: "#434343" }}>
            Address 540, City, State.
          </p>
          <div style={{ margin: 0, marginTop: 16 }}>
            <a href="" target="_blank" style={{ display: "inline-block" }}>
              <img
                width="36px"
                alt="Facebook"
                src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
              />
            </a>
            <a
              href=""
              target="_blank"
              style={{ display: "inline-block", marginLeft: 8 }}
            >
              <img
                width="36px"
                alt="Instagram"
                src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
              />
            </a>
            <a
              href=""
              target="_blank"
              style={{ display: "inline-block", marginLeft: 8 }}
            >
              <img
                width="36px"
                alt="Twitter"
                src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter"
              />
            </a>
            <a
              href=""
              target="_blank"
              style={{ display: "inline-block", marginLeft: 8 }}
            >
              <img
                width="36px"
                alt="Youtube"
                src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube"
              />
            </a>
          </div>
          <p style={{ margin: 0, marginTop: 16, color: "#434343" }}>
            Copyright © 2022 Company. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
