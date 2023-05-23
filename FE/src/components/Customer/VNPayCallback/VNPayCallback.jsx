import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function VNPayCallback() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra query parameters trong URL
    const queryParams = new URLSearchParams(location.search);
    const vnp_ResponseCode = queryParams.get("vnp_ResponseCode");

    // Kiểm tra mã phản hồi từ VNPAY (ví dụ: '00' tức là thanh toán thành công)
    if (vnp_ResponseCode === "00") {
      console.log("thanh toan thành công");
      // Xử lý thanh toán thành công ở đây (ví dụ: hiển thị thông báo, cập nhật trạng thái đơn hàng, ...)
      // Sau đó navigate lại vào trang của bạn
      navigate("/payment-success");
    } else {
      console.log("thanh toan that bai");

      // Xử lý thanh toán thất bại ở đây (ví dụ: hiển thị thông báo, ...)
      // Sau đó navigate lại vào trang của bạn
      navigate("/payment-failure");
    }
  }, [location.search, navigate]);

  return (
    <div>
      <h1>Processing Payment...</h1>
      {/* Có thể hiển thị một thông báo hoặc spinner trong quá trình xử lý */}
    </div>
  );
}
