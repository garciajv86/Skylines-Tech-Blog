//* Event listener to handle the form submission for creating comments.
const handleNewCommentSubmit = async (event) => {
    event.preventDefault();
  
    const blogId = event.target.getAttribute('data-blog-id');
    const content = event.target.querySelector('#comment-content').value.trim();
  
    const response = await fetch(`/api/blogs/${blogId}/comments`, {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      //* Reload the page or update the comments section to reflect the new comment
      document.location.reload();
    } else {
      alert('Failed to create a new comment. Please try again.');
    }
  };
  
  document.querySelectorAll('.new-comment-form').forEach((form) => {
    form.addEventListener('submit', handleNewCommentSubmit);
  });