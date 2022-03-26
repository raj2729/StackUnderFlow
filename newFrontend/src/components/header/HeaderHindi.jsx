import React from 'react';
import Hero from './Hero';
import Button from "../../UI/Button";
import hero from "../../images/hero.svg";
import {Link} from "react-router-dom"

function Header() {
    const bluePrint = {
        heading: "हम आपके काम को आसान बनाते हैं",
        subHeading: "अपनी परियोजनाओं के बारे में सभी जानकारी प्राप्त करें |",
        callToAction: "Eअभी दाखिला लें",
      };
	return (
		<header className='dark'>
			<section className="flex py-8 flex-col gap-2 items-center px-4 sm:px-8 md:flex-row xl:px-16">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="w-full text-white  flex flex-col items-start gap-6 lg:w-[50%]">
          <h6 style={{marginTop:"80px"}} className="text-primary-color-light relative uppercase font-semibold text-base after:absolute after:right-[-55%] after:top-[50%] after:translate-y-[-50%] after:h-[2px] after:bg-current after:w-[50%] lg:text-lg">
          श्रमिकों और प्रबंधकों का सबसे अच्छा संबंधक
          </h6>
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
            {bluePrint.heading}
          </h1>
          <p className="text-lg lg:text-xl">{bluePrint.subHeading}</p>
          <Link to='/signup' style={{textDecoration:"none"}}><Button isPrimary={true}>हमसे जुड़ें</Button></Link>
        </div>
        <div className="object-cover">
          <img src={hero} alt="" className="block w-full" />
        </div>
      </div>
    </section>
		</header>
	);
}

export default Header;
