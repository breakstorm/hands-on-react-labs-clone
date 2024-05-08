import Project from "/src/api/IfProjects.ts"

interface CardProps {
    project: Project;
}

function Card(props: CardProps) {
    const item:Project = props?.project;
    console.log('Card ::: item', item);
    return (
        <li className="content--item ring-1 border-solid border-zinc-500 border rounded aspect-square">
            <div className="list-card--container">
                <div className="aspect-video">
                    <img src={item.imageUrl} alt={item.name}/>
                </div>
                <div className="list-card--content p-4 bg-zinc-100 flex flex-col gap-4">
                    <h5 className="strong truncate text-lg font-bold">
                        <strong>{item.name}</strong>
                    </h5>
                    <p className="text overflow-hidden h-28 max-h-28">{item.description}</p>
                    <p>Budget : {item.budget.toLocaleString()}</p>
                    <div className="flex justify-start gap-4">
                        <button
                            className="rounded border border-zinc-400 drop-shadow-lg px-4 py-2 flex justify-start items-center hover:bg-amber-50 hover:scale-110">
                            <span className="icon">
                                <svg className="h-8 w-8 text-zinc-500" viewBox="0 0 24 24" stroke-width="2"
                                     stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path
                                    stroke="none" d="M0 0h24v24H0z"/>  <path
                                    d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"/>  <path
                                    d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"/>  <line x1="16" y1="5" x2="19"
                                                                                                 y2="8"/></svg>
                            </span>
                            Edit
                        </button>
                        <button
                            className="rounded border border-zinc-400 drop-shadow-lg px-4 py-2  flex justify-start items-center hover:bg-amber-50 hover:scale-110">
                            <span className="icon">
                                <svg className="h-8 w-8 text-zinc-500" width="24" height="24" viewBox="0 0 24 24"
                                     stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                     stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="5"
                                                                                                              y="3"
                                                                                                              width="14"
                                                                                                              height="18"
                                                                                                              rx="2"/>  <line
                                    x1="9" y1="7" x2="15" y2="7"/>  <line x1="9" y1="11" x2="15" y2="11"/>  <line x1="9"
                                                                                                                  y1="15"
                                                                                                                  x2="13"
                                                                                                                  y2="15"/></svg>
                            </span>
                            Detail
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export {Card}