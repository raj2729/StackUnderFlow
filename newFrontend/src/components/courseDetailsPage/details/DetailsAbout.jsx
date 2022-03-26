import CourseSkills from '../CourseSkills';

function DetailsAbout() {
	return (
		<section id="about">
			<h2 className="uppercase font-semibold text-lg">About this Project</h2>
			<p className="mt-2 ">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
				dolorem explicabo voluptate voluptatibus quos reprehenderit expedita,
				tenetur ipsam maxime adipisci? Lorem ipsum, dolor sit amet consectetur
				adipisicing elit. Placeat aliquid nesciunt nemo hic enim culpa odit esse
				accusantium nihil. Perspiciatis.
			</p>
			<p className="mt-1">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis
				nesciunt nobis dolor ipsa aspernatur impedit corporis cum sed inventore.
			</p>
			<CourseSkills />
		</section>
	);
}

export default DetailsAbout;
