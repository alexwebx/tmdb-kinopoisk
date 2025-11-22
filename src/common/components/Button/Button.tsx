import s from './Button.module.css'

export type ButtonProps = {
    titleButton: string,
    activeButton?: boolean,
    onclickHandler?:()=>void,
    id_db?: number
}

export function Button({titleButton, activeButton, onclickHandler, id_db}: ButtonProps) {
    return (
        <button
            className={`${s.cattegory__btn} ${activeButton ? s.active : ''}`.trim()}
            onClick={onclickHandler}
            {...(id_db && { 'id-db': id_db })}
        >
            {titleButton}
        </button>
    )
}