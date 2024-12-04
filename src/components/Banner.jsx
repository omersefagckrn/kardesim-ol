import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParentBannerLogo from '../assets/parent-banner.png';
import { HashLink } from 'react-router-hash-link';

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

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
	};

	const scrollWithOffset = (el) => {
		const yOffset = -80;
		const yCoordinate = el.getBoundingClientRect().top + window.scrollY + yOffset;
		window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
	};

	return (
		<div id='banner' className='relative py-56 overflow-hidden bg-gradient-to-b from-[#f5f7fa] to-[#e1e8ed]'>
			<div className='container relative flex flex-col items-center justify-between gap-12 px-6 mx-auto lg:flex-row'>
				<motion.div className='relative z-10 flex justify-center order-1 w-full lg:order-2 lg:w-1/2' initial='hidden' animate={controls} variants={imageVariants}>
					<div className='relative max-w-full lg:max-w-2xl'>
						<img src={ParentBannerLogo} alt='Banner' className='w-full h-auto rounded-lg shadow-lg' />
					</div>
				</motion.div>

				<motion.div ref={ref} className='z-10 flex flex-col order-2 w-full gap-6 pt-10 lg:order-1 lg:w-1/2' initial='hidden' animate={controls} variants={textVariants}>
					<h1 className='text-4xl font-extrabold leading-tight text-center lg:text-left lg:text-5xl text-secondary'>
						Asrın Felaketinin Yaralarını <span className='text-primary'>Beraber</span> Saralım
					</h1>

					<p className='text-lg leading-relaxed text-center text-gray-700 lg:text-left lg:text-xl'>
						<strong>Kardeşim Ol</strong> projesi kapsamında <strong>30 mentor</strong> ve <strong>60 menti</strong> arıyoruz.
					</p>
					<div className='flex flex-col gap-4 lg:flex-row'>
						<HashLink to='#hero' scroll={(el) => scrollWithOffset(el)}>
							<motion.button
								className='w-full px-6 py-3 font-medium text-white transition rounded-lg shadow-lg bg-primary lg:w-auto hover:scale-105'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Gönüllü Mentor Ol
							</motion.button>
						</HashLink>
						<HashLink to='#hero' scroll={(el) => scrollWithOffset(el)}>
							<motion.button
								className='w-full px-6 py-3 font-medium text-white transition rounded-lg shadow-lg bg-secondary lg:w-auto hover:scale-105'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Ücretsiz Menti Ol
							</motion.button>
						</HashLink>
					</div>
					<ul className='pl-0 mt-2 space-y-2 text-center lg:text-left'>
						<li className='text-lg leading-relaxed text-gray-700 lg:text-xl'>
							<span className='font-semibold text-secondary'>Mentor:</span> Üniversite 2. 3. ve 4. Sınıf Öğrencileri
						</li>
						<li className='text-lg leading-relaxed text-gray-700 lg:text-xl'>
							<span className='font-semibold text-secondary'>Menti:</span> Depremden etkilenmiş 12. Sınıf Öğrencileri
						</li>
					</ul>
				</motion.div>
			</div>
		</div>
	);
};

export default Banner;
