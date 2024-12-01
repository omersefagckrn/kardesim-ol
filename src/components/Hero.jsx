import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
		<div ref={ref} className='flex flex-col items-center text-center px-6 lg:px-0 py-16 w-full bg-gradient-to-r from-[#f5f7fa] to-[#c3dfe5]'>
			<motion.div initial='hidden' animate={controls} variants={containerVariants} className='flex flex-col items-center'>
				<motion.h1 className='mb-4 text-2xl font-bold lg:text-3xl text-secondary' variants={itemVariants}>
					Baykuş’a katıl, tam potansiyeline beraber ulaşalım.
				</motion.h1>

				<motion.p className='max-w-2xl mb-8 text-gray-700 text-md lg:text-lg opacity-80' variants={itemVariants}>
					YKS sürecinde maksimum verimde çalışmak, zamanını en iyi şekilde yönetmek ve hedeflerine daha kolay ulaşmak için şimdi bizimle iletişime geç.
				</motion.p>

				<motion.button className='px-6 py-3 font-medium text-white transition rounded-lg bg-secondary' variants={itemVariants}>
					Bize Ulaş
				</motion.button>
			</motion.div>
		</div>
	);
};

export default Hero;
