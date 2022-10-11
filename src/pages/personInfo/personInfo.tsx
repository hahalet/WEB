import * as React from "react";
import { Form, Input } from 'antd';
import './personInfo.scss'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { images } from "../../utils/images";


export default class PersonInfo extends React.Component {
  constructor(props: any) {
    super(props)
  }
  state = {

  }

  componentDidMount = () => {

  }

  onFinish = () => {
    
  }
  onFinishFailed = () => {

  }
  render() {

    return (
      <div className="PersonInfoBody">
        <Header isWhiteBg></Header>
        <div className="PersonInfoContent">
          <div className="frame7_personInfo_bg">
            <div className="frame7_personInfo_con">
              <div className="personInfoBgTitle">Địa chỉ công ty</div>
              <div className="personInfoBgText">Tầng 4, Tòa Nhà Nhật An, 30D Kim Mã Thượng, Phường Cống Vị, Quận Ba Đình, Thành phố Hà Nội, Việt Nam</div>
              <div className="personInfoBgTitle">Văn phòng làm việc</div>
              <div className="personInfoBgText">CTM Complex, 139 Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam</div>
              <div className="personInfoBgTitle">Giờ làm việc</div>
              <div className="personInfoBgText">9h00-11h30 và 13h30-17h30</div>
              <div className="personInfoBgTitle">Email</div>
              <div className="personInfoBgText">business@newstarfintech.vn</div>

            </div>
          </div>
          <div className="personInfoWriteCon">
            <div className="personInfoWriteTitle">Gửi tin nhắn cho chúng tôi</div>
            <div className="personInfoWriteText">Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản ...</div>
            <div className="form">
              <div className="formItem">
                <div className="formItemLabel">Họ và Tên</div>
                <input className="formInput" type="text" value='ddddd' />
              </div>
              <div className="formItem">
                <div className="formItemLabel">Email</div>
                <input className="formInput" type="text" value='ddddd' />
              </div>
              <div className="formItem">
                <div className="formItemLabel">Số điện thoại</div>
                <input className="formInput" type="text" value='ddddd' />
              </div>
              <div className="formItem">
                <div className="formItemLabel">Tiêu đề</div>
                <input className="formInput" type="text" value='ddddd' />
              </div>
              <div className="formItemArea">
                <div className="formItemLabel">Tin nhắn</div>
                <textarea className="formTextArea" rows={4} cols={20} value='ddddd ddjjd shjdhdhd djhee shdjdjd djdjej djdjdjdjddj djdj djdj djdjdjd jjd djd d dkskjd deejjeje djdjd ' />
              </div>
              <div className="personInfoFormBtnCon">
                <div className="personInfoFormBtn">Gửi</div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}