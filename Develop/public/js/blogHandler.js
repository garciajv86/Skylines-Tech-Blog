const createBlog = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const content = document.querySelector('#blog-title').value.trim();

  if (username && content) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ username, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/blogs');
    } else {
      alert('Failed to create blog');
    }
  }
};

const deleteBlog = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/blogs');
    } else {
      alert('Failed to delete blog');
    }
  }
};

const updateBlog = async (event) => {
  event.preventDefault();

  const id = event.target.getAttribute('data-id');
  const content = document.querySelector('#updated-content').value.trim();

  if (content) {
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/blogs');
    } else {
      alert('Failed to update blog');
    }
  }
};

document.querySelector('.new-blog-form').addEventListener('submit', createBlog);

document.querySelector('.blog-list').addEventListener('click', deleteBlog);

document.querySelectorAll('.update-blog-form').forEach((form) => {
  form.addEventListener('submit', updateBlog);
});

