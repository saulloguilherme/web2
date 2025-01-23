import './Post.css'
import icone from "../assets/icone.png"

function Post({ author, postText }) {
return (
        <article>
            <div class="post-author">
                <img alt="Icone Autor" src={icone} />
                <div class="post-author-name">{author}</div>
            </div>
            <h2>Título bem grandão do post pra colocar aqui,
                talvez quebrando linha.</h2>
            <p class="post-text">
                {postText}
            </p>
        </article>
    )
}

export default Post;
