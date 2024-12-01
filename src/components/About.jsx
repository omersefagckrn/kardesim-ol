import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaHandshake, FaLightbulb, FaChalkboardTeacher, FaHeart, FaHandsHelping } from 'react-icons/fa';

const features = [
	{
		icon: <FaUsers size={40} className='text-secondary' />,
		title: 'Topluluk',
		description: 'Birbirine destek olan güçlü bir topluluk oluşturuyoruz.'
	},
	{
		icon: <FaHandshake size={40} className='text-secondary' />,
		title: 'Dayanışma',
		description: 'Hedefimiz, dayanışmayı artırarak daha büyük bir etki yaratmak.'
	},
	{
		icon: <FaLightbulb size={40} className='text-secondary' />,
		title: 'Fikir Paylaşımı',
		description: 'Farklı fikirleri bir araya getirerek yenilikçi çözümler sunuyoruz.'
	},
	{
		icon: <FaChalkboardTeacher size={40} className='text-secondary' />,
		title: 'Eğitim',
		description: 'Eğitim odaklı projelerle gençlere destek oluyoruz.'
	},
	{
		icon: <FaHeart size={40} className='text-secondary' />,
		title: 'Bağış',
		description: 'Bağışlarınız sayesinde daha fazla insana ulaşabiliyoruz.'
	},
	{
		icon: <FaHandsHelping size={40} className='text-secondary' />,
		title: 'Yardım',
		description: 'İhtiyaç sahiplerine yardımlarınızı ulaştırıyoruz.'
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
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 }
	};

	return (
		<div id='about' className='px-6 py-20'>
			<motion.div ref={ref} initial='hidden' animate={controls} variants={containerVariants} className='container mx-auto'>
				<h2 className='mb-8 text-3xl font-bold text-center text-secondary'>Neden Kardeşim Ol?</h2>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={{
								y: -5,
								scale: 1.02
							}}
							whileTap={{
								scale: 0.98
							}}
							transition={{
								duration: 0.2,
								ease: 'easeOut'
							}}
							className='flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-lg'
						>
							<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} transition={{ duration: 0.2, ease: 'easeOut' }} className='mb-4'>
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
