export default function Header() {
  const links = [
    { title: 'About Me', to: 'about' },
    { title: 'Tech Stack', to: 'stack' },
    { title: 'Project', to: 'project' },
    { title: 'Career', to: 'career' },
  ]
  return (
    <header
      className={
        'fixed w-[100%] top-0 right-0 left-0 max-w-[1140px] flex z-[999] px-[12px] py-[10px] justify-between items-center mx-auto bg-transparent'
      }
    >
      <div
        className={'font-extrabold text-2xl text-gray-800 hover:text-yellow-200 cursor-pointer'}
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
              className={'cursor-pointer text-gray-800 hover:text-yellow-200'}
            >
              {link.title}
            </a>
          )
        })}
      </div>
    </header>
  )
}
