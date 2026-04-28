import { useNavigate } from "react-router-dom";

function Post(props){
    const navigate = useNavigate();

    const handlePostEdit = () => {
        navigate(`/editar/${props.dataPost.id}`)
    }

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

            {props.canEdit ? <button type="button" onClick={handlePostEdit}>Editar Post</button> : ""}
        </div>
    )
}

export default Post;