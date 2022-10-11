import * as React from "react";
import './detail.scss'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { images } from "../../utils/images";


export default class  Detail extends React.Component{
  constructor(props: any) {
    super(props)
  }
  state = {

  }

  NewDetail1 = {
    title: 'The World’s Most Dangerous Technology Ever Made.',
    date: 'May 7, 2019 (10 mins read)',
    name: 'Kristin Watson',
    info: [
      {
        text: 'Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore. Aliquip consectetur labore consectetur dolor exercitation est minim quis. Magna non irure qui ex est laborum nulla excepteur qui. Anim Lorem dolore cupidatat pariatur ex tempor. Duis ea excepteur proident ex commodo irure est.'
      },
      {
        text: 'Nisi commodo qui pariatur enim sint laborum consequat enim in officia.Officia fugiat incididunt commodo et mollit aliqua non aute.Enim dolor eiusmod aliqua amet ipsum in enim eiusmod.Quis exercitation sit velit duis.'
      },
      {
        text: 'Est Lorem labore consectetur minim sit eu eiusmod mollit velit.Consectetur voluptate ex amet id eiusmod laborum irure.Aliquip ad qui id exercitation irure amet commodo nisi quis.Occaecat minim incididunt eiusmod nostrud veniam quis culpa.'
      },
      {
        text: 'Nisi ipsum et consequat id deserunt excepteur.Cillum non pariatur culpa ut occaecat laboris eu.Ullamco ad Lorem et elit laboris eu qui irure nulla qui culpa et.Cupidatat sunt ipsum proident aute exercitation do tempor aliqua cupidatat quis non exercitation.Adipisicing do minim dolore nulla mollit.Adipisicing incididunt irure ipsum et in esse ipsum elit tempor.'
      },
      {
        text: 'Aliquip mollit sunt qui irure.Irure ullamco Lorem excepteur dolor qui ea ad quis.Enim fugiat cillum enim ad occaecat sint qui elit labore mollit sunt laborum fugiat consequat.Voluptate labore sunt duis eu deserunt.Occaecat do ut ut labore cillum enim dolore ad enim enim id.Aliquip do veniam ad excepteur ad cillum qui deserunt nostrud sunt aliqua duis sunt occaecat.Laborum incididunt commodo ullamco proident quis.'
      },
      {
        image: images.unsplash_5U_28ojjgms
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu nunc aliquam elementum porta id.',
        styleName: 'detailInfoDate'
      },
      {
        text: 'Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore. Aliquip consectetur labore consectetur dolor exercitation est minim quis. Magna non irure qui ex est laborum nulla excepteur qui. Anim Lorem dolore cupidatat pariatur ex tempor. Duis ea excepteur proident ex commodo irure est.'
      },
      {
        text: 'Nisi commodo qui pariatur enim sint laborum consequat enim in officia.Officia fugiat incididunt commodo et mollit aliqua non aute.Enim dolor eiusmod aliqua amet ipsum in enim eiusmod.Quis exercitation sit velit duis.'
      },
      {
        text: 'Est Lorem labore consectetur minim sit eu eiusmod mollit velit.Consectetur voluptate ex amet id eiusmod laborum irure.Aliquip ad qui id exercitation irure amet commodo nisi quis.Occaecat minim incididunt eiusmod nostrud veniam quis culpa.'
      },
      {
        text: 'Nisi ipsum et consequat id deserunt excepteur.Cillum non pariatur culpa ut occaecat laboris eu.Ullamco ad Lorem et elit laboris eu qui irure nulla qui culpa et.Cupidatat sunt ipsum proident aute exercitation do tempor aliqua cupidatat quis non exercitation.Adipisicing do minim dolore nulla mollit.Adipisicing incididunt irure ipsum et in esse ipsum elit tempor.'
      },
      {
        text: 'Aliquip mollit sunt qui irure.Irure ullamco Lorem excepteur dolor qui ea ad quis.Enim fugiat cillum enim ad occaecat sint qui elit labore mollit sunt laborum fugiat consequat.Voluptate labore sunt duis eu deserunt.Occaecat do ut ut labore cillum enim dolore ad enim enim id.Aliquip do veniam ad excepteur ad cillum qui deserunt nostrud sunt aliqua duis sunt occaecat.Laborum incididunt commodo ullamco proident quis.'
      },
    ],
    aboutInfoTitle: 'Tin liên quan',
    aboutInfo: [
      {
        image: images.unsplash_swi1DGRCshQ,
        text1: 'Guide for designing better mobile apps typography',
        text2: 'In this article, I won’t talk about the general concepts of typography, which can be used both in print...',
      },
      {
        image: images.unsplash_dAmHWsRYP9c,
        text1: 'Guide for designing better mobile apps typography',
        text2: 'In this article, I won’t talk about the general concepts of typography, which can be used both in print...',
      },
      {
        image: images.unsplash_Bl_LiSJOnlY,
        text1: 'Guide for designing better mobile apps typography',
        text2: 'In this article, I won’t talk about the general concepts of typography, which can be used both in print...',
      },
    ],
    moreInfoTitle: 'Tin đọc nhiều',
    moreInfo: [
      {
        image: images.unsplash_aA2Fadydc,
        text: 'The World’s Most Dangerous Technology Ever Made.',
      },
      {
        image: images.unsplash_5U_28ojjgms,
        text: 'The World’s Most Dangerous Technology Ever Made.',
      },
      {
        image: images.unsplash_Bl_LiSJOnlY,
        text: 'The World’s Most Dangerous Technology Ever Made.',
      },
    ]
  }

  componentDidMount = () => {

  }

  render() {
    const NewDetail1 = this.NewDetail1;
    const moreInfo = this.NewDetail1.moreInfo;
    const info = this.NewDetail1.info;
    const aboutInfo = this.NewDetail1.aboutInfo;
    return (
      <div className="detailBody">
        <Header isWhiteBg></Header>
        <div className="detailContentCon">
          <div className="detailContent">
            <div className="detailInfoCon">
              <div className="detailInfoTitle">{NewDetail1.title}</div>
              <div className="detailInfoDate">{NewDetail1.date}</div>
              {
                info.map((item, index) => {
                  return (
                    <div key={'info_' + index}>
                      {item.image && <img className="detailInfoImage" src={item.image} alt="" />}
                      {item.text && <div className={item['styleName'] || "detailInfoText"}>{item.text}</div>}
                    </div>
                  )
                })
              }
              <div className="detailInfoName">{NewDetail1.name}</div>
            </div>
            <div className="detailMoreCon">
              <div className="detailMoreItemText">{NewDetail1.moreInfoTitle}</div>
              {
                moreInfo.map((item, index) => {
                  return (
                    <div key={'more_' + index}>
                      <img className="detailMoreItemImage" src={item.image} alt="" />
                      <div className="detailMoreItemText">{item.text}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="detailAboutCon">
            <div className="detailMoreItemText">{NewDetail1.aboutInfoTitle}</div>
            <div className="detailAboutLine"></div>
            <div className="detailAboutInfo">
              {
                aboutInfo.map((item, index) => {
                  return (
                    <div className="detailAboutItem" key={'about_' + index}>
                      <img className="detailAboutImage" src={item.image} alt="" />
                      <div className="detailAboutItemR">
                        <div className="detailAboutItemText1">{item.text1}</div>
                        <div className="detailAboutItemText2">{item.text2}</div>
                      </div>
                      
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}