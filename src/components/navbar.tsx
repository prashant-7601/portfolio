export default function Navbar() {
    return(
        <nav className="absolute top-2 right-2 flex flex-row justify-end py-2 px-3">
            <ul className="text-white">
                <a className="px-2 cursor-pointer text-xl font-semibold">Projects</a>
                <a className="px-2 cursor-pointer text-xl font-semibold">Contacts</a>
            </ul>
        </nav>
    )
}