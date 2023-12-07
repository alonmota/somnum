import { useState } from 'react';

export default function About({id} : {id: string}) {
	const differentials = [
		{ 
			key: 0, 
			title: 'Anestesia extra hospitalar',
			content: [
				{ key: 0, label: 'Liberdade', value: 'Você pode realizar seus procedimentos fora do centro cirúrgico sem preocupações. Trabalhamos com sedação para procedimentos odontológicos, ginecológicos, estéticos, dentre outros.' },
				{ key: 1, label: 'Segurança em Primeiro Lugar', value: 'Profissionais comprometidos e tecnologia avançada' },
				{ key: 2, label: 'Planejamento individualizado ', value: 'Adaptado às suas necessidades específicas. Onde, quando e como você precisar.' },
				{ key: 3, label: 'Tranquilidade', value: 'A tranquilidade de saber que está em mãos dedicadas e especializadas. Nosso compromisso inabalável com a segurança reflete-se em cada aspecto dos nossos serviços.' },
				{ key: 4, label: 'Segurança em Primeiro Lugar', value: 'Profissionais comprometidos e tecnologia avançada' },
			],
		},
		{ 
			key: 1, 
			title: 'Anestesia para tatuagem', 
			content: [
				{ key: 0, label: '', value: 'Quando se trata de expressão pessoal através de tatuagens, oferecemos mais do que um serviço – proporcionamos uma experiência.' },
				{ key: 1, label: '', value: 'Com anestesia especializada, permitimos que você desfrute do processo sem as preocupações com a dor.  Você merece essa comodidade.' },
			],
		},
		{ 
			key: 2, 
			title: 'Modulação de dor', 
			content: [
				{ key: 0, label: 'Individualização do tratamento', value: 'Cada paciente é único, e nosso serviço reconhece essa singularidade ao oferecer uma abordagem personalizada maximizando a eficácia do tratamento.' },
				{ key: 1, label: 'Neuroplasticidade adaptativa', value: 'Reconfiguramos os caminhos neurais para atenuar a sensação dolorosa e proporcionar uma redução sustentável da dor a longo prazo.' },
				{ key: 2, label: 'Redução da incidência de dor Crônica', value: '' },
				{ key: 3, label: 'Minimização de efeitos colaterais', value: 'Modulação específica dos sinais de dor sem afetar negativamente outras funções do organismo.' },
				{ key: 4, label: 'Melhoria da Funcionalidade', value: 'A otimização dos processos dolorosos, proporciona uma recuperação mais eficaz.' },
			]
		},
	]

	const [content, setContent] = useState(differentials[0].content);
	return (
		<section
			id={id}
			className="flex flex-col min-h-fit max-w-full items-center justify-evenly bg-light1 text-dark2 p-6 md:p-24"
		>
			<div className='flex flex-col items-start md:items-center mb-6 md:mb-12	'>

				<h2 className="text-4xl mb-6">Sobre nós</h2>
				<p className='text-lg text-justify'>
Bem-vindo à nossa jornada dedicada ao seu conforto e tranquilidade. 
Na nossa empresa de anestesia, especializamo-nos em tornar cada procedimento uma experiência suave e sem preocupações. 
Junte-se a nós e experimente a diferença de uma anestesia que coloca você em primeiro lugar. 
Agende hoje e descubra como podemos cuidar de você!</p>

				<div className="flex flex-row justify-center items-stretch mt-8 mb-4">
					{
						differentials.map((item) =>
							<div key={item.key} className="min-w-[80px] p-2 basis-1/3">
								<button 
									type="button"
									className="min-w-full min-h-full bg-dark2 text-light1 rounded-2xl px-4 py-2"
									onClick={() => {setContent(item.content)}}
								>
									{item.title}
								</button>

							</div>
						)
					}
				</div>
				<div
					className="min-w-full h-fit p-4 md:p-8 text-light1 shadow-lg"
					style={{
						background: 'radial-gradient(circle, rgba(0,118,109,1) 0%, rgba(0,85,80,1) 100%)'
					}}
				>
					{content.map((item) => <>
						<h3 className='text-lg font-semibold p2'>{item.label}</h3>
						<p className='text-medium p2 pl-4 mb-4 text-justify'>{item.value}</p>
					</>)}
				</div>
			</div>
		</section>
	);
}