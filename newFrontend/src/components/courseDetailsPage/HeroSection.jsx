import { useState, Children , useEffect} from 'react';
import { createPortal } from 'react-dom';
import Button from '../../UI/Button';
import CourseVideo from '../chapter/CourseVideo';
import Overlay from '../../UI/Overlay';

function HeroSection({ course }) {
	const [openCourse, setOpenCourse] = useState(false);
	const [isNotSubcribed,setNotSubcribed] = useState(false);

	const openCourseHandler = () => {
		setOpenCourse(true);
	};

	const closeCourseHandler = () => {
		setOpenCourse(false);
	};

	useEffect(()=>{
		if(openCourse){
			document.body.style='overflow:hidden;'
		}else{
			document.body.style='overflow:auto;'

		}
	},[openCourse])

	console.log(course);
	// { backgroundImage: `url(${course?.image})` }
	return (
		<>
			<div className="details-hero h-auto overflow-hidden bg-center bg-fixed bg-no-repeat bg-cover flex flex-col justify-between items-center px-16 md:flex-row md:h-[60vh] md:gap-4">
				<div className="flex flex-col items-start sm:w-full backdrop-blur-[100px] py-8 sm:rounded-xl ">
					<div className="mb-7">
						<h1 className="text-4xl font-bold text-white uppercase tracking-wide">
							SunView Heights
						</h1>
						<p className="text-xl text-white">Skyscraper in the making in Andheri.</p>
					</div>

					<div className="">
						<div className="my-4 flex flex-wrap items-center gap-2">
							{Children.toArray(
								course?.advantages?.map(a => {
									return (
										<span className="inline-block rounded-full bg-white px-4 py-1 text-slate-700">
											{a.advantageName}
										</span>
									);
								}),
							)}
						</div>
						{/* { isNotSubcribed ?
							<Button isPrimary={true} onClick={openCourseHandler}>
								Get started
							</Button>
							:
							<Button isPrimary={true}>
								Enroll
							</Button>
						} */}
						<Button onClick={openCourseHandler} isPrimary={true}>
								Enroll
							</Button>
					</div>
				</div>
				<div
					className="bg-cover bg-no-repeat bg-center rounded-md relative overflow-hidden after:absolute after:top-0 after:left-0 after:w-full after:h-full after:mix-blend-multiply after:bg-gray-600 after:opacity-0 md:h-[50%] md:w-[80%] lg:h-[80%] lg:w-full"
					style={{ backgroundImage: `url(https://media.istockphoto.com/photos/tower-crane-and-building-construction-site-silhouette-at-sunrise-picture-id1226870245?k=20&m=1226870245&s=612x612&w=0&h=yEyhXFebKnZsLll7m4gt6OZCOG1rc5L6Q0rcteCuRxA=)` }}
				></div>
			</div>
			{openCourse &&
				createPortal(
					<CourseVideo closeModal={closeCourseHandler} />,
					document.getElementById('video-section'),
				)}
			{openCourse &&
				createPortal(
					<Overlay clickHandler={closeCourseHandler} />,
					document.getElementById('overlay'),
				)}
		</>
	);
}

export default HeroSection;
