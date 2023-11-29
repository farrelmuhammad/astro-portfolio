import axios from 'axios'

interface Props {
  endpoint: string
  method: string
  params?: string
  body?: any,
}

export default async function fetchApi({
  endpoint,
  method = 'GET',
  params,
  body,
}: Props) {
  try {
    const config = {
      method: method,
      url: `${import.meta.env.STRAPI_URL}/api/${endpoint}${params}`,
      headers: {
        Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
      },
    };

    const { data } = await axios(config);

    return data['data']; // Kembalikan respons data keseluruhan
  } catch (error) {
    console.error(error);
    return null; // Mengembalikan null jika ada kesalahan
  }
}