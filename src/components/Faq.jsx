import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqData = [
	{
		question: 'Kardeşim Ol Projesi Nedir?',
		answer: 'Asrın felaketinde ebeveynlerinden en az birisini kaybetmiş 12.sınıf öğrencilere, üniversite öğrencileriyle 2 yılık süre zarfınca dostluk ve kardeşlik esasıyla kurulan bir bağdır. (1+1: Üniversite sınav (YKS) rehberliği, üniversite adaptasyonu ve kişisel gelişim)'
	},
	{
		question: 'Kardeşim Ol Projesinin amacı nedir?',
		answer: [
			'Kardeşlik ve dostluk bağları kurarak depremin oluşturduğu yaraları hep birlikte sarmak.',
			'YKS maratonu süresince mentiyi maddi ve manevi desteklemek.',
			'Kırsaldaki başarı potansiyeli yüksek öğrencileri destekleyerek eğitimde fırsat eşitliği sağlayabilmek.',
			'Mentorlerin kişisel gelişimine katkıda bulunmak',
			'Toplumsal farkındalığı ve duyarlılığı artırmak',
			'Proje ekosisteminin büyümesiyle mezunlara ve mensuplara fırsatlar sunmak'
		]
	},
	{
		question: 'Kimler mentor olabilir?',
		answer: 'İletişim becerileri yüksek, mentorlük ilişkisini yürütebilecek olgunluğa sahip üniversite 2, 3 ve 4. Sınıf öğrenciler'
	},
	{
		question: 'Kimler Menti Olabilir?',
		answer: 'Depremde ebeveynlerinden birisini kaybetmiş, Hatay ve Adıyaman’daki 12. Sınıf öğrenciler'
	},
	{
		question: 'Mentor veya Menti Olarak Nasıl Başvurabilirim?',
		answer: 'Sitemizdeki Mentor ol ve menti ol butonlarına tıklayarak ilgili formu doldurabilirsiniz.'
	},
	{
		question: 'Başvuru Süreci Ne Kadar Sürer?',
		answer: 'Başvurular genellikle 2-4 hafta içinde değerlendirilir ve size mail veya arama ile geri dönüş yapılır.'
	},
	{
		question: 'Mentor ve Menti Nasıl Eşleştiriliyor?',
		answer: 'Mentinin hedeflediği üniversite / bölüm ve ilgi alanları üzerinden en uygun mentor&menti eşleştirmesi yapılır.'
	},
	{
		question: 'Görüşmeler Nerede ve Nasıl Yapılıyor?',
		answer: 'Görüşmeler online şekilde yapılacak. Bir kere de deprem bölgesinde yüz yüze yapılacak.'
	},
	{
		question: 'Mentorün sorumluluğu nedir?',
		answer: 'Mentorlük yaptığı 2 menti ile 2 haftada bir (ayda toplam 4 görüşme) online görüşme yapar. Bu görüşmelere yönelik gündemlerimiz ve hazırlayacağı içerikler doğrultusunda menti ile sohbetler eder. Mentinin akademik ilerleyişi takip ederek eksikliklerini tespit ederek tecrübelerinden yola çıkarak yönlendirmeler yapar.'
	}
];

const sections = [
	{
		title: 'Genel Sorular',
		questions: faqData.slice(0, 4)
	},
	{
		title: 'Başvuru Süreci',
		questions: faqData.slice(4, 6)
	},
	{
		title: 'Mentörlük Süreci',
		questions: faqData.slice(6, 9)
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
		<div id='faq' className='px-6 py-20 bg-[#e5ebe5]/50'>
			<motion.div ref={ref} initial='hidden' animate={controls} variants={containerVariants} className='container mx-auto'>
				<h2 className='mb-8 text-3xl font-bold text-center text-secondary'>Sıkça Sorulan Sorular</h2>
				{sections.map((section, sectionIndex) => (
					<div key={sectionIndex} className='mb-10'>
						<h3 className='mb-6 text-2xl font-bold text-primary'>{section.title}</h3>
						<div className='space-y-6'>
							{section.questions.map((faq, index) => (
								<motion.div key={index} variants={itemVariants} className='pb-5 border-b border-gray-400'>
									<button
										onClick={() => toggleFaq(index + sectionIndex * 10)}
										className='flex items-center justify-between w-full font-semibold text-left text-md lg:text-lg text-secondary focus:outline-none'
									>
										{faq.question}
										<motion.span transition={{ duration: 0.3 }} className='text-xl font-bold'>
											{openIndex === index + sectionIndex * 10 ? '-' : '+'}
										</motion.span>
									</button>

									<AnimatePresence initial={false}>
										{openIndex === index + sectionIndex * 10 && (
											<motion.div
												key={index}
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: 'auto', opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.35, ease: 'easeInOut' }}
												className='overflow-hidden'
											>
												{Array.isArray(faq.answer) ? (
													<ul className='mt-2 text-gray-700 list-disc list-inside text-opacity-80'>
														{faq.answer.map((item, idx) => (
															<li key={idx}>{item}</li>
														))}
													</ul>
												) : (
													<p className='mt-2 text-gray-700 text-opacity-80'>{faq.answer}</p>
												)}
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							))}
						</div>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default Faq;
