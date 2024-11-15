import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error.message}`);
  }
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const url: string = "https://jsonplaceholder.typicode.com/posts/1";
const fetchPost = async (): Promise<Post | undefined> => {
  try {
    const data: Post = await fetchData<Post>(url);

    console.log(data);
    return data;
  } catch (error: any) {
    console.error(error);
    return undefined;
  }
};

fetchPost();
