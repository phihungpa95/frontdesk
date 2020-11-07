import React, {useState, useRef} from 'react';
import $ from 'jquery'


export default ({children}) => {
    let arr = [1,2,4,4,5,6,6]

    function handelOnClick(e){
        
    }

    return <>
        <Accoridion 
            title="Accordion 1"
        >
            
                Accordion content 1 <br />
                Accordion content 1 <br />
                Accordion content 1 <br />
                Accordion content 1 <br />
                Accordion content 1 <br />
                Accordion content 1 <br />
                Accordion content 1 <br />
            
            
        </Accoridion>
        <Accoridion 
            title="Accordion 1"
        >
            
                Accordion content 1 <br />
                Accordion content 1 <br />
                Accordion content 1 <br />
                Accordion content 1 <br />
                Accordion content 1 <br />
                Accordion content 1 <br />
                Accordion content 1 <br />
            
            
        </Accoridion>

        <hr />
        <CommentListWithSubscription />
        <BlogPostWithSubscription />
    </>
}


const Accoridion = ({title, children}) => {
    let ref = useRef(null)

    function onClick(){
        $(ref.current).find('.description').slideToggle()
    }
    return <div className="accoridion" ref={ref}>
        <div className="title" onClick={onClick}>{title}</div>
        <div className="description" style={{display: 'none'}} >{children}</div>
    </div>
}

let DataSource = {
    getComments: () => {
        return [
            'comment 1',
            'comment 2',
        ]
    },
    getBlogPost: () => {
        return [
            'blog 1',
            'blog 2',
        ]
    },
    addChangeListener:() => {}
}

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        {this.props.data.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}

function Comment({comment}){
    return <div className="commment">{comment}</div>
}

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TextBlock text={this.props.data} />;
  }
}

function TextBlock({text}){
    return <div className="text">{text}</div>
}


function withSubscription(WrappedComponent, selectData){
    return class extends React.Component{
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }

        componentDidMount() {
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }

         render() {
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    }
}

const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);