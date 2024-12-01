import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ParentLogo from '../assets/parent-logo.png';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

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
				<div className='container mx-auto px-6 lg:px-0 py-6 flex justify-between items-center h-[80px]'>
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
							Hakkımızda
						</HashLink>
						<HashLink scroll={(el) => scrollWithOffset(el)} to='#comment' className='text-white transition hover:text-primary' smooth>
							Yorumlarınız
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

			{menuOpen && (
				<div className='fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-primary'>
					<HashLink to='#banner' className='text-lg font-medium text-white transition' smooth onClick={() => setMenuOpen(false)}>
						Anasayfa
					</HashLink>
					<HashLink
						scroll={(el) => scrollWithOffset(el)}
						to='#about'
						className='text-lg font-medium text-white transition'
						smooth
						onClick={() => setMenuOpen(false)}
					>
						Hakkımızda
					</HashLink>
					<HashLink
						scroll={(el) => scrollWithOffset(el)}
						to='#comment'
						className='text-lg font-medium text-white transition'
						smooth
						onClick={() => setMenuOpen(false)}
					>
						Yorumlarınız
					</HashLink>
					<HashLink
						scroll={(el) => scrollWithOffset(el)}
						to='#faq'
						className='text-lg font-medium text-white transition'
						smooth
						onClick={() => setMenuOpen(false)}
					>
						Sıkça Sorulan Sorular
					</HashLink>
					<HashLink to='#contact' className='text-lg font-medium text-white transition' smooth onClick={() => setMenuOpen(false)}>
						İletişim
					</HashLink>
				</div>
			)}

			{/* Arka Plan Kapatıcı */}
			{menuOpen && <div className='fixed inset-0 z-30 bg-black bg-opacity-50' onClick={() => setMenuOpen(false)}></div>}
		</>
	);
};

export default Navbar;
