import * as React from "react";
import { withRouter, } from "react-router";
import { History, Location, } from 'history';
import { injectIntl, IntlFormatters } from 'react-intl';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { images } from "../../utils/images";
import 'animate.css';
import './header.scss';

interface HeaderProps {
	history: History
	intl: IntlFormatters
	isWhiteBg: boolean
}

class Header extends React.Component<HeaderProps, any> {
	constructor(props: any) {
		super(props)
		this.state = {
			NavList: [
				{
					title: '首页',
					active: '',
					routeName: '/',
				},
				{
					title: '产品服务',
					active: '',
					routeName: 'product',
				},
				{
					title: '关于我们',
					active: '',
					routeName: 'aboutUs',
				},
				{
					title: '联系我们',
					active: '',
					routeName: 'contact',
				},
			],
			navLiIndex: 0,
			headerClass: props.isWhiteBg ? 'headerBgWColor' : 'headerBgNColor',
			isShowMenu: 'dropDownMenuDisPlay',
			language: 'en'
		}
	}

	componentDidMount(): void {
		const navIndex = localStorage.getItem('newStarWebNavIndex');
		this.setState({
			navLiIndex: navIndex || 0
		})
		window.onscroll = () => {
			let h = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop || 0;
			const isWhiteBg = this.props.isWhiteBg;
			console.log('滚动-----h', isWhiteBg, h);
			
			let className = 'headerBgWColor';
			if (isWhiteBg) {
				className = 'headerBgWColor';
			} else {
				if (h > 90) {
					className = 'headerBgWColor';
				} else {
					className = 'headerBgNColor';
				}
			}
			this.setState({
				headerClass: className
			})
		}
	}

	formatMessage = (title: string) => {
		return this.props.intl.formatMessage({ id: title })
	}

	// 是否显示下拉选项
	handleIsShowMenu = () => {
		const isShowMenu = this.state.isShowMenu;
		let name = '';
		if (isShowMenu == 'dropDownMenuDisPlay' || isShowMenu == 'animate__fadeOut') {
			name = 'animate__fadeIn'
		}else {
			name = 'animate__fadeOut'
		}
		this.setState({
			isShowMenu: name
		})
	}
	handleChangeLanguage = (item: any, index: any) => {
		this.setState({
			language: item.value
		})
		window.postMessage({ language: item.value }, location.origin);
		localStorage.setItem('starLanguage', item.value);
		this.handleIsShowMenu();
	}

	onJumpPage = (item: any) => {
		console.log('item', item)
		this.props.history.push(item.routeName)
	}

	onMouseover = (index) => {
		if (index == this.state.navLiIndex) {
			return;
		}
		let list = this.state.NavList;
		const item = list[index];
		item['active'] = 'headerNavLiHoverColor';
		list[index] = item;
		this.setState({
			NavList: list
		})
	}
	onMouseLeave = (index) => {
		if (index == this.state.navLiIndex) {
			return;
		}
		let list = this.state.NavList;
		const item = list[index];
		item['active'] = '';
		list[index] = item;
		this.setState({
			NavList: list
		})
	}

	onJumperNav = (cItem, index) => {
		let list = this.state.NavList;
		const item = list[index];
		item['active'] = '';
		list[index] = item;
		this.setState({
			navLiIndex: index,
			NavList: list
		})
		localStorage.setItem('newStarWebNavIndex', index);
		this.props.history.push(cItem.routeName);
	}

	render() {
		const { headerClass } = this.state;
		return (
			<div className="headerCon">
				<div className={"header " + headerClass} id="header">
					<div className="header_warp">
						<img className="headerLogo" src={images.home_header_logo}></img>
						<ul className="headerNavUl">
							{
								this.state.NavList.map((item, index) => {
									return (
										<li
											className={"headerNavLi " + item.active + " " + (this.state.NavList.length - 1 == index ? "" : "headerNavLiMarginL")}
											onMouseEnter={() => this.onMouseover(index)}
											onMouseLeave={() => this.onMouseLeave(index)}
											onClick={() => this.onJumperNav(item, index)}
										>
											<div className={item.active ? "headerNavLiActiveLine" : "headerNavLiLine"}></div>
											<div className={"headerNavLiTitle " + (this.state.navLiIndex == index ? 'headerNavLiActiveColor' : '')}>
												{this.formatMessage(item.title)}
											</div>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default injectIntl(withRouter(Header) as any) as any