import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChalkboardTeacher } from 'react-icons/fa';

const Hero = () => {
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
		<div id='hero' ref={ref} className='flex flex-col items-center w-full px-6 py-12 text-center bg-primary'>
			<motion.div initial='hidden' animate={controls} variants={containerVariants} className='flex flex-col items-center space-y-4'>
				<motion.h1 className='mb-4 text-xl font-bold text-secondary lg:text-2xl' variants={itemVariants}>
					Depremden etkilenmiş gençlere destek olurken, kişisel gelişimine katkı sağlamak ister misin ?
				</motion.h1>
				<a target='_blank' href='https://docs.google.com/forms/d/1mUj818RNHpYyyR-zCyZF2WyKLDPm5vS46TR4YZX_93Y/edit' alt='GONULLU MENTOR OL'>
					<motion.button className='flex items-center px-6 py-3 space-x-2 font-semibold text-white transition rounded-lg bg-secondary' variants={itemVariants}>
						Gönüllü Mentor Ol
						<FaChalkboardTeacher size={35} className='text-white' />
					</motion.button>
				</a>
			</motion.div>
		</div>
	);
};

export default Hero;
