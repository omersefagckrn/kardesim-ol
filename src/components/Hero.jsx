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
		<div id='hero' ref={ref} className='flex flex-col items-center w-full px-6 py-12 text-center lg:px-0 bg-primary'>
			<motion.div initial='hidden' animate={controls} variants={containerVariants} className='flex flex-col items-center'>
				<motion.h1 className='mb-4 text-2xl font-bold text-white lg:text-3xl' variants={itemVariants}>
					Baykuş’a katıl, tam potansiyeline beraber ulaşalım.
				</motion.h1>

				<motion.p className='max-w-2xl mb-8 font-normal text-white text-md lg:text-lg opacity-80' variants={itemVariants}>
					YKS sürecinde maksimum verimde çalışmak, zamanını en iyi.
				</motion.p>
				<div className='flex items-center justify-start space-x-4'>
					<motion.button className='px-6 py-3 font-bold text-white transition rounded-lg bg-secondary' variants={itemVariants}>
						Gönüllü Mentör Ol
					</motion.button>

					<motion.button className='px-6 py-3 font-bold transition bg-white rounded-lg text-secondary' variants={itemVariants}>
						Ücretsiz Mentör Ol
					</motion.button>
				</div>
			</motion.div>
		</div>
	);
};

export default Hero;
