import React from 'react';
import { UpOutlined } from '@ant-design/icons';
import { BtnToTop } from '../globalStyle/Index';

const GotoTop = () => {
	window.onscroll = () => {
		scrollFunction();
	};

	const scrollTopFunction = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const scrollFunction = () => {
		var mybutton = document.getElementById('topBtn');
		if (
			document.body.scrollTop > 460 ||
			document.documentElement.scrollTop > 460
		) {
			if (mybutton) {
				mybutton.style.display = 'block';
			}
		} else {
			if (mybutton) {
				mybutton.style.display = 'none';
			}
		}
	};

	return (
		<div>
			<BtnToTop id="topBtn" title="Go to top" onClick={scrollTopFunction}>
				<UpOutlined />
			</BtnToTop>
		</div>
	);
};

export default GotoTop;
