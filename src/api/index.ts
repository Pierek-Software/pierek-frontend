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
  baseAdminUrl = this.baseUrl + "/admin";

  async getPosts({ pagination }: IGetPosts) {
    const url =
      this.baseUrl +
      "/posts" +
      `?perPage=${pagination.perPage}&page=${pagination.page}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async adminGetPageById(id: string) {
    const url = this.baseAdminUrl + "/pages" + "/" + id;

    const request = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        key: localStorage.getItem("key"),
      },
    });

    const response = await request.json();
    return response;
  }

  async verifyKey(key: string) {
    const url = this.baseUrl + "/verify-key";
    try {
      const request = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ key }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await request.json();
      return response;
    } catch (err) {
      return false;
    }
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

  async updatePage(page: any) {
    const url = this.baseUrl + "/pages" + "/" + page.id;
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(page),
      headers: {
        "Content-Type": "application/json",
        key: localStorage.getItem("key"),
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
