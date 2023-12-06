export default function About({id} : {id: string}) {
	const differentials = [
		{ key: '0', title: 'Neuroplasticidade Adaptativa', description: 'Contribui para uma redução sustentável da dor a longo prazo'},
		{ key: '1', title: 'Individualização do Tratamento', description: 'Cada paciente é único, e nosso serviço reconhece essa singularidade ao oferecer uma abordagem personalizada.'},
		{ key: '2', title: 'Redução da Dor Crônica', description: 'Prevenção da dor crônica, oferecendo uma alternativa avançada e duradoura aos métodos convencionais'},
		{ key: '3', title: 'Minimização de Efeitos Colaterais', description: 'A utilização de técnicas multimodais permite reduzir a dose dos fármacos, minimizando os efeitos colaterais'},
	]
	return (
		<section
			id={id}
			className="flex flex-col min-h-fit max-w-full items-center justify-evenly bg-light1 text-dark2 p-6 md:p-24"
		>
			<div className='flex flex-col items-start md:items-center mb-6 md:mb-12	'>
				<h2 className="text-4xl mb-6">Sobre nós</h2>
				<p className='text-lg'>A SOMNUM é uma empresa especializada em realizar anestesias na sua residência</p>

				<h3 className="text-3xl mb-2 mt-12">Nossos diferenciais:</h3>
				<div className="flex flex-row flex-wrap justify-stretch items-stretch">
					{
						differentials.map((item) => 
							<div
								key={item.key}
								className="basis-1/2 grow rounded-lg px-0 md:px-1 my-1 min-w-[200px]"
							>
								<div
									className="w-full h-full border-2 border-slate-200 rounded-lg mr-0 md:mr-1 p-3 md:p-6"
								>
									<h4 className={`mb-3 text-2xl text-ellipsis opacity-90`}>
										{item.title}
									</h4>
									<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
										{item.description}
									</p>
								</div>
							</div>
						)
					}
						
				</div>
			</div>
		</section>
	);
}