
const Account = ({ username, text, tiktok, instagram, youtube }) => {
    return (
        <div className="mt-5" >
            <p><span className="font-semibold">{username}</span> {text}</p>
            <div className="flex gap-3 items-center text-xs" >
                <a className="uppercase block mt-1 text-blue-600 dark:text-blue-500 " href={tiktok} target="_blank" rel="noreferrer">TIKTOK</a>
                <a className="uppercase block mt-0.5 text-blue-600 dark:text-blue-500 " href={instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a className="uppercase block mt-0.5 text-blue-600 dark:text-blue-500 " href={youtube} target="_blank" rel="noreferrer">Youtube</a>
            </div>
        </div>
    )
}

export default Account