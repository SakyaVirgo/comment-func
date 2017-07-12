import React,{Component , PropTypes} from 'react';/*
 *  添加评论列表项组件
 */

export default class CommentItem extends Component{
    static propTypes = {
        comment: PropTypes.object ,
        removeComment : PropTypes.func ,
        index : PropTypes.number
    }

    remove=()=>{
        const {comment , removeComment , index} = this.props;
        if(window.confirm(`你确定要删除${comment.username}的评论吗？`)){
            removeComment(index)
        }
    }

    render(){
        const {comment} = this.props
        console.log(comment)
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.remove}>删除</a>
                </div>
                <p className="user"><span >{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}