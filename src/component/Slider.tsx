import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Resizing as size } from "./resize";

type imageInfo = {
    srcs: string[] | unknown[]
};

enum col {
    FULLHD=4,
    DESKTOP=3,
    TABLET=2,
    MOBILE=1
};

export const ImageSlider:React.FC<imageInfo> = (
    {srcs}
) => {
    const _srcs = srcs as [];
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(col.DESKTOP as number); 

    const _size = size();

    useEffect(()=> {
        if(_size <= 768)
            setRight(left+col.MOBILE);
        else if(_size <= 1024 && _size > 769)
            setRight(left+col.TABLET);
        else if(_size <= 1600 && _size > 1025)
            setRight(left+col.DESKTOP);
        else if(_size > 1601)
            setRight(left+col.FULLHD);

    }, [_size]);
        
    const goLeft = () => {
        setLeft(l=> l-1);
        setRight(r => r-1);
    };
    
    const goRight = () => {
        setLeft(l=> l+1);
        setRight(r => r+1);
    };

    return (
            <div className="columns mx-5 my-5">
                <button onClick={goLeft} className="button is-small is-white is-pulled-left" disabled={left==0}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                { 
                    _srcs?.slice(left, right).map((([key, value]:[string, string])=> (
                        <div key={key} className={"column"}>
                            <div className="card" onClick={()=>{}}>
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
                <button onClick={goRight} className="button is-small is-white is-pulled-right" disabled={right==_srcs.length}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>     
    )
};