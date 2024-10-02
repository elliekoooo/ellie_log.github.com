import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

type imageInfo = {
    size: number,
    srcs: string[] | unknown[]
};


export const ImageSlider:React.FC<imageInfo> = (
    {size, srcs}
) => {
    const _srcs = (srcs as []);
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(3);

    //배열나누기
    //useeffect 써서 인덱스 관리하기
    //최소갯수 3개 그 이하시 버튼 숨기기
    //이미지 사이즈 생각
    const setIndex = () => {
        setLeft(l => l == 0 ? l+1 : l-1);
        setRight(r => r == _srcs.length-1 ? r+1 : r-1);
    };

    return (
        <div className="is-flex is-align-item-center">
            <button onClick={setIndex} className="button is-small is-white is-pulled-left" disabled={left==0}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="columns mx-5 my-5">
                { 
                    _srcs?.slice(left, right).map((([key, value]:[string, string])=> (
                        <div key={key} className={"column"}>
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
            </div>     
            <button onClick={setIndex} className="button is-small is-white is-pulled-right" disabled={right==_srcs.length}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
};