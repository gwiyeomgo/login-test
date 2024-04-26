import {ComponentPropsWithoutRef, forwardRef, ReactNode, Ref, useEffect, useRef} from "react";
import Button from "./Button";
import {GlobalPortal} from "../GlobalPortal";
import FocusTrap from "focus-trap-react";
/***
1. //https://xionwcfm.tistory.com/316#%F0%9F%A4%A1%EB%AA%A8%EB%8B%AC%20%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0-1
2.Property 'css' does not exist on type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'
 css={css`
    -> 해결 tsconfig.json     "jsxImportSource": "@emotion/react"

    https://velog.io/@remon/React-Emotion-%EC%84%A4%EC%B9%98-%ED%9B%84-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%98%88%EC%A0%9C-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0

 3.모달 뒤에 포커스가 가지 않도록 막기 =>  포커스 트랩
 https://www.npmjs.com/package/focus-trap-react
 https://ianlog.me/blog/modal-atoz/alert-dialog-focus-trap
 https://medium.com/cstech/achieving-focus-trapping-in-a-react-modal-component-3f28f596f35b

 ***/

type ModalProps = {
    isOpen ?: boolean,
    children ?: ReactNode
};
const FixedCenterModal = forwardRef(function FixedCenterModal(
    props: ComponentPropsWithoutRef<typeof Button> & ModalProps,  //https://www.pumpkiinbell.com/blog/react/reusable-components
) {

    //https://velog.io/@do_dadu/React%EC%97%90%EC%84%9C-Modal-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0feat.-createPortal-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A7%89%EA%B8%B0
    useEffect(() => {
        document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, [])

    return (
        props.isOpen ? <GlobalPortal.Consumer>
            <FocusTrap  active={props.isOpen}>
            <div
                className="modal"
                style={{
                    background: 'rgba(0, 0, 0, 0.25)',
                    position: "fixed",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "fit-content",
                    height: "fit-content",
                }}
            >
                {props.children}
                <Button {...props} onClick={props.onClick}  data-testid="mcb">
                    확인
                </Button>
            </div>
            </FocusTrap>
        </GlobalPortal.Consumer> :<></>
    );
})

export default FixedCenterModal