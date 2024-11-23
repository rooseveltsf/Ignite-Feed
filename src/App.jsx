import Header from './components/Header'
import Styles from './App.module.css'
import './global.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>
      <Header />
      <div className={Styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Roosevelt" content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, accusamus praesentium soluta dolores, labore ipsam odit magnam, laboriosam dolorem quo tempora tempore dicta nemo. Nesciunt nemo dignissimos delectus nihil ipsa?' />
          <Post content='Post 2' />
          <Post content='Post 3' />
          <Post content='Post erewrwerwerewrwe4' />
          <Post content='Post 51' />
          <Post content='Post er51' />
          <Post content='Post ew1' />
          <Post content='Post 1sdf' />
        </main>
      </div>
    </>
  )
}

export default App

