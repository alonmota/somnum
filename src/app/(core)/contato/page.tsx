'use client';

import Link from 'next/link';

import { FaWhatsapp, FaAngleRight  } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';
import {Accordion, AccordionItem} from '@nextui-org/react';

export default function Contact() {
	const COMPANY_NUMBER = '(61) 98188-8886'
	const COMPANY_EMAIL = ' modulacaosomnum@gmail.com'
	const DEFAULT_SUBJECT = 'Solicitação de Serviço'
	const DEFAULT_MESSAGE = 'Olá! Eu gostaria de solicitar o serviço da SOMNUM'
	const faq = [
		{ key: '0', question: 'Qual o valor de uma anestesia?', answer: 'O preço depende do pacote, temos planos que variam de 800 a 2000 reais...'},
		{ key: '1', question: 'Alguma possibilidade de vocês atenderem em outras regiões do DF?', answer: 'Depende da região, entre em contato e analisaremos o caso ...'},
		{ key: '2', question: 'Tem algum beneficio indicar uma amiga?', answer: 'Claro, se você indicar uma amiga sua proxima anestesia tera um ...'},
		{ key: '3', question: 'Parcela em quantas vezes?', answer: 'Nos parcelamos em ate ...'},
		{ key: '4', question: 'Tem algum esquema de assinatura para pacientes com dor cronica?', answer: 'Dependendo do caso podemos conversar ...'},
	]

	return (
		<>
			<section
				className="flex flex-col w-full min-h-fit items-stretch justify-start md:items-center md:justify-start p-6 md:p-24"
				style={{
					background: 'radial-gradient(circle, rgba(0,118,109,1) 0%, rgba(0,85,80,1) 100%)'
				}}
			>
				<h2 className="text-4xl mb-6">Fale conosco</h2>
				<div className='flex flex-row flex-wrap'>
					<div
						className='basis-1/2 grow h-auto min-w-[200px] min-h-[150px] pr-2 mb-4'
					>
						<Link
							className='group flex flex-col min-h-full min-w-full bg-light1 text-dark2 rounded-sm hover:shadow-xl'
							href={`//api.whatsapp.com/send?phone=${COMPANY_NUMBER.replace(/[^\w\s]/gi, '')}&text=${DEFAULT_MESSAGE}`}
							target='_blank'
						>
							<div
								className='flex flex-row items-center justify-start p-3 border-b-2 border-gray-200'
							>
								<FaWhatsapp/> <h3 className='ml-2 text-lg text-dark2 font-medium'>WhatsApp</h3> 
							</div>
							<div
								className='relative flex flex-row items-center p-3'
							>
								<p className='basis-11/12 overflow-hidden' title={`Entre em contato pelo WhatsApp: ${COMPANY_NUMBER}`}>Entre em contato pelo WhatsApp: {COMPANY_NUMBER}</p>
								<div className='basis-1/12 text-4xl child group-hover:scale-110 group-hover:translate-x-2'><FaAngleRight /></div>
							</div>
						</Link>

					</div>

					<div
						className='basis-1/2 grow h-auto min-w-[200px] min-h-[150px] pr-2 mb-4'
					>
						<Link
							className='group flex flex-col min-h-full min-w-full bg-light1 text-dark2 rounded-sm hover:shadow-xl'
							href={`mailto:${COMPANY_EMAIL}?subject=${DEFAULT_SUBJECT}&body=${DEFAULT_MESSAGE}`}
							target='_blank'
						>
							<div
								className='flex flex-row items-center justify-start p-3 border-b-2 border-gray-200'
							>
								<RiMailSendLine/> <h3 className='ml-2 text-lg text-dark2 font-medium'>Enviar Email</h3> 
							</div>
							<div
								className='relative flex flex-row items-center p-3'
							>
								<p className='basis-11/12 max-w-max overflow-hidden' title={`Envie um email para nós: ${COMPANY_EMAIL}`}>Envie um email para nós: {COMPANY_EMAIL}</p>
								<div className='basis-1/12 text-4xl child group-hover:scale-110 group-hover:translate-x-2'><FaAngleRight /></div>
							</div>
						</Link>
					</div>
					
				</div>
			</section>
			{/* <section
				className="flex flex-col min-w-full min-h-fit items-start justify-start md:items-center md:justify-start p-6 md:p-24 bg-light1 text-dark2"
				style={{
					background: 'radial-gradient(circle, #f5ffff 0%, #d5fffc 100%)'
				}}
			>
				<h2 className='text-4xl mb-6'>Perguntas frequentes</h2>

				<Accordion className='bg-white shadow-md'>
					{ faq.map((pergunta) => 
						<AccordionItem key={pergunta.key} aria-label={pergunta.question} title={pergunta.question}>
							<p className='text-sm text-dark2 text-opacity-75 pl-4 pb-4'>
								{pergunta.answer}
							</p>
						</AccordionItem>
							
					)}
				</Accordion>
					
			</section> */}
		</>
	);
}

