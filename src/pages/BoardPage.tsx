import {PropsWithChildren, ReactNode, useEffect, useState} from "react";
import {getList} from "./remotes"
import {Item} from "../server/__mocks__/list";
import FixedBottomButton from "../components/FixedBottomButton";
import {css} from "@emotion/react";
import {useInternalRouter} from "../hooks/useInternalRouter";
import colors from "../constants/colors";


interface ListProps {
    className?: string;
}
/*
* >는 직계 자식
* :not(:first-of-type)은 첫 번째 자식을 제외한 나머지 요소
* */
export function List({ className, children }: PropsWithChildren<ListProps>) {
    return (
        <ul
            className={className}
            css={css`
        padding: 0 24px;
        display: flex;
        flex-direction: column;
        > li:not(:first-of-type) {
          margin-top: 15px;
        }
      `}
        >
            {children}
        </ul>
    );
}

interface ListRowProps {
    className?: string;
    left: ReactNode;
    right: ReactNode;
    onClick?: () => void;
}

 List.Row = ({ className, left, right, onClick }: ListRowProps) => {
    return (
        <li
            onClick={onClick}
            className={className}
            css={css`
            outline: none;
            border: 0 none;
            border-bottom: 2px solid ${colors.grey300};
            display: flex;
            justify-content: space-between;
            align-items: center;
      `}
        >
            {left}
            {right}
        </li>
    );
};
function BoardPage() {
    const router = useInternalRouter();
    const [list, setList] = useState<Item[]>([]);
    useEffect(()=>{
        getList().then((item)=>{
            console.log(item)
            debugger
            return setList(item);
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    return ( <List>
        {list.length >0 && list.map((item)=>{
            console.log(item)
            return <List.Row
                left={<div >{`${item.id}, ${item.content}`}</div>}
                right={<div >{item.memberInfo.name}</div>}/>
        })}
        <FixedBottomButton onClick={()=>{
            router.goBack()
        }}>
            로그아웃
        </FixedBottomButton>
    </List>)

}

export default  BoardPage