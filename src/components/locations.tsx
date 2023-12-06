export default function Locations() {
	const locations = [
		{ key: 'asa-norte', name: 'Asa Norte'},
		{ key: 'asa-sul', name: 'Asa Sul'},
		{ key: 'lago-norte', name: 'Lago Lorte'},
		{ key: 'lago-sul', name: 'Lago Sul'},
		{ key: 'sobradinho', name: 'Sobradinho'},
		{ key: 'sudoeste', name: 'Sudoeste'},
		{ key: 'noroeste', name: 'Noroeste'},

	]
	return (
		<section 
			className="flex flex-col min-w-full min-h-fit items-start justify-start md:items-center md:justify-start p-6 md:p-24"
			style={{
				background: 'radial-gradient(circle, rgba(0,148,139,1) 0%, rgba(0,85,80,1) 100%)'
			}}
		>
			<h2 className="text-4xl mb-4 md:mb-12">Onde atuamos</h2>
			<div className="flex flex-row flex-wrap justify-start md:justify-center items-center mb-4 md:mb-0">
				{
					locations.map((location) => 
						<div key={location.key} className="min-w-[50%] md:min-w-[120px] border-solid rounded-lg px-4 py-2	 hover:bg-dark1">{location.name}</div>
					)
				}
			</div>
		</section>
	);
}