import Image from 'next/image'
import about1Image from '../../public/images/about-1.png'
import about2Image from '../../public/images/about-2.png'

export function About() {
    return (
        <section className="bg-[#fdf6ec] py-16 ">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 
            items-center">

                <div className='relative'>
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



            </div>
        </section>
    )
}