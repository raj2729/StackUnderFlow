import HeaderHindi from '../components/header/HeaderHindi';

import Teachers from '../components/Teachers';
import WhyUsHindi from '../components/WhyUsHindi';
import PopularCourses from '../components/PopularCourses';
import Courses from "../components/Courses"
import AllCourses from "../components/courses/AllCourses";
import CourseCard from '../components/courses/CourseCard';
import Button from '../UI/Button';
import SectionHeading from '../UI/SectionHeading';
import { Link } from 'react-router-dom';
// import Link from 'react-router-dom'

const HomeHindi = () => {
	return (
		<>
			<HeaderHindi />
			<WhyUsHindi />
			{/* <PopularCourses /> */}
			<h1 style={{fontSize:"30px", fontWeight:"bold", backgroundColor:"white", paddingLeft:"100px"}}>चल रहे निर्माण परियोजनाएं</h1>
			<AllCourses />
			<div className="text-center pt-8" style={{backgroundColor:"white"}}>
				<Link to="/all-courses">
					<Button isOutline={true} textPrimary={true}>
                        और देखें
					</Button>
				</Link>
			</div>
			<Teachers />
          
		</>
	);
};
export default HomeHindi;
