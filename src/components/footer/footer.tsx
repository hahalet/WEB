import * as React from "react";
import './footer.scss'
import { withRouter } from "react-router-dom";
import { History, Location, } from 'history'
import { images } from "../../utils/images";
interface FooterProps {
	history: History
}
class Footer extends React.Component<FooterProps, any, any> {
	constructor(props: any) {
		super(props)
	}
	OfficeList = [
		{ text: '关于我们', routeName: 'aboutUs', },
		{ text: '公司介绍', routeName: 'product', },
		{ text: '加入我们', routeName: 'contact', },
	]
	MenuList = [
		
		{ text: '柏拉图' },
	]
	CompaniesList = [
		{ text: '邮箱：hahalet@163.com' },
		{ text: '地址： 深圳市龙华区民治街道樟坑社区樟坑二区41栋1202' },
	]

	componentDidMount = () => {

	}
	onJumpPage  = (item: any) => {
		this.props.history.push(item.routeName);
	}
	onJumpL = () => {
		// this.props.history.push('https://beian.miit.gov.cn/#/Integrated/recordQuery');
		window.open('https://beian.miit.gov.cn/#/Integrated/recordQuery')
	}
	_renderItem = (item: any, index: any, name: string = '') => {
		return (
			<div className={"footerListItem " + name} onClick={() => this.onJumpPage(item)}>
				{item['icon'] && <img className="footerItemIcon" src={item.icon}></img>}
				<div className="footerItemText">{item.text}</div>
			</div>
		)
	}
	render() {
		return (
			<div className="footer">
				<div className="footer_warp">
					<div>
						<img className="footer_logo" src={images.footer_logo} alt="" />
					</div>
					<div className="footerList">
						<img className="ft_icon" src={images.ft_icon} alt="" />
						<div>
							<div className="footerTitle">中企佳</div>
							{
								this.OfficeList.map((item, index) => this._renderItem(item, index, 'footerItemBt'))
							}
						</div>
					</div>
					<div className="footerList">
						<img className="ft_icon" src={images.ft_icon} alt="" />
						<div>
							<div className="footerTitle">产品服务</div>
							{
								this.MenuList.map((item, index) => this._renderItem(item, index, 'footerItemBt'))
							}
						</div>
					</div>
					<div className="footerList">
						<img className="ft_icon" src={images.ft_icon} alt="" />
						<div>
							<div className="footerTitle">联系我们</div>
							{
								this.CompaniesList.map((item, index) => this._renderItem(item, index, 'footerItemBt'))
							}
						</div>
					</div>
				</div>
				<div className="footerResultText">
						<div className="f_line"></div>
					<div className="f_text" onClick={this.onJumpL}>© 2021 中企佳(深圳)网络科技有限公司    粤ICP备2022096104号-1    备案系统网站：https://beian.miit.gov.cn</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Footer)