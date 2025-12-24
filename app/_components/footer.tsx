import golden from '../../public/images/golden.png'
import royal from '../../public/images/royal.png'
import primier from '../../public/images/primier.png'
import whiskas from '../../public/images/whiskas.png'
import natural from '../../public/images/natural.png'
import Image from 'next/image'
import { WhatsappLogo, FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'

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

                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
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
                        <div>
                            <h3>Pet Shop Dev</h3>
                            <p className='mb-4'>Cuidando do seu amigo com amor e dedicação.</p>
                            <a
                                href="#"
                                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center 
                            w-fit gap-2 hover:scale-105 duration-300">
                                <WhatsappLogo className="w-5 h-5" />

                                Contato via WhatsApp</a>
                        </div>
                    </footer>
                </div>

            </div>
        </section>

    )
}