import {Link} from "react-router-dom";

export default function Header() {
    const links = [
        { title: 'About Me', to: '#about'},
        { title: 'Tech Stack', to: '#stack'},
        { title: 'Project', to: '#project'},
        { title: 'Career', to: '#career'}
    ]
    return <header className={'sticky top-0 max-w-[1140px] flex px-[12px] py-[10px] justify-between items-center mx-auto'}>
        <Link to={'/'}><div className={'font-extrabold text-2xl text-gray-800 hover:text-orange-500 cursor-pointer'}>Ghunhee's Portfolio</div></Link>
        <div className={'font-extrabold text-md flex gap-[12px]'}>
            {
                links.map((link) => {
                    return (<a key={link.title} onClick={event => {
                        event.preventDefault()
                        document.getElementById(link.to)!.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }} className={'cursor-pointer text-gray-800 hover:text-orange-500'}>{link.title}</a>)
                })
            }
        </div>
    </header>
}