import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { FaChalkboardTeacher, FaCoffee, FaMapMarkerAlt, FaLeaf } from 'react-icons/fa';

const features = [
	{
		icon: <FaChalkboardTeacher size={40} className='text-secondary' />,
		title: 'Online Mentorlük',
		description: 'Ayda 4 toplam online görüşmeyle, 2 öğrenciye mentorlük desteği sağlıyoruz.'
	},
	{
		icon: <FaCoffee size={40} className='text-secondary' />,
		title: 'Kahve Saati Semineri',
		description: 'Meslek seçimi, meslek hayatı, entelektüel gelişim ve çeşitli konularda gelişim seminerleri düzenli olarak ayda bir gerçekleşir.'
	},
	{
		icon: <FaMapMarkerAlt size={40} className='text-secondary' />,
		title: 'Büyük Buluşma',
		description: 'Tüm mentorlerimizi ve mentilerimizi deprem bölgesinde yüz yüze bir etkinlikte bir araya getiriyoruz.'
	},
	{
		icon: <FaLeaf size={40} className='text-secondary' />,
		title: 'Sürdürülebilirlik',
		description: 'Proje sürecini başarıyla bitiren mentilerimizi burs desteği ile mentorlük yapmaya teşvik ediyoruz.'
	}
];

const About = () => {
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

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
	};

	return (
		<div id='about' className='px-6 py-20'>
			<motion.div ref={ref} initial='hidden' animate={controls} variants={containerVariants} className='container mx-auto'>
				<h2 className='mb-8 text-3xl font-bold text-center text-secondary'>Proje Faaliyetleri</h2>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4'>
					{features.map((feature, index) => (
						<motion.div key={index} variants={itemVariants} className='flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-lg'>
							<motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2, ease: 'easeOut' }} className='mb-4'>
								{feature.icon}
							</motion.div>
							<h3 className='mb-2 text-xl font-semibold text-primary'>{feature.title}</h3>
							<p className='text-gray-700'>{feature.description}</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default About;
