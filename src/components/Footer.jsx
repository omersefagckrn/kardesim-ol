import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	const controls = useAnimation();

	useEffect(() => {
		controls.start('visible');
	}, [controls]);

	const footerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' }
		}
	};

	return (
		<motion.footer id='contact' initial='hidden' animate={controls} variants={footerVariants} className='py-20 mt-auto bg-[#34415B] text-white'>
			<div className='container px-6 mx-auto lg:px-0'>
				<div className='flex flex-col items-center justify-between pb-6 mb-6 border-b border-gray-300 lg:flex-row'>
					<div className='text-center lg:text-left'>
						<h2 className='mb-4 text-xl font-semibold'>Bizimle İletişime Geçin</h2>
						<div className='text-gray-50'>Sorularınız veya destek talepleriniz için bizimle iletişime geçmekten çekinmeyin.</div>
					</div>

					<div className='flex flex-col items-center mt-6 lg:items-end lg:mt-0'>
						<a href='tel:+905551234567' className='flex items-center gap-3 font-medium transition hover:text-primary'>
							<FaPhone className='text-primary' />
							+90 555 123 4567
						</a>
						<a href='mailto:info@kardesimol.com' className='flex items-center gap-3 mt-2 font-medium text-white transition hover:text-primary'>
							<FaEnvelope className='text-primary' />
							info@kardesimol.com
						</a>
					</div>
				</div>

				<div className='flex flex-col items-center justify-between lg:flex-row'>
					<div className='mb-4 text-sm text-center lg:mb-0 lg:text-left'>© Kardeşim Ol bir İstanbul İnsani Yardım Derneği projesidir.</div>

					<div className='flex gap-4'>
						<a
							target='_blank'
							href='https://www.instagram.com/kardesimoll/'
							className='p-3 text-white transition rounded-full shadow-md bg-primary hover:bg-primary-dark'
						>
							<FaInstagram />
						</a>
					</div>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
