import Slider from 'react-slick';

const testimonials = [
	{
		name: 'Öykü Aksoy',
		role: 'Öğrenci',
		description: 'Biliyorsunuz ki YKS çok uzun ve çok yorucu bir maraton. Ben de bu maratonu en sağlıklı şekilde bitirebilmek için bir desteğe ihtiyaç duydum ve mentörlük almaya başladım. Bu süreçteki destek beni çok rahatlattı.'
	},
	{
		name: 'Aynur Zerman',
		role: 'Veli',
		description: '2023 YKS sınavına kızım hazırlanırken sizlerden destek aldık. Çok doğru bir rehberlik süreci oldu ve bizi gerçekten çok iyi yönlendirdiniz. Çok teşekkürler!'
	},
	{
		name: 'Ahmet Yılmaz',
		role: 'Öğrenci',
		description: 'Mentörlük sistemi sayesinde deneme sınavları ve çalışma planlaması konusunda büyük bir yol katettim. Başarımı sizlerle paylaşmak istiyorum. Çok teşekkürler!'
	},
	{
		name: 'Ahmet Yılmaz',
		role: 'Öğrenci',
		description: 'Mentörlük sistemi sayesinde deneme sınavları ve çalışma planlaması konusunda büyük bir yol katettim. Başarımı sizlerle paylaşmak istiyorum. Çok teşekkürler!'
	},
	{
		name: 'Ahmet Yılmaz',
		role: 'Öğrenci',
		description: 'Mentörlük sistemi sayesinde deneme sınavları ve çalışma planlaması konusunda büyük bir yol katettim. Başarımı sizlerle paylaşmak istiyorum. Çok teşekkürler!'
	},
	{
		name: 'Ahmet Yılmaz',
		role: 'Öğrenci',
		description: 'Mentörlük sistemi sayesinde deneme sınavları ve çalışma planlaması konusunda büyük bir yol katettim. Başarımı sizlerle paylaşmak istiyorum. Çok teşekkürler!'
	}
];

const Testimonials = () => {
	const settings = {
		infinite: true,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	};

	return (
		<div id='comment' className='py-16 bg-gradient-to-r from-[#f5f7fa] to-[#c3dfe5]'>
			<div className='container mx-auto'>
				<h2 className='mb-12 text-3xl font-bold text-center text-secondary'>Bizler için neler düşünüyorlar?</h2>
				<p className='mb-10 text-lg text-center text-gray-700'>Bizimle birlikte sınava hazırlanıp başarıya ulaşmış öğrencilerimizi bizzat kendilerinden dinleyin!</p>
				<Slider {...settings}>
					{testimonials.map((testimonial, index) => (
						<div key={index} className='px-4 py-5'>
							<div className='p-6 text-center bg-white rounded-lg shadow-lg'>
								<h3 className='mb-2 text-xl font-semibold text-secondary'>{testimonial.name}</h3>
								<p className='mb-4 text-sm text-gray-500'>{testimonial.role}</p>
								<p className='text-gray-700'>{testimonial.description}</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Testimonials;
