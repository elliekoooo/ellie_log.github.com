import { project1 } from "assets/images";

type imageInfo = {
    num: number,
    srcs: string[] | unknown[]
};

export const ImageSlider:React.FC<imageInfo> = (
    {num, srcs}
) => {
    const _srcs = srcs as [];

    //배열나누기
    console.log(_srcs.slice(0, num));
    //useeffect 써서 인덱스 관리하기
    //이미지 주소 없으면 에러뜸
    //최소갯수 4개 그 이하시 버튼 숨기기

    return (
        <div className="columns">
            <div className="column">
                <button className="button is-small">
                    왼쪽
                </button>
            </div>
            {
                _srcs?.map((([key, value]:[string, string], index:number)=> (
                    <div key={key} className="column mx-5 is-3">
                        {`project`+(index)}
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-2by1">
                                    <img src={require('../assets/images/'+key+'.png')} alt=""/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    <div key={key}>
                                        <p className="is-uppercase has-text-weight-bold">{key}</p>
                                        <p>{value as string}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )))
            }
            <div className="column">
                <button className="button is-small">
                    오른쪽
                </button>
            </div>
        </div>     
    )
};