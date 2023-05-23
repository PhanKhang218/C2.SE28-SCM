import React, { useEffect } from "react";
import axios from "axios";

const VNPayResult = () => {
  useEffect(() => {
    const handlePaymentResult = async () => {
      try {
        const token = localStorage.getItem("token");
        const urlParams = new URLSearchParams(window.location.search);
        const paymentInforUrl = urlParams.get("payment_infor");
        console.log(paymentInforUrl);
        if (!token) {
          console.error("Token not found");
          return;
        }

        const response = await axios.post(
          paymentInforUrl,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const paymentData = response.data.data;
          // Xử lý kết quả thanh toán tại đây
          console.log("Kết quả thanh toán VNPay:");
          console.log("Payment ID:", paymentData.paymentId);
          console.log("Time:", paymentData.time);
          console.log("Name:", paymentData.name);
          console.log("Price:", paymentData.price);
          console.log("Description:", paymentData.decription);
        } else {
          console.error("Failed to fetch payment information");
        }
      } catch (error) {
        console.error("Error fetching payment information", error);
      }
    };

    handlePaymentResult();
  }, []);

  return <div>Đang xử lý kết quả thanh toán...</div>;
};

export default VNPayResult;
