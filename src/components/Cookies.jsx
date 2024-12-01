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
					className='fixed z-50 flex flex-col items-center p-6 mx-4 bg-white rounded-lg shadow-lg bottom-4 lg:right-4 lg:w-96'
				>
					<div className='bg-gradient-to-r from-[#d2b48c] to-[#a0522d] p-3 rounded-full shadow-md mb-4'>
						<FaCookieBite size={32} className='text-white' />
					</div>

					<h2 className='mb-2 text-lg font-bold text-secondary'>Çerez Kullanıyoruz!</h2>
					<p className='mb-4 text-sm text-center text-gray-700'>
						Merhaba, bu web sitesi düzgün çalışmasını sağlamak için gerekli çerezleri ve onunla nasıl etkileşim kurduğunuzu anlamak için çerezleri takip
						eder. İkincisi ancak onay alındıktan sonra belirlenir.
					</p>

					<div className='flex items-center w-full space-x-4'>
						<button onClick={acceptCookies} className='w-full p-3 text-xs text-white transition rounded-lg bg-primary hover:bg-primary-dark'>
							Tümünü Kabul Et!
						</button>
						<button
							onClick={declineCookies}
							className='bg-gradient-to-r from-[#f5f7fa] to-[#c3dfe5] text-gray-700 p-3 w-full rounded-lg text-xs hover:bg-gray-300 transition'
						>
							Tümünü Reddet!
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Cookies;
