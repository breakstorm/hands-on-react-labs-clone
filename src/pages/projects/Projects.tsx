// !!TODO: db값을 object로 반환하는 함수 별도 생성 -> build 명령어시 에러 발생, 파일 색제
// TODO: 스크린샷을 참고하여 레이아웃 생성  
// TODO: db값이랑 바인딩 
// TODO: 모바일 화면 대응
// TODO: 테스트 코드 작성

function Projects() {

    return (
        <div className="overflow-hidden container" style={{'background': '#ccc'}}>
            {/*<div className="header relative z-10 mb-20 px-4 py-8 ring-1 ring-zinc-900" style={{'background': '#ff0'}}>*/}
            <div className="header relative z-10 mb-8 py-8 ring-1 ring-zinc-900" style={{'background': '#fff'}}>
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
            <section className=" px-4">
                <div className="container mx-auto lg:max-w-7xl">
                    <div className="content--title">Projects</div>
                    {/*<ul className="columns-3xs gap-8">*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item aspect-square">1</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item mt-8 aspect-video">2</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item mt-8 aspect-square">3</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item mt-8 aspect-video">4</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item mt-8 aspect-square">5</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item mt-8 aspect-video">6</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item mt-8 aspect-square">7</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item mt-8 aspect-video">8</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item mt-8 aspect-square">9</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item mt-8 aspect-video">10</li>*/}
                    {/*</ul>*/}
                    {/* flex를 사용하는 경우 tailwind config 값을 수정하여서 gap-width 값을 작성해야 한다. */}
                    {/*<ul className="flex flex-wrap -m-2">*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item m-2 w-full sm:w-1/3 md:w-1/5 aspect-square">1</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item m-2 w-full sm:w-1/3 md:w-1/5 aspect-video">2</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item m-2 w-full sm:w-1/3 md:w-1/5 aspect-square">3</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item m-2 w-full sm:w-1/3 md:w-1/5 aspect-video">4</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item m-2 w-full sm:w-1/3 md:w-1/5 aspect-square">5</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item m-2 w-full sm:w-1/3 md:w-1/5 aspect-video">6</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item m-2 w-full sm:w-1/3 md:w-1/5 aspect-square">7</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item m-2 w-full sm:w-1/3 md:w-1/5 aspect-video">8</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item m-2 w-full sm:w-1/3 md:w-1/5 aspect-square">9</li>*/}
                    {/*    <li style={{'background-color': 'green'}} className="content--item m-2 w-full sm:w-1/3 md:w-1/5 aspect-video">10</li>*/}
                    {/*</ul>*/}
                    <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
                        <li style={{'background-color': 'green'}} className="content--item aspect-square">1</li>
                        <li style={{'background-color': 'green'}} className="content--item aspect-square">2</li>
                        <li style={{'background-color': 'green'}} className="content--item aspect-square">3</li>
                        <li style={{'background-color': 'green'}} className="content--item aspect-square">4</li>
                        <li style={{'background-color': 'green'}} className="content--item aspect-square">5</li>
                        <li style={{'background-color': 'green'}} className="content--item aspect-square">6</li>
                        <li style={{'background-color': 'green'}} className="content--item aspect-square">7</li>
                        <li style={{'background-color': 'green'}} className="content--item aspect-square">8</li>
                        <li style={{'background-color': 'green'}} className="content--item aspect-square">9</li>
                        <li style={{'background-color': 'green'}} className="content--item aspect-square">10</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export {Projects}