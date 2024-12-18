import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from './Navbar';
import Footer from './Footer';
import { InputMask } from 'primereact/inputmask';

const validationSchema = Yup.object().shape({
	fullName: Yup.string().required('İsim-soy isim zorunludur.'),
	gender: Yup.string().required('Cinsiyet seçimi zorunludur.'),
	birthDate: Yup.date().required('Doğum tarihi zorunludur.'),
	phone: Yup.string()
		.required('Telefon numarası zorunludur.')
		.matches(/^\(\d{3}\) \d{3}-\d{4}$/, 'Telefon formatı hatalıdır.'),
	email: Yup.string().email('Geçerli bir e-posta giriniz.').required('E-posta zorunludur.'),
	city: Yup.string().required('İl zorunludur.'),
	district: Yup.string().required('İlçe zorunludur.'),
	highSchool: Yup.string().required('Lise adı zorunludur.'),
	university: Yup.string().required('Hedeflediğiniz üniversite zorunludur.'),
	yksField: Yup.string().required('YKS hazırlık alanı zorunludur.'),
	interests: Yup.string().required('Bu alan zorunludur.').min(30, 'En az 50 karakter yazmalısınız.'),
	expectation: Yup.string().required('Bu alan zorunludur.').min(100, 'En az 150 karakter yazmalısınız.'),
	gradeReports: Yup.mixed().required('E-okul yıl sonu ortalamaları zorunludur.'),
	lgsReport: Yup.mixed().required('LGS sonuç belgesi zorunludur.')
});

const PrimeInputMask = ({ field, form, ...props }) => {
	return (
		<InputMask
			{...field}
			{...props}
			onChange={(e) => form.setFieldValue(field.name, e.value)}
			className={`p-inputtext w-full p-2 border rounded ${form.touched[field.name] && form.errors[field.name] ? 'p-invalid' : ''}`}
		/>
	);
};

const FormComponent = () => {
	const initialValues = {
		fullName: 'John Doe',
		gender: 'Erkek',
		birthDate: '2000-01-01',
		phone: '(555) 555-5555',
		email: 'johndoe@example.com',
		city: 'İstanbul',
		district: 'Kadıköy',
		highSchool: 'Kadıköy Anadolu Lisesi',
		university: 'Boğaziçi Üniversitesi - Bilgisayar Mühendisliği',
		yksField: 'Sayısal',
		interests: 'Kitap okumak, spor yapmak, yazılım geliştirmekKariyerimde başarılı bir mühendis olmak istiyorum. Bu programdan rehberlik bekliyorum.',
		expectation: 'Kariyerimde başarılı bir mühendis olmak istiyorum. Bu programdan rehberlik bekliyorum.Kariyerimde başarılı bir mühendis olmak istiyorum. Bu programdan rehberlik bekliyorum.Kariyerimde başarılı bir mühendis olmak istiyorum. Bu programdan rehberlik bekliyorum.Kariyerimde başarılı bir mühendis olmak istiyorum. Bu programdan rehberlik bekliyorum.',
		gradeReports: null,
		lgsReport: null
	};

	return (
		<main className='flex flex-col min-h-screen'>
			<Navbar />
			<div className='pt-[80px] container mx-auto text-left px-6'>
				<div className='pt-[40px] pb-[10px] space-y-6'>
					<h1 className='text-3xl font-bold text-primary'>Başvuru Formu</h1>
					<div>Lütfen aşağıdaki maddeleri dikkatlice okuyunuz.</div>
					<div className='font-bold'>Ücretsiz "YKS" Mentorlüğü Başvurusu</div>
					<div className='space-y-2'>
						<div className='text-xs text-gray-600'>
							Mentorlük hizmeti almak isteyen öğrencilerin hedefledikleri üniversite ve bölümlere en uygun mentorümüzü belirleyip mentor ataması
							yapıyoruz.
						</div>
						<div className='text-xs text-gray-600'>
							Mentorlük hizmeti almak isteyen öğrencilerin hedefledikleri üniversite ve bölümlere en uygun mentorümüzü belirleyip mentor ataması
							yapıyoruz.
						</div>
					</div>
				</div>
			</div>

			<main className='container flex-grow px-6 mx-auto my-6'>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values) => {
						console.log(values);
					}}
					validateOnChange={true}
					validateOnBlur={true}
				>
					{({ setFieldValue, values }) => (
						<Form className='space-y-4'>
							<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
								<div>
									<div className='text-[12px] text-black my-2'>İsim Soyisim *</div>
									<Field name='fullName' placeholder='İsim Soyisim' className='w-full p-2 border rounded-[20px]' />
									<ErrorMessage name='fullName' component='div' className='text-xs text-red-500' />
								</div>
								<div>
									<div className='text-[12px] text-black my-2'>Cinsiyet *</div>
									<Field as='select' name='gender' className='w-full p-2 border rounded-[20px]'>
										<option value=''>Seçiniz</option>
										<option value='Erkek'>Erkek</option>
										<option value='Kadın'>Kadın</option>
									</Field>
									<ErrorMessage name='gender' component='div' className='text-xs text-red-500' />
								</div>
							</div>

							<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
								<div>
									<div className='text-[12px] text-black my-2'>Doğum Tarihi *</div>
									<Field name='birthDate' type='date' className='w-full p-2 border rounded-[20px]' />
									<ErrorMessage name='birthDate' component='div' className='text-xs text-red-500' />
								</div>
								<div>
									<div className='text-[12px] text-black my-2'>Telefon Numarası *</div>
									<Field name='phone'>
										{({ field, form }) => (
											<PrimeInputMask
												field={field}
												form={form}
												mask='(999) 999-9999'
												placeholder='(123) 456-7890'
											/>
										)}
									</Field>
									<ErrorMessage name='phone' component='div' className='text-xs text-red-500' />
								</div>
							</div>

							<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
								<div>
									<div className='text-[12px] text-black my-2'>İl *</div>
									<Field name='city' placeholder='İl' className='w-full p-2 border rounded-[20px]' />
									<ErrorMessage name='city' component='div' className='text-xs text-red-500' />
								</div>

								<div>
									<div className='text-[12px] text-black my-2'>İlçe *</div>
									<Field name='district' placeholder='İlçe' className='w-full p-2 border rounded-[20px]' />
									<ErrorMessage name='district' component='div' className='text-xs text-red-500' />
								</div>
							</div>

							<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
								<div>
									<div className='text-[12px] text-black my-2'>Lise Adı *</div>
									<Field name='highSchool' placeholder='Lise Adı' className='w-full p-2 border rounded-[20px]' />
									<ErrorMessage name='highSchool' component='div' className='text-xs text-red-500' />
								</div>

								<div>
									<div className='text-[12px] text-black my-2'>Hedeflediğiniz Üniversite / Bölüm *</div>
									<Field name='university' placeholder='Üniversite/Bölüm' className='w-full p-2 border rounded-[20px]' />
									<ErrorMessage name='university' component='div' className='text-xs text-red-500' />
								</div>
							</div>

							<div>
								<div className='text-[12px] text-black my-2'>YKS Hazırlık Alanı *</div>
								<Field as='select' name='yksField' className='w-full p-2 border rounded-[20px]'>
									<option value=''>Seçiniz</option>
									<option value='Sayısal'>Sayısal</option>
									<option value='Eşit Ağırlık'>Eşit Ağırlık</option>
									<option value='Sözel'>Sözel</option>
									<option value='Dil'>Dil</option>
								</Field>
								<ErrorMessage name='yksField' component='div' className='text-xs text-red-500' />
							</div>

							<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
								<div>
									<div className='text-[12px] text-black my-2'>Hobiler ve İlgi Alanları *</div>
									<Field
										as='textarea'
										name='interests'
										rows='4'
										placeholder='Hobilerinizi ve ilgi alanlarınızı belirtiniz.'
										className='w-full p-2 border rounded-[20px]'
									/>
									<ErrorMessage name='interests' component='div' className='text-xs text-red-500' />
								</div>

								<div>
									<div className='text-[12px] text-black my-2'>
										Geleceğe dair hedeflerinizi ve hayallerinizi ve bu programdan beklentilerinizi en az 150 kelime ile
										belirtiniz. *
									</div>
									<Field
										as='textarea'
										name='expectation'
										rows='4'
										placeholder='150 karakter yazınız.'
										className='w-full p-2 border rounded-[20px]'
									/>
									<ErrorMessage name='expectation' component='div' className='text-xs text-red-500' />
								</div>
							</div>

							<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
								<div>
									<label className='block text-[12px] text-black my-2'>E-okul Yıl Sonu Ortalamaları(9-10-11. Sınıf) *</label>
									<input
										type='file'
										onChange={(e) => {
											const file = e.currentTarget.files[0];
											setFieldValue('gradeReports', file);
										}}
										className='w-full p-2 rounded-[20px] border'
									/>
									{values.gradeReports ? (
										<div className='mt-2 text-sm text-green-500'>Seçilen Dosya: {values.gradeReports.name}</div>
									) : (
										<div className='mt-2 text-sm text-gray-500'>Dosya eklenmedi.</div>
									)}
									<ErrorMessage name='gradeReports' component='div' className='text-red-500' />
								</div>

								<div>
									<label className='block text-[12px] text-black my-2'>LGS Sonuç Belgesi *</label>
									<input
										type='file'
										onChange={(e) => {
											const file = e.currentTarget.files[0];
											setFieldValue('lgsReport', file);
										}}
										className='w-full p-2 rounded-[20px] border'
									/>
									{values.lgsReport ? (
										<div className='mt-2 text-sm text-green-500'>Seçilen Dosya: {values.lgsReport.name}</div>
									) : (
										<div className='mt-2 text-sm text-gray-500'>Dosya eklenmedi.</div>
									)}
									<ErrorMessage name='lgsReport' component='div' className='text-red-500' />
								</div>
							</div>

							<button type='submit' className='px-4 py-2 text-white rounded-[20px] bg-primary'>
								Başvuruyu Tamamla
							</button>
						</Form>
					)}
				</Formik>
			</main>
			<Footer />
		</main>
	);
};

export default FormComponent;
