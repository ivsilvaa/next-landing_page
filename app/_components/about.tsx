import Image from 'next/image'
import about1Image from '../../public/images/about-1.png'
import about2Image from '../../public/images/about-2.png'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { Check, MapPin } from 'lucide-react'

export function About() {
    return (
        <section className="bg-[#fdf6ec] py-16 ">
            <div className="container px-4 mx-auto">

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                    <div data-aos='fade-up-right' data-aos-delay='300' className='relative'>
                        <div className="relative w-full h-100 rounded-3xl overflow-hidden">
                            <Image
                                src={about1Image}
                                alt='Foto de um cachorro'
                                fill
                                quality={100}
                                priority
                                className='object-cover hover:scale-110 duration-300'
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 rounded-lg 
                    overflow-hidden border-white">
                            <Image
                                src={about2Image}
                                alt='Foto de um cachorro 2'
                                fill
                                quality={100}
                                priority

                            />
                        </div>

                    </div>

                    <div data-aos='fade-up-left' data-aos-delay='300' className='space-y-6 mt-10'>
                        <h2 className='text-4xl font-bold'>Sobre a empresa</h2>
                        <p className='text-justify'>A relação com os animais vai além do cuidado: ela traz equilíbrio,
                            afeto e propósito. Nosso compromisso é facilitar o acesso a produtos que
                            fazem bem para você e para quem está ao seu lado, com atendimento atencioso,
                            escolhas conscientes e uma experiência de compra tranquila e segura.
                        </p>

                        <ul className='space-y-4 '>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-500' />
                                Aberto desde 2004
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-500' />
                                Equipe com mais de 10 veterinários
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-500' />
                                Qualidade é nossa prioridade
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-500' />
                                Tudo para você e seu pet
                            </li>
                        </ul>

                        <div className='flex gap-3'>
                            <a href="#" className="bg-[#e84c3d] px-5 py-2 rounded-md text-white font-semibold
                        flex items-center justify-center w-fit gap-2  hover:bg-red-700 hover:scale-105 duration-300 text-center">
                                <WhatsappLogo className='w-5 h-5' />
                                Contato via WhatsApp
                            </a>

                            <a href="#" className="bg-[#e84c3d] px-5 py-2 rounded-md text-white font-semibold
                        flex items-center justify-center w-fit gap-2 hover:bg-red-700 hover:scale-105 duration-300 text-center">
                                <MapPin className='w-5 h-5' />
                                Endereço da loja
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}