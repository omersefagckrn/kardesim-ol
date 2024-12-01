import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqData = [
	{
		question: "Baykuş App'e nasıl giriş yapacağım?",
		answer: "Baykuş App'e kayıt olduktan sonra kullanıcı adı ve şifrenizle giriş yapabilirsiniz."
	},
	{
		question: "Kayıt olduktan sonra Baykuş App'i nasıl kullanacağım?",
		answer: "Baykuş App'te profilinizi oluşturduktan sonra mentörlerle görüşme ayarlayabilirsiniz."
	},
	{
		question: 'Ödeme yaptıktan sonra süreç nasıl işliyor?',
		answer: 'Ödeme tamamlandıktan sonra size özel bir mentör atanır ve görüşme günleriniz belirlenir.'
	},
	{
		question: 'Baykuş Deneme Kulübü Nasıl İşliyor?',
		answer: 'Deneme kulübünde farklı derslerden deneme sınavlarına katılarak kendinizi test edebilirsiniz.'
	},
	{
		question: 'Görüşme Günleri Nasıl Belirleniyor?',
		answer: 'Mentörünüzle karşılıklı uygunluk durumuna göre görüşme günleri belirlenir.'
	}
];

const Faq = () => {
	const [openIndex, setOpenIndex] = useState(null);
	const controls = useAnimation();
	const { ref, inView } = useInView({
		triggerOnce: false,
		threshold: 0.2
	});

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [inView, controls]);

	const toggleFaq = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.2
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 }
	};

	return (
		<div id='faq' className='px-6 lg:px-0 py-20'>
			<motion.div ref={ref} initial='hidden' animate={controls} variants={containerVariants} className='container mx-auto'>
				<h2 className='text-3xl font-bold text-secondary text-center mb-8'>Sıkça Sorulan Sorular</h2>
				<div className='space-y-6'>
					{faqData.map((faq, index) => (
						<motion.div key={index} variants={itemVariants} className='border-b pb-5 border-gray-400'>
							<button
								onClick={() => toggleFaq(index)}
								className='w-full flex justify-between items-center text-left text-md lg:text-lg font-semibold text-secondary focus:outline-none'
							>
								{faq.question}
								<motion.span transition={{ duration: 0.3 }} className='text-xl font-bold'>
									{openIndex === index ? '-' : '+'}
								</motion.span>
							</button>

							<AnimatePresence initial={false}>
								{openIndex === index && (
									<motion.div
										key={index}
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.35, ease: 'easeInOut' }}
										className='overflow-hidden'
									>
										<p className='text-gray-700 text-opacity-80 mt-2'>{faq.answer}</p>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Faq;
