import headerLogo from '../assets/images/header-logo'
function Nav() {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href='/'>
                    <img src={headerLogo} width={130} height={29} />
                </a>
            </nav>
        </header>
    )
}

export default Nav