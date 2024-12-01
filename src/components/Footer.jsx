import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa';

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
		<motion.footer id='contact' initial='hidden' animate={controls} variants={footerVariants} className=' text-secondary py-20 mt-auto'>
			<div className='container mx-auto px-6 lg:px-0'>
				<div className='flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-6 mb-6'>
					<div className='text-center lg:text-left'>
						<h2 className='text-xl font-semibold mb-4'>Bizimle İletişime Geçin</h2>
						<p className='text-gray-600'>Sorularınız veya destek talepleriniz için bizimle iletişime geçmekten çekinmeyin.</p>
					</div>

					<div className='flex flex-col items-center lg:items-end mt-6 lg:mt-0'>
						<a href='tel:+905551234567' className='flex items-center gap-3 text-gray-600 font-medium hover:text-primary transition'>
							<FaPhone className='text-primary' />
							+90 555 123 4567
						</a>
						<a href='mailto:info@kardesimol.com' className='flex items-center gap-3 mt-2 text-gray-600 font-medium hover:text-primary transition'>
							<FaEnvelope className='text-primary' />
							info@kardesimol.com
						</a>
					</div>
				</div>

				<div className='flex flex-col lg:flex-row justify-between items-center'>
					<div className='text-gray-600 text-sm mb-4 lg:mb-0 text-center lg:text-left'>© Kardeşim Ol bir İstanbul İnsani Yardım Derneği projesidir.</div>

					<div className='flex gap-4'>
						<a href='#' className='bg-primary text-white p-3 rounded-full shadow-md hover:bg-primary-dark transition'>
							<FaFacebookF />
						</a>
						<a href='#' className='bg-primary text-white p-3 rounded-full shadow-md hover:bg-primary-dark transition'>
							<FaInstagram />
						</a>
					</div>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
