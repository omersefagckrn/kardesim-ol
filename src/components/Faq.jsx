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
			'Kırsaldaki başarı potansiyeli yüksek öğrencileri destekleyerek eğitimde fırsat eşitliği sağlayabilmek.'
		]
	},
	{
		question: 'Mentor atamaları nasıl gerçekleşiyor?',
		answer: 'Mentinin hedeflediği üniversite/bölüm doğrultusunda en uygun mentorümüzü mentiye atarız.'
	},
	{
		question: 'Mentorler ne yapacak?',
		answer: 'Mentorlük yaptığı 2 menti ile ayda 2 kere online 2 kere sesli görüşür. Mentorler aylık gündemler doğrultusunda menti ile sohbet eder. Mentinin akademik ilerleyişi takip ederek eksikliklerini tespit ederek tecrübelerinden yola çıkarak yönlendirmeler yapar.'
	},
	{
		question: 'Başvurular ne sıklıkla açılıyor?',
		answer: 'Her sene yaz bitiminden sonra başvurular önce mentor sonra menti için açılıyor.'
	},
	{
		question: 'Başvurum süreci nasıl işler?',
		answer: [
			'Başvurular ekibimizce incelendikten sonra mail üzerinden sürecin devamıyla ilgili bilgilendirme yapıyoruz.',
			'kardesimol.com üzerinden mentor ve menti için hazırladığımız formu doldurup bize göndererek başvuru yapabilirsiniz.'
		]
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
		<div id='faq' className='px-6 lg:px-0 py-20 bg-[#e5ebe5]/50'>
			<motion.div ref={ref} initial='hidden' animate={controls} variants={containerVariants} className='container mx-auto'>
				<h2 className='mb-8 text-3xl font-bold text-center text-secondary'>Sıkça Sorulan Sorular</h2>
				<div className='space-y-6'>
					{faqData.map((faq, index) => (
						<motion.div key={index} variants={itemVariants} className='pb-5 border-b border-gray-400'>
							<button
								onClick={() => toggleFaq(index)}
								className='flex items-center justify-between w-full font-semibold text-left text-md lg:text-lg text-secondary focus:outline-none'
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
			</motion.div>
		</div>
	);
};

export default Faq;
