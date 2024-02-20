import { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const links = [
    { title: 'About Me', to: 'about' },
    { title: 'Tech Stack', to: 'stack' },
    { title: 'Project', to: 'project' },
    { title: 'Career', to: 'career' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  console.log(isScrolled)
  return (
    <header
      className={`fixed w-[100%] top-0 right-0 left-0  flex z-[999] px-[12px] py-[10px] justify-center items-center bg-transparent ${isScrolled ? 'bg-[#7D4E57D9]' : ''}`}
    >
      <div className={'max-w-[1140px] w-[100%] flex justify-between items-center'}>
        <div
          className={`font-extrabold text-2xl text-gray-800 hover:text-yellow-200 cursor-pointer ${isScrolled ? 'text-white' : ''}`}
          onClick={() => {
            document.getElementById('intro')!.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Ghunhee&#39;s Portfolio
        </div>
        <div className={'font-extrabold text-md flex gap-[12px]'}>
          {links.map((link) => {
            return (
              <a
                key={link.title}
                onClick={(event) => {
                  event.preventDefault()
                  document.getElementById(link.to)!.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
                className={`cursor-pointer text-gray-800 hover:text-yellow-200 ${isScrolled ? 'text-white' : ''}`}
              >
                {link.title}
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}
