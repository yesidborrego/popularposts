import React, { Component } from 'react';
import { Grid, Divider, Table } from 'semantic-ui-react';
import Buttons from './components/Button';
import PostDetail from './components/PostDetail';
import posts from './posts';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts,
      basic: true,
      noBasic: false
    };
    this.handleOrderAsc = this.handleOrderAsc.bind(this);
    this.handleOrderDesc = this.handleOrderDesc.bind(this);
  }

  fnOrderPosts(posts, order){
    switch (order) {
      case 'asc':
        posts.sort( (a, b) => {
          if(a.votes > b.votes) {
            return 1;
          } else if(a.votes < b.votes) {
              return -1;
          }
          return 0
        });
          break;
        
        case 'desc':
          posts.sort( (a, b) => {
            if(a.votes < b.votes) {
              return 1;
            } else if(a.votes > b.votes) {
                return -1;
            }
            return 0;
          });
          break;
        default:
          break;
      }
  }

  handleOrderAsc() {
    this.setState({
      basic: false,
      noBasic: true
    });
    this.fnOrderPosts(this.state.posts, 'asc')
  }
  
  handleOrderDesc() {
    this.setState({
      basic: true,
      noBasic: false
    });
    this.fnOrderPosts(this.state.posts, 'desc')
  }

  handleUpVotes(index) {
   this.state.posts.splice(index, 1, {...this.state.posts[index], votes: this.state.posts[index].votes + 1})
   this.setState({
     posts: this.state.posts
   });
  this.state.basic ? this.fnOrderPosts(this.state.posts, 'desc') : this.fnOrderPosts(this.state.posts, 'asc')
  }
  
  handleDownVotes(index) {
    this.state.posts.splice(index, 1, {...this.state.posts[index], votes: this.state.posts[index].votes - 1})
    this.setState({
      posts: this.state.posts
    });
    this.state.basic ? this.fnOrderPosts(this.state.posts, 'desc') : this.fnOrderPosts(this.state.posts, 'asc')
  }

  componentWillMount() {
    this.state.basic ? this.fnOrderPosts(this.state.posts, 'desc') : this.fnOrderPosts(this.state.posts, 'asc')
  }

  render() {
    return (
      <Grid centered columns={3}>

        <Grid.Row>
          <Grid.Column textAlign='center' width={8}>
            <Grid.Row>
              <h1>Blog posts populares</h1>
            </Grid.Row>
            <Grid.Row>
              <Divider />
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <span>Orden: </span>
            <Buttons 
              basicAsc={this.state.basic} 
              basicDesc={this.state.noBasic} 
              handleOrderAsc={this.handleOrderAsc} 
              handleOrderDesc={this.handleOrderDesc} 
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <Table basic='very'>
              <Table.Body>
              {
                this.state.posts.map((post, index) => {
                  return (
                    <PostDetail 
                      key={post.id} 
                      post={post} 
                      handleUpVotes={this.handleUpVotes.bind(this, index)} 
                      handleDownVotes={this.handleDownVotes.bind(this, index)} 
                    />
                    )
                  })
                }
              </Table.Body>
            </Table>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
