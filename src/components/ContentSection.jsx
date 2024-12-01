import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParentImage from '../assets/parent-banner-2.jpg'; // Resim dosyanızı buraya ekleyin

const ContentSection = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView({
		triggerOnce: true, // Animasyon bir kez tetiklensin
		threshold: 0.2 // %20 görünür olduğunda başlasın
	});

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [inView, controls]);

	const textVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
	};

	const imageVariants = {
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
	};

	return (
		<div ref={ref} className='container px-6 py-16 mx-auto lg:px-0'>
			<div className='grid items-center grid-cols-1 gap-8 lg:grid-cols-2'>
				{/* Sol Taraf - Yazı */}
				<motion.div className='text-center lg:text-left' initial='hidden' animate={controls} variants={textVariants}>
					<h2 className='mb-4 text-3xl font-bold text-secondary'>Destekle Daha Güçlü Olabiliriz</h2>
					<p className='mb-6 text-lg leading-relaxed text-secondary/70'>
						Toplumsal dayanışmayı artırarak, gençlere eğitim fırsatları sunuyoruz. Geleceğe umutla bakmak ve daha güçlü bir toplum inşa etmek için
						katılın!Toplumsal dayanışmayı artırarak, gençlere eğitim fırsatları sunuyoruz. Geleceğe umutla bakmak ve daha güçlü bir toplum inşa etmek
						için katılın!Toplumsal dayanışmayı artırarak, gençlere eğitim fırsatları sunuyoruz. Geleceğe umutla bakmak ve daha güçlü bir toplum inşa
						etmek için katılın!
					</p>
				</motion.div>

				{/* Sağ Taraf - Resim */}
				<motion.div className='flex justify-center' initial='hidden' animate={controls} variants={imageVariants}>
					<img src={ParentImage} alt='Destek' className='w-full max-w-xl rounded-lg shadow-lg' />
				</motion.div>
			</div>
		</div>
	);
};

export default ContentSection;