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
    const _srcs = srcs as [];
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(size); //모바일일땐 하나

    const goLeft = () => {
        setLeft(l=> l-1);
        setRight(r => r-1);
    };

    const goRight = () => {
        setLeft(l=> l+1);
        setRight(r => r+1);
    };

    return (
        <div className="is-flex is-align-item-center">
            <button onClick={goLeft} className="button is-small is-white is-pulled-left" disabled={left==0}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="columns mx-5 my-5">
                { 
                    _srcs?.slice(left, right).map((([key, value]:[string, string])=> (
                        <div key={key} className={"column"}>
                            <div className="card pointer" onClick={()=>{}}>
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
                                <footer className="card-footer is-size-7">
                                    <a href="#" className="card-footer-item">Github</a>
                                    <a href="#" className="card-footer-item">Demo</a>
                                </footer>
                            </div>
                        </div>
                    )))
                }
            </div>     
            <button onClick={goRight} className="button is-small is-white is-pulled-right" disabled={right==_srcs.length}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
};