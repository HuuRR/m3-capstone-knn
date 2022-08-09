import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { DeleteCommentModal } from "../deleteCommentModal"
import { CommentCard, Content, UserInfo } from "./style"

export function CardComments({comment, authorId, id}){

    const {user} = useContext(UserContext)

    return(
        <>
        {
            user?.type === "content creator" && user?.id === authorId ?
             (
                <CommentCard>

                <UserInfo>
                    <img src={comment.userImg} alt={comment.username}/>
                    <h3>{comment.username}</h3>
                </UserInfo>

                <Content>
                    {comment.content}
                </Content>
                <DeleteCommentModal commentId={comment.id} id={id}/>
                </CommentCard>
             )
              : 
              (
                  <CommentCard>

                <UserInfo>
                    <img src={comment.userImg} alt={comment.username}/>
                    <h3>{comment.username}</h3>
                </UserInfo>

                <Content>
                    {comment.content}
                </Content>

                </CommentCard>
              )
        }
            
        </>
    )
}