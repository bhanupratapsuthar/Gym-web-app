import { httpClient } from "./apiInstance";

export const createBlog = async (data,image) => {
  try {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('excerpt', data.excerpt);
    formData.append('content', data.content);
    formData.append('author', data.author);
    formData.append('category', data.category);

    if (image) {
      formData.append('image', image);
    }

    const response = await httpClient.post('/blog/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data
    // Reset the form
  } catch (error) {
    throw error
  }
};

export const deleteBlogApi = async (id) => {
  try {
      const response = await httpClient.delete(`/blog/${id}`);
      return response.data;
  } catch (error) {
      throw error;
  }
};