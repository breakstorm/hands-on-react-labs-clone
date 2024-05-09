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

function Projects() {
    const mock = projects();
    console.log('mock', mock);
    // mock의 아이템을 페이지네이션의 정보에 따라서 다르게 펼치기.
    // useEffect를 이용하여서 페이지 값이 변경되면 다르게 화면 노출하기.
    // 페이지네이션에 필요한 state값은 json.server의 param 값을 참조. (page, perPage)
    // 예외조건  : 페이지는 0보다 작아질수 없음
    // 예외조건 : 페이지는 마지막 페이지보다 커질수 없음
    // state: page, isLoading, isError

    const mockList = mock.map((item) => (
        <Card key={item.id} project={item}></Card>
    ))

    return (
        <div className="overflow-hidden">
            <section className="p-4">
                <div className="container mx-auto lg:max-w-7xl">
                    <div className="content--title text-4xl mb-4">Projects</div>
                    <button className="w-full bg-zinc-100 my-4 p-4 border rounded border-zinc-400 border-solid">More
                    </button>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                        {mockList}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export {Projects}