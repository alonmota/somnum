import Link from 'next/link';
import About from '@/components/about'
import Welcome from '@/components/welcome'
import Locations from '@/components/locations';
import Reviews from '@/components/reviews';

export default function Home() {

	return (
		<>
			<Welcome></Welcome>

			<About id='about'></About>

			<Locations></Locations>

			<Reviews></Reviews>
		</>
	);
}

