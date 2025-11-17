import s from './Button.module.css'

export type ButtonProps = {
    titleButton: string,
    activeButton?: boolean,
    onclickHandler?:()=>void,
}

export function Button({titleButton, activeButton, onclickHandler}: ButtonProps) {
    return (
        <button className={`${s.cattegory__btn} ${activeButton ? s.active : ''}`.trim()} onClick={onclickHandler}>
            {titleButton}
        </button>
    )
}