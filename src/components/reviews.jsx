export default function Reviews() {
	const reviews = [
		{ key: '0', name: 'Cliente 1', comment: 'Após realizar um inplante eu passei duas noites sem dormir, até que uma amiga me indicou a SOMNUM. Decidi contratar o serviço, e na mesma noite uma médica super atenciosa me atendeu e me sedou. Nunca dormi tão bem. Ajudou super minha recuperação, Recomendo!!'},
		{ key: '1', name: 'Cliente 2', comment: 'A profissional que me atendeu foi super carinhosa e competente, valeu muito a pena.'},
		{ key: '2', name: 'Cliente 3', comment: 'Poder dormir tranquilamente depois do pós operatório me ajudou super, obrigado SOMNUM!'},

	]
	return (
		<section className="flex flex-col min-w-full min-h-fit items-start justify-start md:items-center md:justify-start p-6 md:p-24 bg-light1 text-dark2">
			<h2 className="text-4xl mb-10">Nossas Avaliações</h2>
			<div className="flex flex-row flex-wrap justify-center items-center">
				{
					reviews.map((review) => 
						<div
							key={review.key}
							className="flex flex-col basis-1/3 grow min-w-[250px] h-[250px] pr-2 pb-2"
						>
							<div 
								className="min-w-full min-h-full bg-white shadow-lg border-8 border-white rounded-sm px-4 py-4 m-2 overflow-y-auto"
							>
								<p className="italic text-justify">&ldquo;{review.comment}&rdquo;</p>
								<p className="self-end opacity-25">{review.name}</p>
							</div>
						</div>
					)
				}
			</div>
		</section>
	);
}