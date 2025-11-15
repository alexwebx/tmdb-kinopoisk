import s from './Button.module.css'

export type ButtonProps = {
    titleButton: string,
    activeButton?: boolean,
}

export function Button({titleButton, activeButton}: ButtonProps) {
    return (
        <button className={`${s.cattegory__btn} ${activeButton ? s.active : ''}`.trim()}>
            {titleButton}
        </button>
    )
}