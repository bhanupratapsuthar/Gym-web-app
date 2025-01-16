import { httpClient } from "./apiInstance";

export const createProduct = async (data,image) => {

    try {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('price', parseInt(data.price));
        formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('quantity', parseInt(data.quantity));

    if (image) {
        formData.append('image', image);
    }

    const response = await httpClient.post('/product/create', formData, {
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

export const deleteProuductApi = async (id) => {
    try {
        const response = await httpClient.delete(`/product/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};