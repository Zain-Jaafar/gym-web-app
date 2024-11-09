export default function Button(props) {
    const { children } = props
    return (
        <>
            <button className='px-8 py-4 rounded-md border-2 border-blue-400 bg-slate-950 duration-100 blueShadow'>{children}</button>
        </>
    )
}
