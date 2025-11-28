
interface ButtonInterface {
    className: String,
    children: String
}

function Button({ className, children }: ButtonInterface) {
    return (
        <>
            <div>
                <button className={" btn  " + className}> {children} </button>
            </div>
        </>
    )
}

export default Button