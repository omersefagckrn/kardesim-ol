import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBookReader, FaChalkboardTeacher, FaRegSmile, FaUserTie } from 'react-icons/fa';

const courses = [
	{
		title: 'Mentorlük Eğitimi',
		icon: <FaChalkboardTeacher size={35} className='text-secondary' />
	},

	{
		title: 'İletişim Eğitimi',
		icon: <FaRegSmile size={35} className='text-secondary' />
	},
	{
		title: 'YKS Rehberlik Eğitimi',
		icon: <FaBookReader size={35} className='text-secondary' />
	},
	{
		title: 'Liderlik Akademisi',
		icon: <FaUserTie size={35} className='text-secondary' />
	}
];

const CourseBar = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2
	});

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [inView, controls]);

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
	};

	return (
		<div ref={ref} className='container px-6 py-16 mx-auto'>
			<h2 className='mb-10 text-3xl font-bold text-center text-secondary'>Mentorlere Vereceğimiz Eğitimler</h2>
			<motion.div
				initial='hidden'
				animate={controls}
				variants={{
					visible: { transition: { staggerChildren: 0.2 } }
				}}
				className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'
			>
				{courses.map((course, index) => (
					<motion.div
						key={index}
						variants={itemVariants}
						className='flex flex-col items-center justify-center p-6 text-center transition bg-white rounded-lg shadow-xl'
					>
						<div className='mb-4 text-4xl'>{course.icon}</div>
						<h3 className='mb-2 text-xl font-semibold text-secondary'>{course.title}</h3>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default CourseBar;
