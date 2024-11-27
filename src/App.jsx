import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import Styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rooseveltsf.png",
      name: "Roosevelt Souza",
      role: "Web Developer"
    },
    publishedAtt: new Date('2024-11-25 14:30:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ]
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rooseveltsf.png",
      name: "Roosevelt Souza",
      role: "Software Enginer"
    },
    publishedAt: new Date('2024-11-25 14:30:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rooseveltsf.png",
      name: "Roosevelt Souza",
      role: "Web Developer"
    },
    publishedAt: new Date('2024-11-25 14:30:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ]
  },
]

function App() {

  return (
    <>
      <Header />
      <div className={Styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => <Post key={post.id} post={post} />)
          }
        </main>
      </div>
    </>
  )
}

export default App

