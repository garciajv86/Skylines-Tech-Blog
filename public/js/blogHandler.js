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

//* Function to handle the form submission for editing a blog
const handleEditBlogSubmit = async (event) => {
  event.preventDefault();

  //* Get the input values from the form
  const blogId = event.target.querySelector('input[name="blog-id"]').value;
  const title = event.target.querySelector('#edit-blog-title').value.trim();
  const content = event.target.querySelector('#edit-blog-content').value.trim();

  //* Make an API request to update the blog
  const response = await fetch(`/api/blogs/${blogId}`, {
    method: 'PUT',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    //* If the blog was updated successfully, reload the page to see the changes
    document.location.reload();
  } else {
    //* Display an error message if the blog update failed
    alert('Failed to update the blog. Please try again.');
  }
};

//* Function to handle the click event for toggling the edit form
const handleToggleEditForm = (event) => {
  const blogId = event.target.getAttribute('data-id');
  const editForm = document.querySelector(
    `.blog-edit-form[data-id="${blogId}"]`
  );

  if (editForm) {
    editForm.classList.toggle('d-none');
  }
};

//* Event listeners for form submission and click events
document
  .querySelector('.new-blog-form')
  .addEventListener('submit', handleNewBlogSubmit);
const blogList = document.querySelector('.blog-list');
if (blogList) {
  blogList.addEventListener('click', handleDeleteBlogClick);
  document.querySelectorAll('.edit-blog-form').forEach((form) => {
    form.addEventListener('submit', handleEditBlogSubmit);
  });
  document.querySelectorAll('.edit-blog-button').forEach((button) => {
    button.addEventListener('click', handleToggleEditForm);
  });
}
