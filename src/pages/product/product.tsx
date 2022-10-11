import * as React from "react";
import './product.scss'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { images } from "../../utils/images";


export default class  Product extends React.Component{
  constructor(props: any) {
    super(props)
  }
  state = {

  }

  componentDidMount = () => {

  }

  render() {

    return (
      <div className="ProductDetailBody">
        <Header isWhiteBg></Header>
        <div className="prodDetailCTAbgCon">
          <div className="prodDetailCTABg">
            <div>
              <div className="prodDetailCTATitle">Quản trị rủi ro</div>
              <div className="prodDetailCTAText">Áp dụng công nghệ AI, Big data, liên kết các đối tác dữ liệu tin cậy... giảm thiểu rủi ro trong đánh giá tín dụng và giao dịch tài chính....</div>
            </div>
            <img className="prodDetailCTAImage" src={images.CTA_image} alt="" />
          </div>

        </div>
        <div className="prodDetailCTA_Manage_bgCon">
          <div className="prodDetailCTA_Manage_bg">
            <img className="prodDetailCTA_Manage_image" src={images.CTA_Manage_image} alt="" />
            <div>
              <div className="prodDetailCTA_Manage_Title">Nền tảng quản lý
                giao dịch</div>
              <div className="prodDetailCTA_Manage_Text">Hệ thống xử lý dữ liệu, năng lực xử lý (tốc độ, lượng giao dịch...), khả năng kết nối, các chức năng quản lý... </div>
            </div>
          </div>

        </div>

        <div className="prodDetailCTAServiceCon">
          <div className="prodDetailCTAServiceItem">
            <div>
              <div className="prodDetailCTATitle">Dịch vụ hỗ trợ fintech</div>
              <div className="prodDetailCTAText">Giới thiệu các dịch vụ thiết yếu cho fintech như Callcenter, thanh toán... </div>
            </div>
            <img className="prodDetailCTAServiceImage" src={images.CTA_group_image} alt="" />
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}