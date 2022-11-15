import React, {Dispatch, SetStateAction} from 'react';
import st from './MyModalWindow.module.css'
type MyModalWindowPropsType = {
    children: React.ReactNode
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>

}
export const MyModalWindow = ({children,visible, setVisible} : MyModalWindowPropsType) => {
    const rootClassName = visible ? [st.container,st.active].join(" ") : st.container
    return (
        <div className={rootClassName} onClick={()=>setVisible(false)}>
            <div className={st.content} onClick={(e:React.MouseEvent<HTMLDivElement>)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

