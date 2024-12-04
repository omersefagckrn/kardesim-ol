import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import ParentLogo from '../assets/parent-logo.png';

const newsData = [
	{
		title: '20.11.2024',
		description: 'Mentor başvurularımız başladı.'
	}
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isBulletinOpen, setIsBulletinOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [menuOpen]);

	const scrollWithOffset = (el) => {
		const yOffset = -80;
		const yCoordinate = el.getBoundingClientRect().top + window.scrollY + yOffset;
		window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
	};

	return (
		<>
			<motion.nav className='fixed top-0 left-0 z-50 w-full bg-[#34415B] shadow-lg' initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
				<div className='container mx-auto px-6 py-6 flex justify-between items-center h-[80px]'>
					<HashLink to='#banner' smooth>
						<img src={ParentLogo} alt='Logo' className='w-44' />
					</HashLink>

					<div className='lg:hidden'>
						{menuOpen ? (
							<FiX size={30} className='text-white cursor-pointer' onClick={toggleMenu} />
						) : (
							<FiMenu size={30} className='text-white cursor-pointer' onClick={toggleMenu} />
						)}
					</div>

					<div className='hidden space-x-6 lg:flex'>
						<HashLink to='#banner' className='text-white transition hover:text-primary' smooth>
							Anasayfa
						</HashLink>
						<HashLink scroll={(el) => scrollWithOffset(el)} to='#about' className='text-white transition hover:text-primary' smooth>
							Faaliyetlerimiz
						</HashLink>
						<HashLink scroll={(el) => scrollWithOffset(el)} to='#period' className='text-white transition hover:text-primary' smooth>
							Sürecimiz
						</HashLink>
						<HashLink scroll={(el) => scrollWithOffset(el)} to='#support' className='text-white transition hover:text-primary' smooth>
							Desteklerimiz
						</HashLink>
						<HashLink scroll={(el) => scrollWithOffset(el)} to='#faq' className='text-white transition hover:text-primary' smooth>
							Sıkça Sorulan Sorular
						</HashLink>
						<HashLink to='#contact' className='text-white transition hover:text-primary' smooth>
							İletişim
						</HashLink>
					</div>
				</div>
			</motion.nav>

			{/* Mobil Menü */}
			{menuOpen && (
				<div className='fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 text-white bg-primary'>
					<HashLink to='#banner' className='text-lg font-medium transition' smooth onClick={() => setMenuOpen(false)}>
						Anasayfa
					</HashLink>
					<HashLink scroll={(el) => scrollWithOffset(el)} to='#about' className='text-lg font-medium transition' smooth onClick={() => setMenuOpen(false)}>
						Faaliyetlerimiz
					</HashLink>
					<HashLink scroll={(el) => scrollWithOffset(el)} to='#period' className='text-lg font-medium transition' smooth onClick={() => setMenuOpen(false)}>
						Sürecimiz
					</HashLink>
					<HashLink scroll={(el) => scrollWithOffset(el)} to='#support' className='text-lg font-medium transition' smooth onClick={() => setMenuOpen(false)}>
						Desteklerimiz
					</HashLink>
					<HashLink scroll={(el) => scrollWithOffset(el)} to='#faq' className='text-lg font-medium transition' smooth onClick={() => setMenuOpen(false)}>
						Sıkça Sorulan Sorular
					</HashLink>
					<HashLink to='#contact' className='text-lg font-medium transition' smooth onClick={() => setMenuOpen(false)}>
						İletişim
					</HashLink>
				</div>
			)}

			<div className='fixed z-50 bottom-6 right-6'>
				<div className='p-4 rounded-full shadow-lg cursor-pointer bg-secondary' onClick={() => setIsBulletinOpen(!isBulletinOpen)}>
					<FaEnvelope size={24} className='text-white' />
				</div>
				{isBulletinOpen && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.5 }}
						className='absolute right-0 p-4 bg-white rounded-lg shadow-lg bottom-20 w-72'
					>
						<h3 className='mb-4 text-lg font-bold text-secondary'>Haber Bülteni</h3>
						<motion.div
							initial='hidden'
							animate='visible'
							variants={{
								hidden: { opacity: 0 },
								visible: {
									opacity: 1,
									transition: {
										staggerChildren: 0.2
									}
								}
							}}
							className='space-y-3'
						>
							{newsData.map((news, index) => (
								<motion.div
									key={index}
									className='flex items-start space-x-2'
									variants={{
										hidden: { opacity: 0, x: -10 },
										visible: { opacity: 1, x: 0 }
									}}
								>
									<FaCheckCircle size={16} className='flex-shrink-0 mt-1 text-green-500' />
									<div>
										<h4 className='font-medium text-md text-primary'>{news.title}</h4>
										<p className='text-sm text-gray-700'>{news.description}</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				)}
			</div>

			{menuOpen && <div className='fixed inset-0 z-30 bg-black bg-opacity-50' onClick={() => setMenuOpen(false)}></div>}
		</>
	);
};

export default Navbar;
