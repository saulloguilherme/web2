import { useState } from 'react'
import Post from './components/Post.jsx'
import imgEffect from "./assets/img-effect.png"
import './App.css'

function App() {

  return (
    <>
      <html lang="en">
        <body>
          <header>
            <div class="header-logo">Web<span>Blog</span></div>
            <div class="header-rights">powered by WebII</div>
            <button>Criar post</button>
          </header>
          <div class="container">
            <main>
              <Post author='Randall Pearson'
                postText='É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto
                  legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele
                  tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com
                  que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores
                  de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por
                  "lorem ipsum" mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram
                  ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do
                  gênero). A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de
                  "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto
                  legível.'
              ></Post>
              <Post
                author='Madison Ryan Ward'
                postText='É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto
                  legível
                  de uma página quando estiver examinando sua diagramação.
                  A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de
                  "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto
                  legível. É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível
                  de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele
                  tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com
                  que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores
                  de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por
                  "lorem ipsum" mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram
                  ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do
                  gênero).'>

              </Post>
              <Post
                author='LeBron James'
                postText='Título bem grandão do post pra colocar aqui,
                  talvez quebrando linha.</h2>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                  book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
                  Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                  Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in
                  their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                  Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book
                  is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem
                  Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Finibus Bonorum et
                  Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                  theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
                  dolor sit amet..", comes from a line in section 1.10.32.'>
              </Post>
              <Post
                author='Angelina Jolie'
                postText='It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to using "Content here, content here",
                  making it look like readable English. Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites
                  still in their infancy. Various versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like).
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which dont look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt
                  anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                  tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                  It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                  to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                  from repetition, injected humour, or non-characteristic words etc
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                  consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                  book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
                  Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                  Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in
                  their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'>
              </Post>
              <Post
                author='Joel Miller'
                postText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                  commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.'>
              </Post>
            </main>
            <aside>
              <h1 class="aside-title">
                Tem algum assunto pra compartilhar?
              </h1>
              <div class="aside-subtitle">
                Crie agora um post e compartilhe com o seu conteúdo.
              </div>
              <button>Criar post</button>
              <img alt="Imagem de decoração" src={imgEffect} />
            </aside>
          </div>
          <footer>
            <div class="header-logo">Web<span>Blog</span></div>
            <div class="footer-text">powered by WebII</div>
          </footer>
        </body>
      </html>
    </>
  )
}

export default App
