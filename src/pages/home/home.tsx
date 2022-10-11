import * as React from "react";
import { IntlProvider, FormattedMessage, FormattedNumber, injectIntl } from 'react-intl'
// import Swiper from 'swiper';
// import 'swiper/swiper.scss'
import './home.scss'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { images } from "../../utils/images";
import { withRouter } from "react-router";

export interface HomeProps { }

export interface HomeStateProps {

}

class Home extends React.Component<HomeProps, HomeStateProps, any> {
	constructor(props: any) {
		super(props)
	}
	state: HomeStateProps = {

	}
	tanList = [
		{
			icon: images.home_phone_icon,
			title: '自研APP',
			text1: '流畅的用户体验',
			text2: '完善的功能'
		},
		{
			icon: images.home_lian_icon,
			title: '天河链',
			text1: '成熟的区块链方案',
			text2: '强大的数据支撑'
		},
		{
			icon: images.home_set_icon,
			title: '大厂支付系统',
			text1: '安全可靠的支付环境',
			text2: '成熟额支付方案.'
		},
		{
			icon: images.home_safe_icon,
			title: '安全性',
			text1: '24小时专人线上解答.',
			text2: '随时随地为用户解决问题.'
		},
	]
	valuesList = [
		{
			title: '品牌认证和艺术家',
			text: '柏拉图花费多年时间去打磨属于我们大家的属于中国市场的品牌，最终呈现在大家眼前的是独一无二的，我们从一开始就在和国内外知名艺术家签订扶持计划帮助他们在创作的路上星途坦荡。'
		},
		{
			title: '完整生态链',
			text: '柏拉图将始终保持开放包容的心态来对待我们的艺术家和用户，柏拉图始终保持和用户们在一起，想用户所想，做用户所做'
		},
		{
			title: '更大的赋能价值',
			text: '柏拉图始终相信线上和线下相结合才能保持完整地生态链，我们的初心也是想让用户体验到不一样的数字藏品的赋能价值。'
		},
	]

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
	_renderValueItem = (item: any, index) => {
		return (
			<div className={"home_value_item " + (index != 2 ? 'home_value_item_mr' : '')} key={item.title}>
				<div className="home_value_item_title">{item.title}</div>
				<div className="home_value_item_text">{item.text}</div>
			</div>
		)
	}
	_renderDealItem = (item: any, index) => {
		return (
			<div className={"home_deal_item " + (index != 3 ? 'home_deal_item_mag_r' : '')}>
				<img className="home_deal_item_icon" src={item.icon} alt="" />
				<div>
					<div className="home_deal_item_title">{item.title}</div>
					<div className="home_deal_item_text">{item.text1}</div>
					<div className="home_deal_item_text">{item.text2}</div>
				</div>
			</div>
		)
	}
	render() {
		return <div className="homeBody">
			<div className="home_header">
				<Header></Header>
				<div className="home_con_w home_h">
					<div className="home_header_title">数字藏品管理系统</div>
					<div className="home_header_text">运用区块链技术,构建”区块链+”数字收藏服务生态,针对艺术收藏、潮玩手办、名贵艺术品等藏品市场推出了专业化的区块链解决方案</div>
					<div className="home_header_img_con">
						<img className="home_header_image" src={images.home_h_cc_icon} alt="" />
						<img className="home_header_image" src={images.home_h_manage_icon} alt="" />
						<img className="home_header_image" src={images.home_h_qu_icon} alt="" />
					</div>
				</div>
			</div>
			<div className="home_con">
				<div className="home_con_w">
					{this._renderTitle('F', '方案多样，服务全面')}
				</div>
				<div className="project">
					<div className="project_con">
						<div className="project_title">
							<div className="project_title_num">1</div>
							<div>
								<div>数字藏品APP</div>
								<div className="project_title_text">数字藏品APP是基于区块链技术在知识产权领域的应用，立足于数字艺术产业的发展，实现藏品数字确权及流转，致力于为世界各地的收藏爱好者建立一个“高品质、高效率”，且安全可靠的数字藏品平台。</div>
								<div className="project_btn">See Details</div>
							</div>
						</div>
						<img className="project_img" src={images.home_mg_image} alt="" />
					</div>
					
				</div>
				<div className="project_rg">
					<div className="project_rg_con">
						<div className="project_title">
							<div className="project_title_num">2</div>
							<div>
								<div>数字藏品管理系统</div>
								<div className="project_title_text">数字商品管理系统是一个基于区块链技术，提供数字藏品铸造、推广、交易的综合性平台。平台利用自研区块链底层“矩链”，让创作者和收藏者实现数字藏品作品的自由流通与收藏。。</div>
								<div className="project_btn">See Details</div>
							</div>
						</div>
						<img className="project_img project_img_rg" src={images.home_sc_image} alt="" />
					</div>

				</div>
			</div>
			<div className="home_con">
				<div className="home_con_w" id="#Solution">
					{this._renderTitle('J', '解决方案')}
					<div className="home_deal_bg">
						<div className="home_deal_list">
							{this.tanList.map((item, index) => this._renderDealItem(item ,index))}
						</div>
					</div>
					<img className="home_l_image" src={images.home_l_image} alt="" />
				</div>
			</div>
			<div className="home_con">
				<div className="home_con_w">
					{this._renderTitle('H', '核心价值')}
					<div className="home_h_list">
						{
							this.valuesList.map((item: any, index) => this._renderValueItem(item, index))
						}
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	}
}

export default injectIntl(withRouter(Home) as any) as any