import CourseCard from '../courses/CourseCard';
import useStore from '../../context/useStore';

function RelatedCourses() {
	// for testing purpose api data
	const { frontendCourses } = useStore();
	return (
		<section className="section-related-course h-screen bg-primary-color-dark skew-y-[-5deg] mt-[-5rem] flex flex-col justify-center items-center px-16">
			<h2 className="text-white skew-y-[5deg] font-bold mb-12 text-3xl sm:text-4xl md:text-5xl">
				Related Projects
			</h2>
			<div className="grid grid-cols-4 gap-4 skew-y-[5deg]  w-full">
				{frontendCourses.data
					.filter((_, index) => index < 4)
					.map((course, i) => {
						return (
							<CourseCard
								key={course.name + course.type + i}
								image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBTq8c0--N613w4uVdnKZIEOQyreXt98jWQ&usqp=CAU"
								// image={course.image}
								title={course.name}
								tagline={course.tagline}
								price={course.price}
								type={course.type}
								description={course.description}
							/>
						);
					})}
			</div>
		</section>
	);
}

export default RelatedCourses;
