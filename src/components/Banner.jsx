import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParentBannerLogo from '../assets/parent-banner.png';

const Banner = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: false,
		threshold: 0.1
	});

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [inView, controls]);

	const textVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 1 } }
	};

	return (
		<div id='banner' className='relative overflow-hidden bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] py-40'>
			<div className='absolute inset-0 bg-center bg-no-repeat bg-cover opacity-30' style={{ backgroundImage: `url(${ParentBannerLogo})` }}></div>

			<div className='container relative flex flex-col items-center justify-between gap-12 px-6 mx-auto lg:flex-row lg:px-0'>
				<motion.div ref={ref} className='z-10 flex flex-col w-full gap-6 pt-10 lg:w-1/2' initial='hidden' animate={controls} variants={textVariants}>
					<div className='p-4 text-white rounded-lg shadow-lg bg-primary w-fit'>
						<span className='text-sm tracking-wider uppercase'>Destek Projesi</span>
					</div>
					<h1 className='text-4xl font-extrabold leading-tight lg:text-5xl text-secondary'>
						Birlikte <span className='text-primary'>Daha Güçlü</span> Olabiliriz
					</h1>
					<p className='text-lg leading-relaxed text-gray-700 lg:text-xl'>
						Toplumsal dayanışmayı artırarak, gençlere eğitim fırsatları sunan bir projeyiz. Geleceğe umutla bakmak için siz de bize katılabilirsiniz!
					</p>
					<ul className='pl-6 space-y-2 text-gray-700 list-disc'>
						<li>Toplumsal yardımlaşma ve dayanışma.</li>
						<li>İhtiyaç sahiplerine rehberlik desteği.</li>
						<li>Hedeflere ulaşmak için güçlü bir topluluk.</li>
					</ul>
					<div className='flex gap-4 mt-4'>
						<motion.button
							className='px-6 py-3 font-medium text-white transition rounded-lg shadow-lg bg-primary hover:bg-primary-dark'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Hemen Katıl
						</motion.button>
						<motion.button
							className='px-6 py-3 font-medium transition bg-white border rounded-lg shadow-lg text-primary border-primary hover:bg-gray-100'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Detayları Gör
						</motion.button>
					</div>
				</motion.div>

				<motion.div className='relative z-10 flex justify-center w-full lg:w-1/2' initial='hidden' animate={controls} variants={textVariants}>
					<div className='relative'>
						<img src={ParentBannerLogo} alt='Banner' className='w-full rounded-lg shadow-lg lg:max-w-xl' />
						<motion.div
							className='absolute w-full h-full max-w-xs rounded-full -top-6 -left-6 max-h-xs bg-primary'
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 0.1, scale: 1.2 }}
							transition={{ duration: 1.5, ease: 'easeOut' }}
							style={{ zIndex: -1 }}
						></motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Banner;
