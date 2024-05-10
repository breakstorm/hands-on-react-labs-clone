// !!TODO: db값을 object로 반환하는 함수 별도 생성 -> build 명령어시 에러 발생, 파일 색제
// !!TODO: 스크린샷을 참고하여 레이아웃 생성
// !!TODO: db값이랑 바인딩
// !!TODO: 모바일 화면 대응
// !!TODO: 테스트 코드 작성
// TODO: 페이지네이션 추가
// TODO: 아이템 수정 기능 추가
// TODO: 목록 로딩, 목록 에러 상태 추가.

import {Card} from "@/pages/projects/Card.tsx";
import projects from "@/api/ProjectAPI.ts";
import {useEffect, useState} from "react";
import { Project } from "@/api/IfProjects.ts";


function sleep (ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Projects() {
    const mock = projects();
    // console.log('mock', mock);
    // mock의 아이템을 페이지네이션의 정보에 따라서 다르게 펼치기.
    // useEffect를 이용하여서 페이지 값이 변경되면 다르게 화면 노출하기.
    // 페이지네이션에 필요한 state값은 json.server의 param 값을 참조. (page, perPage)
    // 예외조건  : 페이지는 0보다 작아질수 없음
    // 예외조건 : 페이지는 마지막 페이지보다 커질수 없음
    // state: page, isLoading, isError

    const maxItem = 10;
    const [pageNumber, setPageNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const[pageList, setPageList] = useState([])

    const mockList = pageList.map((item) => (
        <Card key={item.id} project={item}></Card>
    ))

    // test를 위해서  업무코드를 변경하면 안된다. 해당 로직은 테스트 할 수 없는 로직.
    useEffect(() => {
        console.log('loading...', mock)
        setIsLoading(true);
        sleep(3000).then(() => {
            setIsLoading(false);
            // setIsError(true);

            const  startItemIndex = (pageNumber * maxItem);
            const endItemIndex = startItemIndex + maxItem - 1;
            setPageList(mock.filter((item, index) => (index >= startItemIndex && index <= endItemIndex)))
            console.log('pageList', pageList);
        })
    }, []);

    return (
        <div className="overflow-hidden">
            <section className="p-4">
                <div className="container mx-auto lg:max-w-7xl">
                    { isLoading &&
                        <div className="w-full m-4 text-center">
                        <span className="spinner primary"></span>
                        <span>Loading...</span>
                        </div>
                    }

                    { isError &&
                        <div className="">
                                <p className="w-full m-4 text-center">
                                    <span className=""> There was an error retrieving the projects. Please try again.</span>
                                </p>
                        </div>
                    }

                    {!isLoading && !isError &&
                        <>
                            <div className="content--title text-4xl mb-4">Projects</div>
                            <button className="w-full bg-zinc-100 my-4 p-4 border rounded border-zinc-400 border-solid">More</button>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                                {mockList}
                            </ul>
                        </>
                    }
                </div>
            </section>
        </div>
    );
}

export {Projects}