import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Banner from './components/Banner';
import Hero from './components/Hero';
import Faq from './components/Faq';
import Cookies from './components/Cookies';
import Testimonials from './components/Testimonials';

const App = () => {
	return (
		<div className='flex flex-col min-h-screen select-none'>
			<Navbar />
			<main className='flex-grow'>
				<Banner />
				<About />
				<Testimonials />
				<Faq />
				<Hero />
			</main>
			<Footer />
			<Cookies />
		</div>
	);
};

export default App;
