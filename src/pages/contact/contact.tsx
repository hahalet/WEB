import * as React from "react";
import './contact.scss'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { images } from "../../utils/images";

// 联系我们
export default class  Contact extends React.Component{
  constructor(props: any) {
    super(props)
  }
  state = {

  }

  componentDidMount = () => {

  }

  render() {

    return (
      <div className="aboutUsBody">
        <div className="aboutUsHeader">
          <Header></Header>
          <div className="aboutUsHeaderCon">
            <div>
              <div className="aboutUsHeaderTitle">联系我们</div>
            </div>
            {/* <img className="Technology_image" src={images.Technology_image} alt="" /> */}
          </div>
        </div>
        <div className="about_con_center">
          <img className="about_image" src={images.contact_image} alt="" />
          <div className="contact_address_text">邮箱：hahalet@163.com</div>
          <div className="contact_address_text">地址：深圳市龙华区民治街道樟坑社区樟坑二区41栋1202</div>
        </div>

        <Footer></Footer>
      </div>
    )
  }
}