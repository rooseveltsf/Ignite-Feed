import styles from './Post.module.css'
import { Comment } from "../Comment/index";
import { Avatar } from '../Avatar';
import { useState } from 'react';

export function Post({ post }) {
    const { author, content, publishedAt } = post
    const [txtComment, setTxtComment] = useState('')
    const [comments, setComments] = useState([])

    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt)

    const handleCreateNewComment = (evt) => {
        evt.preventDefault();

        setComments(prev => [...prev, txtComment])
        setTxtComment('')
    }

    const deleteComment = (comment) => {
        setComments(prev => prev.filter(item => item !== comment))
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime="2024-11-22">
                    {publishedDateFormatted}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    value={txtComment}
                    onChange={(evt) => setTxtComment(evt.target.value)}
                    placeholder='Deixe um comentário'></textarea>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>


            <div className={styles.commentList}>
                {comments.map((comment, index) => {
                    return <Comment
                        onDeleteComment={deleteComment}
                        key={comment}
                        content={comment} />
                })}
            </div>
        </article>
    )
}