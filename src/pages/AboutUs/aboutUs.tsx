import * as React from "react";
import './aboutUs.scss'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { images } from "../../utils/images";

// 关于我们
export default class  AboutUs extends React.Component{
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
              <div className="aboutUsHeaderTitle">关于中企佳</div>
              <div className="aboutUsHeaderText">中企佳于2019年在深圳成立。我们以“让金融服务触手可及”为愿景,致力于大数据、人工智能等金融技术领域的探索与创新。我们一直致力于通过技术连接世界,让世界上的每个人都能享受平等的金融和生活服务。中企佳依托智能科技,为有梦想的人们提供信贷服务,为您的每一分财富护航。作为一家金融科技公司,在智能金融时代,中企佳将充分发挥公司AI优势和技术实力,携手金融机构合作伙伴,用科技为更多人提供值得信赖的金融服务。</div>
            </div>
            {/* <img className="Technology_image" src={images.Technology_image} alt="" /> */}
          </div>
        </div>
        <div className="about_con_center">
          <img className="about_image" src={images.about_image} alt="" />
        </div>
        <Footer></Footer>
      </div>
    )
  }
}