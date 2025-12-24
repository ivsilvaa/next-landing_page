import golden from '../../public/golden.png'
import royal from '../../public/royal.png'
import primier from '../../public/primier.png'
import whiskas from '../../public/whiskas.png'
import natural from '../../public/natural.png'
import Image from 'next/image'
import { WhatsappLogo, FacebookLogo, InstagramLogo, TwitterLogo } from '@phosphor-icons/react/dist/ssr'

const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden },
]


export function Footer() {
    return (
        <section className="bg-[#E84c3d] py-16 text-white">
            <div className='container mx-auto px-4'>
                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

                    <div data-aos="fade-up" className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white rounded-lg p-4 flex items-center justify-center'>
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                    }}
                                    className='object-contain'
                                />
                            </div>

                        ))}
                    </div>
                </div>

                <div>
                    <footer className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                        <div data-aos="fade-up-right">
                            <h3 className='text-2xl font-semibold mb-2'>Pet Shop Dev</h3>
                            <p className='mb-4'>Cuidando do seu amigo com amor e dedicação.</p>
                            <a
                                href="#"
                                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center 
                            w-fit gap-2 hover:scale-105 duration-300">
                                <WhatsappLogo className="w-5 h-5" />

                                Contato via WhatsApp
                            </a>
                        </div>

                        <div data-aos="fade-down">
                            <h3 className='text-2xl font-semibold mb-2'>Contato</h3>
                            <p>Rua dos Pets, 123</p>
                            <p>Cidade, Estado - CEP: 12345-678</p>
                            <p>Tel. (51) 99999-9999</p>
                            <p>E-mail: contato@petshop.com </p>
                        </div>

                        <div data-aos="fade-up-left">
                            <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                            <div className='flex gap-4'>
                                <a
                                    href="#"
                                    target='_blank'
                                    className="flex items-center justify-center w-fit gap-2 hover:scale-120 duration-300">
                                    <FacebookLogo className="w-8 h-8" />
                                </a>

                                <a
                                    href="#"
                                    target='_blank'
                                    className="flex items-center justify-center w-fit gap-2 hover:scale-120 duration-300">
                                    <InstagramLogo className="w-8 h-8" />
                                </a>

                                <a
                                    href="#"
                                    target='_blank'
                                    className="flex items-center justify-center w-fit gap-2 hover:scale-120 duration-300">
                                    <TwitterLogo className="w-8 h-8" />
                                </a>
                            </div>
                        </div>

                    </footer>
                    <div className='border-t border-white/20 pt-4'>
                        <p className='text-center text-sm opacity-80'>
                            © 2025 Pet Shop · Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}