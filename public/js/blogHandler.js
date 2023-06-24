//* Function to handle the form submission for creating a new blog
const handleNewBlogSubmit = async (event) => {
  event.preventDefault();

  //* Get the input values from the form
  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-content').value.trim();

  //* Make an API request to create a new blog
  const response = await fetch('/api/blogs', {
    method: 'POST',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    //* If the blog was created successfully, reload the page to see the new blog
    document.location.reload();
  } else {
    //* Display an error message if the blog creation failed
    alert('Failed to create a new blog. Please try again.');
  }
};

//* Function to handle the click event for deleting a blog
const handleDeleteBlogClick = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const blogId = event.target.getAttribute('data-id');

    //* Make an API request to delete the blog
    const response = await fetch(`/api/blogs/${blogId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      //* If the blog was deleted successfully, reload the page to reflect the changes
      document.location.reload();
    } else {
      //* Display an error message if the blog deletion failed
      alert('Failed to delete the blog. Please try again.');
    }
  }
};

//* Event listeners for form submission and click events
document.querySelector('.new-blog-form').addEventListener('submit', handleNewBlogSubmit);
document.querySelector('.blog-list').addEventListener('click', handleDeleteBlogClick);


