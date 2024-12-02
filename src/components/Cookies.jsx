import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCookieBite } from 'react-icons/fa';

const Cookies = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const isCookiesAccepted = localStorage.getItem('cookiesAccepted');
		if (!isCookiesAccepted) {
			setIsVisible(true);
		}
	}, []);

	const acceptCookies = () => {
		localStorage.setItem('cookiesAccepted', 'true');
		setIsVisible(false);
	};

	const declineCookies = () => {
		setIsVisible(false);
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 50 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className='fixed z-50 flex flex-col items-center p-4 mx-4 bg-white rounded-lg shadow-xl bottom-2 lg:right-2 lg:w-80'
				>
					<div className='bg-gradient-to-r from-[#d2b48c] to-[#a0522d] p-2 rounded-full shadow-md mb-3'>
						<FaCookieBite size={24} className='text-white' />
					</div>

					<h2 className='mb-2 text-base font-semibold text-secondary'>Çerez Kullanıyoruz!</h2>
					<p className='mb-3 text-xs text-center text-secondary'>
						Bu site düzgün çalışması için çerezleri kullanır. Deneyiminizi iyileştirmek için çerez kullanımına izin verebilirsiniz.
					</p>

					<div className='flex items-center w-full space-x-2'>
						<button onClick={acceptCookies} className='w-full py-2 text-xs text-white transition rounded-lg bg-primary hover:bg-primary-dark'>
							Kabul Et
						</button>
						<button onClick={declineCookies} className='w-full py-2 text-xs text-gray-700 transition bg-gray-200 rounded-lg hover:bg-gray-300'>
							Reddet
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Cookies;
