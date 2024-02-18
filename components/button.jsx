const Button = ({ primary, modifier, children, ...rest }) => {
    const baseStyle = `font-sans font-medium py-2 px-4 border rounded`
    const styles = primary
        ? `bg-orange-600 border-gray-300 hover:bg-orange-500 text-white`
        : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`

    return (
        <button type="button" className={`${baseStyle} ${styles} ${modifier}`}>
            {children}
        </button>
    )
}

export default Button
