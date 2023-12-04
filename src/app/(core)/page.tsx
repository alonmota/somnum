import Link from 'next/link';
import About from '@/components/about'
import Welcome from '@/components/welcome'
import Locations from '@/components/locations';

export default function Home() {

	return (
		<>
			<Welcome></Welcome>

			<About id='about'></About>

			<Locations></Locations>
		</>
	);
}

