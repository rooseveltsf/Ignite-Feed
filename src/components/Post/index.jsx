export function Post({ content, author }) {
    return (
        <article>
            <header>
                <div>
                    <img src="https://github.com/rooseveltsf.png" />
                    <div>
                        <strong>Roosevelt de Souza</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="22 de Novembro às 22:33" dateTime="2024-11-22">Publicado há 1hr</time>
            </header>

            <div>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">👉 jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}