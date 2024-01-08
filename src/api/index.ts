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

  async getPagesStaticPaths() {
    const url = this.baseUrl + "/pages/" + "static-paths";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  }

  async updatePage(body: any) {
    const url = this.baseUrl + "/pages" + "/" + body.page.id;
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  }

  async createPage(body: any) {
    const url = this.baseUrl + "/pages";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  }

  async getPage(slug: string) {
    const url = this.baseUrl + "/pages" + "/" + slug;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async getProductById(id: number) {
    try {
      const url = this.baseUrl + "/products" + "/" + id;
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (err) {
      return;
    }
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
