import React,{Component} from 'react';
import CommentAdd from '../CommentAdd/CommentAdd'
import CommentList from '../CommentList/CommentList'
/*
 * 应用组件模块
 *
 * 整体：向外暴露一个组件类
 */

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            comments : [
                {
                    username:'virgo',
                    content:'啦啦啦'
                },
                {
                    username:'9527',
                    content:'嘿嘿嘿'
                }
            ]
        }
        this.addComment = this.addComment.bind(this); //修改addComment的this为组件实例对象的this
        this.removeComment = this.removeComment.bind(this)
    }
//添加评论
    addComment (comment){
        //获取comments
        const {comments} = this.state ;
        //修改状态
        comments.unshift(comment);
        //更新状态
        this.setState({comments})
    }
//删除评论
    removeComment (index){
        // 获取comments
        const {comments} = this.state;
        //修改状态
        comments.splice(index , 1);
        //更新状态
        this.setState({comments})
    }

    render(){
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment = {this.addComment} />
                    <CommentList comments = {this.state.comments} removeComment =  {this.removeComment} />


                </div>
            </div>
        )
    }
};