import {useEffect,useState} from "react";
import {getList} from "./remotes"
import {Item} from "../server/__mocks__/list";
function BoardPage() {
    const [list, setList] = useState<Item[]>([]);
    useEffect(()=>{
        getList().then((item)=>{
            return setList(item);
        }).catch((error)=>{

        })

    },[])

    return ( <>
        {list.map((item)=>{
            return <>{item.id}</>
        })}
    </>)

}

export default  BoardPage