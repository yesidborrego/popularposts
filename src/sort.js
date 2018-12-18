const fnOrderPosts = function(posts, order){
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
    return posts;
}

export default fnOrderPosts;