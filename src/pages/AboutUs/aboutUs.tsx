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

  productList = [
    {
      image: 'aboutUsProductBg2',
      text: 'Nền tảng công nghệ cho tài chính cá nhân',
    },
    {
      image: 'aboutUsProductBg3',
      text: 'Quản trị rủi ro',
    },
    {
      image: 'aboutUsProductBg1',
      text: 'Dịch vụ hỗ trợ fintech',
    },
  ]

  businessList = [
    {
      image1: 'bus_momo_icon',
      image2: 'bus_msb_icon',
    },
    {
      image1: 'bus_advance_icon',
      image2: 'bus_sacombank_icon'
    },
    {
      image1: 'bus_viettel_icon',
      image2: 'bus_cmc_cloud_icon'
    },
    {
      image1: 'bus_v_icon',
      image2: 'bus_ppt_telecom_icon'
    },
    {
      image1: 'bus_bankim_icon',
      image2: 'bus_msb_icon'
    },
  ]

  ImagineList = [
    {
      title: 'Tầm nhìn',
      text1: 'Công nghệ biến không thể thành có thể, tài chính thông minh',
      text2: 'Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500',
      image: images.business_people_image1,
      imageM: 'aboutUsImagineML',
    },
    {
      title: 'Sứ mệnh',
      text1: 'Kết nối tài chính đến cho mọi người, tạo nên giá trị cho xã hội',
      text2: 'Kết nối tài chính đến cho mọi người, tạo nên giá trị cho xã hội',
      image: images.business_people_image2,
      imageM: 'aboutUsImagineMR',
    },
    {
      title: 'Giá trị cốt lõi',
      text1: 'Khách hàng trên nhất, hiệu suất ưu tiên, đoàn kết tương trợ',
      text2: 'Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. ',
      image: images.business_people_image3,
      imageM: 'aboutUsImagineML',
    },
  ]

  componentDidMount = () => {

  }

  _renderProductItem = (item, index) => {
    return (
      <div className={'aboutUsProductItem'}>
        <div className={'aboutUsProductItemBg ' + item.image}>

        </div>
        <div className="aboutUsProductItemInfo">
          <div className="aboutUsProductItemText">{item.text}</div>
          <img className="Converted_Line" src={images.Converted_Line} alt="" />
        </div>
      </div>
    )
  }
  _renderBusinessItem = (item, index) => {
    return (
      <div className={"aboutUsBusinessItem " + (this.businessList.length - 1 == index ? '' : 'aboutUsBusinessMR')}>
        <img className={'aboutUsBusinessMT ' + item.image1} src={images[item.image1]} alt="" />
        <img className={item.image2}src={images[item.image2]} alt="" />
      </div>
    )
  }
  _renderImagineItem = (item, index) => {
    return (
      <div className="aboutUsImagineItem">
        {item.imageM == 'aboutUsImagineMR' && <img className={"aboutUsImagineImage " + item.imageM} src={item.image}></img>}
        <div className="aboutUsImagineItemRgt">
          <div className="aboutUsImagineTitle">{item.title}</div>
          <div className="aboutUsImagineText1">{item.text1}</div>
          <div className="aboutUsImagineLine"></div>
          <div className="aboutUsImagineText2">{item.text2}</div>
        </div>
        {item.imageM == 'aboutUsImagineML' && <img className={"aboutUsImagineImage " + item.imageM} src={item.image}></img>}
      </div>
    )
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
            <img className="Technology_image" src={images.Technology_image} alt="" />
          </div>
        </div>
        
        <Footer></Footer>
      </div>
    )
  }
}