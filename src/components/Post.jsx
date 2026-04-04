function Post(props){
    return(
        <div>
            <h1>
                {props.dataPost.titulo}
            </h1>

            <p>
                {props.dataPost.paragrafo}
            </p>

            <p>
                {props.dataPost.autor}
            </p>

            <p>
                {props.dataPost.data}
            </p>

            <p>
                {props.dataPost.emocao}
            </p>
        </div>
    )
}

export default Post;