// !!TODO: db값을 object로 반환하는 함수 별도 생성 -> build 명령어시 에러 발생, 파일 색제
// !!TODO: 스크린샷을 참고하여 레이아웃 생성
// !!TODO: db값이랑 바인딩
// TODO: 모바일 화면 대응
// TODO: 테스트 코드 작성
// TODO: 페이지네이션 추가
// TODO: 아이템 수정 기능 추가
// TODO: 목록 로딩, 목록 에러 상태 추가.

import {Card} from "@/pages/projects/Card.tsx";
import projects from "/src/api/ProjectAPI.ts";

function Projects() {
    // const mock = [
    //     {
    //         "id": "1",
    //         "name": "Johnson - Kutch",
    //         "description": "Fully-configurable intermediate framework. Ullam occaecati libero laudantium nihil voluptas omnis qui modi qui.",
    //         "imageUrl": "/assets/placeimg_500_300_arch4.jpg",
    //         "contractTypeId": 3,
    //         "contractSignedOn": "2013-08-04T22:39:41.473Z",
    //         "budget": 54637,
    //         "isActive": false
    //     },
    //     {
    //         "id": "2",
    //         "name": "Dillesik LLCs",
    //         "description": "Re-contextualized dynamic moratorium. Aut nulla soluta numquam qui dolor architecto et facere dolores.",
    //         "imageUrl": "/assets/placeimg_500_300_arch12.jpg",
    //         "contractTypeId": 6,
    //         "contractSignedOn": "2016-06-26T18:24:01.706Z",
    //         "budget": 29729,
    //         "isActive": true
    //     },
    //     {
    //         "id": "3",
    //         "name": "Purdy, Keeling and Smithams",
    //         "description": "Innovative 6th generation model. Perferendis libero qui iusto et ullam cum sint molestias vel.",
    //         "imageUrl": "/assets/placeimg_500_300_arch5.jpg",
    //         "contractTypeId": 4,
    //         "contractSignedOn": "2013-05-26T01:10:42.344Z",
    //         "budget": 45660,
    //         "isActive": true
    //     },
    //     {
    //         "id": "4",
    //         "name": "Kreiger - Waelchis",
    //         "description": "Managed logistical migration. Qui quod praesentium accusamus eos hic non error modi et.",
    //         "imageUrl": "/assets/placeimg_500_300_arch12.jpg",
    //         "contractTypeId": 2,
    //         "contractSignedOn": "2009-12-18T21:46:47.944Z",
    //         "budget": 81188,
    //         "isActive": true
    //     },
    //     {
    //         "id": "5",
    //         "name": "Crona Inc",
    //         "description": "Monitored explicit methodology. Rem quos maxime amet autem beatae quisquam excepturi sint velit.",
    //         "imageUrl": "/assets/placeimg_500_300_arch5.jpg",
    //         "contractTypeId": 1,
    //         "contractSignedOn": "2016-11-14T19:19:53.624Z",
    //         "budget": 31350,
    //         "isActive": true
    //     }
    // ]
    const mock = projects();
    console.log('mock', mock);

    const mockList = mock.map((item, index) => (
        <Card key={item.id} project={item}></Card>
    ))

    return (
        <div className="overflow-hidden" >
            <section className="p-4">
                <div className="container mx-auto lg:max-w-7xl">
                    <div className="content--title text-4xl mb-4">Projects</div>
                    <button className="w-full bg-zinc-100 my-4 p-4 border rounded border-zinc-400 border-solid">More</button>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                        {mockList}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export {Projects}