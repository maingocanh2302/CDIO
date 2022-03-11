import React from "react";
import "./FootBallCard.css";
import { FaCheck } from "react-icons/fa";

const FootBallCard = () => {
    return (
        <div>
            <div className="productCard">
                <div className="productCard__body">
                    <div className="image">
                        <img src="https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg" />
                    </div>
                    <h2 className="productCard__body--title">
                        Sân bóng đá Yên Hòa-Cầu Giấy
                    </h2>
                    <div className="productCard__body--describe">
                        <h3>số người: 7</h3>
                        <div>⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="productCard__body--price">
                        <h2>
                            Giá:{" "}
                            <span className="productCard__body--price-color">
                                400.000-600.000
                            </span>
                            đ/Trận
                        </h2>
                    </div>
                    <div className="productCard__body--additional">
                        <div>
                            wifi
                            <FaCheck />
                        </div>
                        <div>
                            Căng tin
                            <FaCheck />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FootBallCard;
