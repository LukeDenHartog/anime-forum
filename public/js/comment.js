const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment_text = document.getElementById('comment-text').value.trim();
  
    if (comment_text) {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ comment_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create new comment.');
        console.log('Failed to create new comment.')
        console.log(response)
      }
    }
  };

document.querySelector('.new-comment-form').addEventListener('submit', newCommentHandler);
