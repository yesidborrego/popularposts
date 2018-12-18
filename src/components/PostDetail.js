import React from 'react'
import {Table, Icon, Image} from 'semantic-ui-react';

const PostDetail = ({post, handleUpVotes, handleDownVotes}) => {
  return (
    <Table.Row>
      <Table.Cell><img src={post.post_image_url} alt={post.title} /></Table.Cell>
      <Table.Cell textAlign='center'>
        <Icon link name='caret up' size='big' color='blue' onClick={handleUpVotes} />
        <strong>{post.votes}</strong><br/>
        <Icon link name='caret down' size='big' color='blue' onClick={handleDownVotes} />
      </Table.Cell>
      <Table.Cell>
        <p><a href={post.url}>{post.title}</a></p>
        <p>{post.description}</p>
        <span className='table_cell-writtenby'>Escrito por: </span><Image src={post.writer_avatar_url} alt='avatar' avatar />
      </Table.Cell>
    </Table.Row>
  )
};

export default PostDetail;
