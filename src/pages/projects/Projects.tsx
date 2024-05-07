// !!TODO: db값을 object로 반환하는 함수 별도 생성 -> build 명령어시 에러 발생, 파일 색제
// TODO: 스크린샷을 참고하여 레이아웃 생성  
// TODO: db값이랑 바인딩 
// TODO: 모바일 화면 대응
// TODO: 테스트 코드 작성

function Projects() {

    return (
        <div className="overflow-hidden" style={{'background': '#ccc'}}>
            {/*<div className="header relative z-10 mb-20 px-4 py-8 ring-1 ring-zinc-900" style={{'background': '#ff0'}}>*/}
            <div className="header relative z-10 mb-8 px-4 py-8 ring-1 ring-zinc-900" style={{'background': '#fff'}}>
                <div className="mx-auto lg:max-w-7xl flex items-center justify-between">
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
            <section className="content px-4">
                <div className="mx-auto lg:max-w-7xl">
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
                    <ul className="flex flex-wrap -mx-8">
                        <li style={{'background-color': 'green'}} className="content--item w-full sm:w-1/3 md:w-1/5 aspect-square">1</li>
                        <li style={{'background-color': 'green'}} className="content--item w-full sm:w-1/3 md:w-1/5 aspect-video">2</li>
                        <li style={{'background-color': 'green'}} className="content--item w-full sm:w-1/3 md:w-1/5 aspect-square">3</li>
                        <li style={{'background-color': 'green'}} className="content--item w-full sm:w-1/3 md:w-1/5 aspect-video">4</li>
                        <li style={{'background-color': 'green'}} className="content--item w-full sm:w-1/3 md:w-1/5 aspect-square">5</li>
                        <li style={{'background-color': 'green'}} className="content--item w-full sm:w-1/3 md:w-1/5 aspect-video">6</li>
                        <li style={{'background-color': 'green'}} className="content--item w-full sm:w-1/3 md:w-1/5 aspect-square">7</li>
                        <li style={{'background-color': 'green'}} className="content--item w-full sm:w-1/3 md:w-1/5 aspect-video">8</li>
                        <li style={{'background-color': 'green'}} className="content--item w-full sm:w-1/3 md:w-1/5 aspect-square">9</li>
                        <li style={{'background-color': 'green'}} className="content--item w-full sm:w-1/3 md:w-1/5 aspect-video">10</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export {Projects}