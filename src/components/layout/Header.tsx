import { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const links = [
    { title: 'About Me', to: 'about' },
    { title: 'Tech Stack', to: 'stack' },
    { title: 'Project', to: 'project' },
    { title: 'Career', to: 'career' },
    { title: 'Contact', to: 'contact' },
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

  const onMenuOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header
      className={`fixed w-[100%] top-0 right-0 left-0  flex px-[12px] py-[10px] justify-center items-center  z-[9999] ${isScrolled ? 'bg-[#7D4E57AE]' : 'bg-transparent'}`}
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
        <div className={'hidden md:flex font-extrabold text-md gap-[12px]'}>
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
        <div className={'md:hidden font-extrabold text-md flex gap-[12px]'}>
          <img src={'menu.svg'} alt={'menu'} className={'cursor-pointer'} onClick={onMenuOpen} />
        </div>
        {isOpen && (
          <div
            className={`md:hidden fixed top-[52px] border-none left-0 w-[100%] ${isScrolled ? 'bg-[#7D4E57AE]' : 'bg-white bg-opacity-50'} flex flex-col items-center gap-[12px] py-[10px]`}
          >
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
                  className={`cursor-pointer font-han text-gray-800 hover:text-yellow-200 ${isScrolled ? 'text-white' : ''}`}
                >
                  {link.title}
                </a>
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}
