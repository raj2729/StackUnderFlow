import Header from '../components/header/Header';

import Teachers from '../components/Teachers';
import WhyUs from '../components/WhyUs';
import PopularCourses from '../components/PopularCourses';
import Courses from "../components/Courses"
import AllCourses from "../components/courses/AllCourses";
import CourseCard from '../components/courses/CourseCard';
import Button from '../UI/Button';
import SectionHeading from '../UI/SectionHeading';
import { Link } from 'react-router-dom';
// import Link from 'react-router-dom'

const Home = () => {
	return (
		<>
			<Header />
			<WhyUs />
			{/* <PopularCourses /> */}
			<h1 style={{fontSize:"30px", fontWeight:"bold", backgroundColor:"white", paddingLeft:"100px"}}>Ongoing Construction Projects</h1>
			<AllCourses />
			<div className="text-center pt-8" style={{backgroundColor:"white"}}>
				<Link to="/all-courses">
					<Button isOutline={true} textPrimary={true}>
						See More
					</Button>
				</Link>
			</div>
			<Teachers />
		</>
	);
};
export default Home;
