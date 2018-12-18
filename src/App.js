import React, { Component } from 'react';
import { Grid, Divider, Table } from 'semantic-ui-react';
import Buttons from './components/Button';
import PostDetail from './components/PostDetail';
import posts from './posts';
import fnOrderPosts from './sort';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: null,
      basic: true,
      noBasic: false
    };
    this.handleButtonAsc = this.handleButtonAsc.bind(this);
    this.handleButtonDesc = this.handleButtonDesc.bind(this);
  }

  handleButtonAsc() {
    if(this.state.basic) {
      this.setState({
        basic: false,
        noBasic: true
      });
      this.state.posts.reverse();
    }
  }
  
  handleButtonDesc() {
    if(this.state.noBasic) {
      this.setState({
        basic: true,
        noBasic: false
      });
      this.state.posts.reverse();
    }
  }

  handleUpVotes(index) {
    this.state.posts.splice(index, 1, {...this.state.posts[index], votes: this.state.posts[index].votes + 1});
    this.setState({
      posts: this.state.posts
    });
    this.state.basic ? fnOrderPosts(this.state.posts, 'desc') : fnOrderPosts(this.state.posts, 'asc');
  }
  
  handleDownVotes(index) {
    this.state.posts.splice(index, 1, {...this.state.posts[index], votes: this.state.posts[index].votes - 1});
    this.setState({
      posts: this.state.posts
    });
    this.state.basic ? fnOrderPosts(this.state.posts, 'desc') : fnOrderPosts(this.state.posts, 'asc');
  }

  componentWillMount() {
    const postSort =  fnOrderPosts(posts, 'desc')
    this.setState({
      posts: postSort
    });
  }

  render() {
    return (
      <Grid centered>

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
              handleButtonAsc={this.handleButtonAsc} 
              handleButtonDesc={this.handleButtonDesc} 
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
