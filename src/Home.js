import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<img
				className="home_image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt=""
			/>
			<div className="home_row">
				<Product
					id="1"
					title="Mickey"
					price="100"
					rating={4}
					image="https://i2-prod.mirror.co.uk/incoming/article9287204.ece/ALTERNATES/s615/Mickey-mouse.jpg"
				></Product>
				<Product
					id="2"
					title="Bear"
					price="160"
					rating={4}
					image="https://i.ytimg.com/vi/DQuG3v3KUhA/maxresdefault.jpg"
				></Product>
			</div>
			<div className="home_row">
				<Product
					id="3"
					title="Ben10"
					price="300"
					rating={4}
					image="https://cn.i.cdn.ti-platform.com/cnapac/content/2017/showpage/ben-10/sa/showicon.png"
				></Product>
				<Product
					id="4"
					title="Titan"
					price="400"
					rating={4}
					image="https://i.ytimg.com/vi/6DxR3Nq0X5g/hqdefault.jpg"
				></Product>
				<Product
					id="5"
					title="Tom and Jerry"
					price="200"
					rating={4}
					image="https://www.thepost24.com/wp-content/uploads/2018/07/933e1f4b9eb0720c27fae08d41294d5a-1024x576.jpg"
				></Product>
			</div>
		</div>
	);
}

export default Home;
