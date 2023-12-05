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
			className="flex flex-col min-w-full items-center justify-evenly p-24"
			style={{
				background: 'radial-gradient(circle, rgba(0,148,139,1) 0%, rgba(0,85,80,1) 100%)'
			}}
		>
			<h2 className="text-4xl mb-10">Onde atuamos</h2>
			<div className="flex flex-row justify-between items-center">
				{
					locations.map((location) => 
						<div key={location.key} className="min-w-fit border-solid rounded-lg px-4 py-2 m-2 hover:bg-dark1">{location.name}</div>
					)
				}
			</div>
		</section>
	);
}