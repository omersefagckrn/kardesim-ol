import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { FaChalkboardTeacher, FaTabletAlt, FaUserGraduate, FaFileAlt } from 'react-icons/fa';

const courses = [
	{
		title: 'Eğitim Portalı',
		icon: <FaChalkboardTeacher size={35} className='text-primary' /> // Eğitim ve öğretimi simgeler
	},

	{
		title: 'Tablet',
		icon: <FaTabletAlt size={35} className='text-primary' /> // Tablet kullanımını simgeler
	},
	{
		title: 'Mentör Rehberliği',
		icon: <FaUserGraduate size={35} className='text-primary' /> // Öğrenci ve mentörlük desteğini simgeler
	},
	{
		title: 'Deneme Sınavı Kulubü',
		icon: <FaFileAlt size={35} className='text-primary' /> // Sınav ve değerlendirmeyi simgeler
	}
];

const CourseBarMentor = () => {
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
		<div ref={ref} className='container px-6 py-16 mx-auto lg:px-0'>
			<h2 className='mb-10 text-3xl font-bold text-center text-primary'>Mentilere Vereceğimiz Destek</h2>
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
						className='flex flex-col items-center justify-center p-6 text-center transition bg-white rounded-lg shadow-lg hover:shadow-xl '
					>
						<div className='mb-4 text-4xl'>{course.icon}</div>
						<h3 className='mb-2 text-xl font-semibold text-secondary'>{course.title}</h3>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default CourseBarMentor;
