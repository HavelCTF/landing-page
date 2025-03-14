import Image from 'next/image'
import epiLogo from "../assets/images/epi.png";

export default function LogoCarousel() {

  const logos = [
  { src: epiLogo, alt: "Epitech Logo" },
  { src: epiLogo, alt: "Epitech Logo" },
  { src: epiLogo, alt: "Epitech Logo" },
  { src: epiLogo, alt: "Epitech Logo" },
  { src: epiLogo, alt: "Epitech Logo" },
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} height={50} className='opacity-50' />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} height={50} className='opacity-50' />
          </li>
        ))}
      </ul>
    </div>
  )
}
