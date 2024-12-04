import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParentImage from '../assets/parent-banner-2.jpg';

const ContentSection = () => {
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

	const textVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.6 } }
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
	};

	return (
		<div id='period' className='bg-[#e5ebe5]/50 py-16'>
			<div ref={ref} className='container px-4 mx-auto lg:px-0'>
				<div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
					{/* Resim Alanı */}
					<motion.div className='flex justify-center' initial='hidden' animate={controls} variants={imageVariants}>
						<img src={ParentImage} alt='Destek' className='w-full max-w-md rounded-lg shadow-lg lg:max-w-lg' />
					</motion.div>

					{/* Yazı Alanı */}
					<motion.div className='text-center lg:text-left' initial='hidden' animate={controls} variants={textVariants}>
						<h2 className='mb-4 text-3xl font-bold text-secondary'>Mentorluk Hizmetini Nasıl Sağlıyoruz?</h2>
						<p className='mb-4 text-lg text-gray-700'>
							Mentorlük hizmeti almak isteyen mentiler için hedefledikleri üniversite veya bölüme en uygun mentor ataması yapılır.
						</p>
						<p className='text-lg text-gray-700'>Mentor, iki haftada bir düzenli olarak Zoom üzerinden öğrencilerimizle görüşme gerçekleştirir.</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default ContentSection;
