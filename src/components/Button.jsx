export default function Button(props) {
    const { children, func } = props
    return (
        <>
            <button onClick={func} className='mx-auto px-8 py-4 rounded-md border-2 border-blue-400 bg-slate-950 duration-100 blueShadow'>{children}</button>
        </>
    )
}
