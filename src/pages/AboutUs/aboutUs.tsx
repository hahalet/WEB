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
              <div className="aboutUsHeaderTitle">Công nghệ kết nối tài chính</div>
              <div className="aboutUsHeaderText">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </div>
            <img className="Technology_image" src={images.Technology_image} alt="" />
          </div>
        </div>
        
        <Footer></Footer>
      </div>
    )
  }
}