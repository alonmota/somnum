export default function About({id} : {id: string}) {
	const differentials = [
		{ key: '0', title: 'Neuroplasticidade Adaptativa', description: 'Contribui para uma redução sustentável da dor a longo prazo'},
		{ key: '1', title: 'Individualização do Tratamento', description: 'Cada paciente é único, e nosso serviço reconhece essa singularidade ao oferecer uma abordagem personalizada.'},
		{ key: '0', title: 'Redução da Dor Crônica', description: 'Prevenção da dor crônica, oferecendo uma alternativa avançada e duradoura aos métodos convencionais'},
		{ key: '0', title: 'Minimização de Efeitos Colaterais', description: 'A utilização de técnicas multimodais permite reduzir a dose dos fármacos, minimizando os efeitos colaterais'},
	]
	return (
		<section
			id={id}
			className="flex flex-col min-h-fit min-w-full items-center justify-evenly bg-light1 text-dark2 p-24"
		>
			<div className='flex flex-col items-center'>
				<h2 className="text-6xl mb-9">Sobre nós</h2>
				<p className='text-lg'>A SOMNUM é uma empresa especializada em realizar anestesias na sua residência</p>
			</div>

			<div className='flex flex-col items-center'>
				<h3 className="text-3xl mb-8">Nossos diferenciais:</h3>
				<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
					{
						differentials.map((item) => <div
							key={item.key}
							className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-light2 p-8"
						>
							<h4 className={`mb-3 text-2xl font-semibold text-ellipsis`}>
								{item.title}
							</h4>
							<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
								{item.description}
							</p>
						</div>)
					}
						
				</div>
			</div>
		</section>
	);
}