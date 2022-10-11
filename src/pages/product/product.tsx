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
  _renderTitle = (name, title) => {
    return (
      <div className="home_title_con">
        <img className="home_title_icon" src={images.home_title_icon} alt="" />
        <div>{title}</div>
        <div className="home_title_name">{name}</div>
      </div>

    )
  }

  render() {

    return (
      <div className="ProductDetailBody">
        <div className="prodDetailCTAbgCon">
          <Header></Header>
          <div className="prodDetailCTABg">
            <div>
              <div className="prodDetailCTATitle">柏拉图</div>
              <div className="prodDetailCTAText">柏拉图数字藏品APP是基于区块链技术在知识产权领域的应用，立足于数字艺术产业的发展，实现藏品数字确权及流转，致力于为世界各地的收藏爱好者建立一个“高品质、高效率”，且安全可靠的数字藏品平台。</div>
            </div>
            {/* <img className="prodDetailCTAImage" src={images.CTA_image} alt="" /> */}
          </div>
        </div>

        <div className="product_con_center">
          <div className="home_con_w">
            {this._renderTitle('6', '关于柏拉图')}
          </div>
          {/* <div className="product_about">
            <div className="product_about_title">国内数藏行业标杆</div>
            <div className="product_about_message">数字藏品是指使用区块链技术，对应特定的作品、艺术品生成的唯一数字凭证，在保护其数字版权的基础上，实现真实可信的数字化发行、购买、收藏和使用，但是国内目前还没有人能做到行业标杆和领头羊，这是我们为之努力的方向
            </div>
          </div> */}
          <img className="product_about_image1" src={images.product_about_image1} alt="" />
          {/* <img className="product_about_image2" src={images.product_image2} alt="" /> */}
        </div>
        <div className="product_con_center">
          <div className="home_con_w">
            {this._renderTitle('6', '产品介绍')}
          </div>
          <img className="product_about_image2" src={images.product_image2} alt="" />
        </div>
        <Footer></Footer>
      </div>
    )
  }
}