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
			className="flex flex-col min-h-fit max-w-full items-center justify-evenly bg-light1 text-dark2 p-24"
		>
			<div className='flex flex-col items-center mb-12	'>
				<h2 className="text-4xl mb-6">Sobre nós</h2>
				<p className='text-lg'>A SOMNUM é uma empresa especializada em realizar anestesias na sua residência</p>
			</div>

			<div className='flex flex-col items-center'>
				<h3 className="text-3xl mb-2">Nossos diferenciais:</h3>
				<div className=" flex flex-row flex-wrap">
					{
						differentials.map((item) => <div
							key={item.key}
							className="basis-1/2 min-w-fit border-solid border-slate-600 rounded-lg p-6 hover:bg-light2"
							style={{
								minWidth:'200px'
							}}
						>
							<h4 className={`mb-3 text-2xl text-ellipsis`}>
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