import * as React from 'react';
// import Swiper from 'swiper';
// import 'swiper/swiper.scss'
import './contact.scss';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { images } from '../../utils/images';
import { Pagination } from 'antd';

export interface ContactProps {}

export interface ContactStateProps {}

// 联系我们
export default class Contact extends React.Component<ContactProps, ContactStateProps, any> {
  constructor(props: any) {
    super(props);
  }
  state = {
    pageNumberdata:[],
    data2 : [
      {
        id: 1,
        data_img: images.contact_img1,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 2,
        data_img: images.contact_img2,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 3,
        data_img: images.contact_img3,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 4,
        data_img: images.contact_img4,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 5,
        data_img: images.contact_img5,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 6,
        data_img: images.contact_img6,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 7,
        data_img: images.contact_img7,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 8,
        data_img: images.contact_img8,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 9,
        data_img: images.contact_img9,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 10,
        data_img: images.contact_img10,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 11,
        data_img: images.contact_img11,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 12,
        data_img: images.contact_img12,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 13,
        data_img: images.contact_img13,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 14,
        data_img: images.contact_img14,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
    ]
  };

  componentDidMount = () => {
    
    
    let data2 = this.state.data2.filter((item,k) => k <4);
    console.log('this.state.data2',data2);
    this.setState({
      pageNumberdata:data2,
    });
  };

  onChange=(pageNumber)=> {
    
    
    let js=pageNumber*4
    let ks = js - 3;
    console.log( pageNumber, );
    
    
    let data = this.state.data2.filter((item, k) => item.id <= js && item.id >= ks);
    console.log('this.state.data2', this.state.data2,data);
    this.setState({
      pageNumberdata: data,
    });
  }
  render() {
    let data = [
      {
        id: 1,
        data_img: images.contact_img1,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3:
          'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 2,
        data_img: images.contact_img2,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3:
          'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 3,
        data_img: images.contact_img3,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3:
          'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 4,
        data_img: images.contact_img4,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3:
          'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 5,
        data_img: images.contact_img5,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3:
          'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 6,
        data_img: images.contact_img6,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3:
          'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 7,
        data_img: images.contact_img7,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3:
          'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 8,
        data_img: images.contact_img8,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3:
          'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 9,
        data_img: images.contact_img9,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3:
          'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
      {
        id: 10,
        data_img: images.contact_img10,
        data_text: 'Culpa sit Laboris Exercitation ea Fugiat Culpa sit Laboris Exercitation ea Fugiat',
        data_text2: 'April 25, 2012 (6 mins read)',
        data_text3:
          'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.',
      },
    ];
    
    console.log('(data.length+1)/4', data.length + 1);
    return (
      <div className="ContactBody">
        <Header></Header>
        <div className="Contact_dingbi">
          <div>
            <img className="Contact_img" src={images.largerImage} />
          </div>
          <div className="Contact_Laborum">
            <div className="Contact_text1">Laborum Ullamco Sunt id ut Sunt</div>
            <div className="Contact_text2">May 7, 2019 (10 mins read)</div>
            <div className="Contact_text3">
              Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim
              ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
            </div>
            <img className="Contact_Image" src={images.Group36} alt="" />
          </div>
        </div>
        <div className="Contact_Culpa">
          {data.map((item, k) => {
            return (
              <div className="Contact_CulpaText">
                <div>
                  <img className="Contact_CulpaTextImg" src={item.data_img} />
                </div>
                <div className="Contact_CulpaDataText">
                  <div className="Contact_CulpaDataText1">{item.data_text}</div>
                  <div className="Contact_CulpaDataText2">{item.data_text2}</div>
                  <div className="Contact_CulpaDataText3">{item.data_text3}</div>
                  <div className="Contact_CulpaDataText4">
                    Chi tiết
                    <img className="Contact_Line" src={images.Converted_Line} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="Contact_dingbi2">
          <div className="Contact_dingbi2_text">
            <div className="Contact_dingbi2_text_div">
              <div className="Contact_dingbi2_text1">Laborum Ullamco Sunt id ut Sunt</div>
              <div className="Contact_dingbi2_text2">May 7, 2019 (10 mins read)</div>
              <div className="Contact_dingbi2_text3">
                Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea
                minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
              </div>
            </div>
          </div>
        </div>
        <div className="Contact_Culpa">
          {this.state.pageNumberdata.map((item, k) => {
            return (
              <div className="Contact_CulpaText">
                <div>
                  <img className="Contact_CulpaTextImg" src={item.data_img} />
                </div>
                <div className="Contact_CulpaDataText">
                  <div className="Contact_CulpaDataText1">{item.data_text}</div>
                  <div className="Contact_CulpaDataText2">{item.data_text2}</div>
                  <div className="Contact_CulpaDataText3">{item.data_text3}</div>
                  <div className="Contact_CulpaDataText4">
                    Chi tiết
                    <img className="Contact_Line" src={images.Converted_Line} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="Pagination">
          <Pagination
            simple
            defaultCurrent={1}
            onChange={(e) => this.onChange(e)}
            total={this.state.data2.length}
            defaultPageSize={4}
          />
        </div>

        <Footer></Footer>
      </div>
    );
  }
}
