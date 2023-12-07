export interface PaginationRequest {
  perPage: number;
  page: number;
}

export interface PaginationResponse {}

export interface IGetPosts {
  pagination: PaginationRequest;
}

class ApiClient {
  baseUrl = process.env.NEXT_PUBLIC_API_URL + "/v1";
  async getPosts({ pagination }: IGetPosts) {
    const url =
      this.baseUrl +
      "/posts" +
      `?perPage=${pagination.perPage}&page=${pagination.page}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async getPost(slug: string) {
    const url = this.baseUrl + "/posts/" + slug;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
}
export default ApiClient;
