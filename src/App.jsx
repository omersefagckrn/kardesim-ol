import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Banner from './components/Banner';
import Hero from './components/Hero';
import Faq from './components/Faq';
import Cookies from './components/Cookies';
import ContentSection from './components/ContentSection';
import CourseBar from './components/CourseBar';
import CourseBarMentor from './components/CourseBarMentor';
import { motion } from 'framer-motion';
import { FaHourglass } from 'react-icons/fa';

const App = () => {
	const sandParticles = Array.from({ length: 10 }); // 10 tane kum tanesi oluştur
	return (
		<div className='flex flex-col min-h-screen select-none'>
			<Navbar />
			<main className='flex-grow'>
				<Banner />
				<About />
				<ContentSection />
				<div id='support'>
					<CourseBar />
					<Hero />
					<CourseBarMentor />
				</div>
				<Faq />
			</main>
			<Footer />
			<Cookies />
		</div>
	);
};

export default App;
