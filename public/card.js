const Card = ({header, title, text, body, status, bgcolor, txtcolor}) => {

    const classes = () => {
        const bg = bgcolor ? ` bg-${bgcolor}` : ''; 
        const txt = txtcolor ? ` text-${txtcolor}` : ' text-white';
        return `card mb-3 ${bg} ${txt}`;   
    }

    return (
        <div className={classes()} style={{maxWidth: "600px"}}>
            <div className="card-header">
                {header}
            </div>
            <div className="card-body">
                <strong className="card-title">{title && (<strong className="card-title">{title}</strong>)}</strong>
                <p className="card-text">
                    {text && (<span className="card-text">{text}</span>)}
                    {body}
                    {status && (<span className="createStatus">{status}</span>)}
                </p>
            </div>
        </div>
    )
}
