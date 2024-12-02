import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChalkboardTeacher } from 'react-icons/fa';

const Hero2 = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: false,
		threshold: 0.2
	});

	React.useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [inView, controls]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: { opacity: 1, y: 0 }
	};

	return (
		<div id='hero' ref={ref} className='flex flex-col items-center w-full px-6 py-12 text-center lg:px-0 bg-primary'>
			<motion.div initial='hidden' animate={controls} variants={containerVariants} className='flex flex-col items-center space-y-4'>
				<motion.h1 className='mb-4 text-xl font-bold text-white lg:text-2xl' variants={itemVariants}>
					Üniversite sınav maratonunda ücretsiz mentorlük almak ister misin ?
				</motion.h1>
				<motion.button className='flex items-center px-6 py-3 space-x-2 font-semibold transition bg-white rounded-lg' variants={itemVariants}>
					<div className='text-secondary'>Ücretsiz Menti Ol</div>
					<FaChalkboardTeacher size={35} className='text-secondary' />
				</motion.button>
			</motion.div>
		</div>
	);
};

export default Hero2;
