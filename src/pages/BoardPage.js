import { useEffect, useState } from "react";
import { getList } from "./remotes";
import FixedBottomButton from "../components/FixedBottomButton";
import { css } from "@emotion/react";
import { useInternalRouter } from "../hooks/useInternalRouter";
import colors from "../constants/colors";
/*
* >는 직계 자식
* :not(:first-of-type)은 첫 번째 자식을 제외한 나머지 요소
* */
export function List({ className, children }) {
    return (React.createElement("ul", { className: className, css: css `
        padding: 0 24px;
        display: flex;
        flex-direction: column;
        > li:not(:first-of-type) {
          margin-top: 15px;
        }
      ` }, children));
}
List.Row = ({ className, left, right, onClick }) => {
    return (React.createElement("li", { onClick: onClick, className: className, css: css `
            outline: none;
            border: 0 none;
            border-bottom: 2px solid ${colors.grey300};
            display: flex;
            justify-content: space-between;
            align-items: center;
      ` },
        left,
        right));
};
function BoardPage() {
    const router = useInternalRouter();
    const [list, setList] = useState([]);
    useEffect(() => {
        getList().then((item) => {
            return setList(item);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (React.createElement(List, null,
        list.map((item) => {
            return React.createElement(List.Row, { left: React.createElement("div", null, `${item.id}, ${item.content}`), right: React.createElement("div", null, item.memberInfo.name) });
        }),
        React.createElement(FixedBottomButton, { onClick: () => {
                router.goBack();
            } }, "\uB85C\uADF8\uC544\uC6C3")));
}
export default BoardPage;
