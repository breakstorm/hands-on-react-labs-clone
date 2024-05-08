function Header () {
    return (
        <div className="header relative z-10 mb-8 py-8 border-y border-solid border-zinc-900"
             >
            <div className="container mx-auto lg:max-w-7xl flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-4">
                        <span className="zinc-ring ring-zinc-900 hidden sm:inline icon-home"><img
                            src="/assets/logo-3.svg" alt="logo3"/></span>
                    <span className="zinc-ring ring-zinc-900 sm:hidden icon-home"><img src="/assets/logo-4.svg"
                                                                                       alt="logo4"/></span>
                    <a href="">
                        <p className="text-xl">Home</p>
                    </a>
                    <a href="">
                        <p className="text-xl">Projects</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export {Header};