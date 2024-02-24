export interface PaginationRequest {
  perPage: number;
  page: number;
}

export interface PaginationResponse {}

export interface GetPosts {
  pagination: PaginationRequest;
}

class ApiClient {
  baseUrl = process.env.NEXT_PUBLIC_API_URL + "/v1";
  async getPosts({ pagination }: GetPosts) {
    const url =
      this.baseUrl +
      "/posts" +
      `?perPage=${pagination.perPage}&page=${pagination.page}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async getPostsList() {
    const url = this.baseUrl + "/posts-list";
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async getAuthors() {
    const url = this.baseUrl + "/authors";
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async getSitemap() {
    const url = this.baseUrl + "/sitemap.xml";
    const response = await fetch(url);

    const xml = await response.text();

    return xml;
  }

  async getPost(slug: string) {
    const url = this.baseUrl + "/posts/" + slug;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async getPostRecommendations(slug: string) {
    const url = this.baseUrl + "/posts/" + slug + "/recommendations";
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
}
export default ApiClient;
