import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/rooseveltsf.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Roosevelt Souza</strong>
                            <time title="22 de Novembro às 22:33" dateTime="2024-11-22">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={() => onDeleteComment(content)} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={() => setLikeCount(prev => prev + 1)}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}