import animadoGif from "../images/animado_emoticon.gif";
import ansiedadeGif from "../images/ansioso_emoticon.gif";
import apaixonadoGif from "../images/apaixonado_emoticon.gif";
import confusoGif from "../images/confuso_emoticon.gif";
import constrangidoGif from "../images/constrangido_emoticon.gif";
import medoGif from "../images/medo_emoticon.gif";
import nostalgiaGif from "../images/nostalgia_emoticon.gif";
import raivaGif from "../images/raiva_emoticon.gif";
import tedioGif from "../images/tedio_emoticon.gif";
import tristeGif from "../images/triste_emoticon.gif";
import vergonhaGif from "../images/vergonha_emoticon.gif"

import { useNavigate } from "react-router-dom";
import "../style/post_style.css"

function Post(props){
    const navigate = useNavigate();

    const handlePostEdit = () => {
        navigate(`/editar/${props.dataPost.id}`)
    }

    const emoticonGifs = {
        animado: animadoGif,
        ansioso: ansiedadeGif,
        apaixonado: apaixonadoGif,
        confuso: confusoGif,
        constrangido: constrangidoGif,
        medo: medoGif,
        nostalgia: nostalgiaGif,
        raiva: raivaGif,
        tedio: tedioGif,
        triste: tristeGif,
        vergonha: vergonhaGif
    }

    const emocao = props.dataPost.emocao

    return(
        <div className="post_king">
            <h1>
                {props.dataPost.titulo}
            </h1>

            <hr id="line"/>

            <p className="post_paragrafo">
                {props.dataPost.paragrafo}
            </p>

            <div>
                <p className="post_emoticon_itens">
                    <spam id="humor_text">Humor =</spam> <img src={emoticonGifs[emocao]} alt="Humor" id="post_emoticon"/> <spam id="text_emoticon">{props.dataPost.emocao}</spam>
                </p>
            </div>

            <p className="post_dados">
                {props.dataPost.autor} | {props.dataPost.data}
            </p>

            {props.canEdit ? <button type="button" onClick={handlePostEdit}>Editar Post</button> : ""}
        </div>
    )
}

export default Post;