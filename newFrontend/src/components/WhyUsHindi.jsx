import React from 'react';
import Button from '../UI/Button';
import SectionHeading from '../UI/SectionHeading';
import { Check } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import useStore from '../context/useStore'


const WhyFeature = ({ title }) => {
const {theme} = useStore()
const paraStyles = ` ${theme? 'text-white' : 'text-slate-700'} `
const titleStyles = `${theme? 'text-white' : 'text-slate-900'} text-2xl font-semibold mb-2`
	return (
		<div className="relative">
			<div className="absolute top-[.2rem] left-[-4rem] w-8 h-8 border rounded-full bg-primary-color-light grid place-content-center">
				<Check className="text-white text-xl" />
			</div>
			<h4 className={titleStyles}>{title}</h4>
			<p className={paraStyles} >
            लोरेम इप्सम डोलर सिट एमेट कंसेक्टेटूर एडिपिसिसिंग एलीट। परफेरेंडिस
            सेक्‍सी एस्‍पीरियोरेस ईयूस मोलेस्‍टियास और एक्‍क्यूसेंटियम।
			</p>
		</div>
	);
};

function WhyUs() {
const {theme} = useStore()
	const whyUsStyles = `about-section ${theme? 'bg-slate-800' : 'bg-white' } py-8 px-8 flex flex-col items-center gap-10 lg:flex-row md:py-16 lg:py-20`
	const paraStyles = `w-full ${theme? 'text-white': 'text-slate-700'} lg:w-[90%]`
	return (
		<section
			className={whyUsStyles}
			id="about"
		>
			<div className="flex-1 flex flex-col items-start gap-4 lg:flex-[0.5]">
				<SectionHeading subHeading="WhyUs?" heading="अपनी परियोजनाओं का विवरण प्राप्त करें" />
				<p className={paraStyles} >
                लोरेम इप्सम डोलर सिट एमेट कंसेक्टेटूर एडिपिसिसिंग एलीट। कल्पा ईयूस
                इस्ट डुसीमस ईओएस, परियाटुर लेबर, नेसिटाटिबस एक्सप्लिकाबो रिपुंडिए
                इप्सम कम क्यू हिक पोरो, एनिम एट? कॉर्पोरिस, ईम क्वाराट ईए
                रेप्रेहेंडरिट फुगा क्वो सैप सिंट निसि कमोडी टोटम एस्परियोरेस ओडिट
                मारो!
				</p>
				<Link to="/about-us">
					<Button isPrimary={true}>और ढूंढें</Button>
				</Link>
			</div>

			<div className="flex-[0.5] flex flex-col gap-6 bor border-l pl-12">
				<WhyFeature title="कम लागत" />
				<WhyFeature title="विशेषज्ञों के साथ सीखें" />
				<WhyFeature title="डिफरेंट कोर्स वेरिएशन" />
			</div>
		</section>
	);
}

export default WhyUs;
