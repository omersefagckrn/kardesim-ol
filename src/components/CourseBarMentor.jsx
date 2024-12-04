import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { FaLaptop, FaTabletAlt, FaUserFriends, FaClipboardList } from 'react-icons/fa';

const courses = [
	{
		title: 'Eğitim Portalı',
		icon: <FaLaptop size={35} className='text-white' />
	},
	{
		title: 'Tablet Desteği',
		icon: <FaTabletAlt size={35} className='text-white' />
	},
	{
		title: 'Mentor Rehberliği',
		icon: <FaUserFriends size={35} className='text-white' />
	},
	{
		title: 'Deneme Sınavı Kulübü',
		icon: <FaClipboardList size={35} className='text-white' />
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
		<div ref={ref} className='container px-6 py-16 mx-auto'>
			<h2 className='mb-10 text-3xl font-bold text-center text-secondary'>Mentilere Vereceğimiz Destek</h2>
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
						className='flex flex-col items-center justify-center p-6 text-center transition rounded-lg shadow-xl bg-secondary '
					>
						<div className='mb-4 text-4xl'>{course.icon}</div>
						<h3 className='mb-2 text-xl font-semibold text-white'>{course.title}</h3>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default CourseBarMentor;
