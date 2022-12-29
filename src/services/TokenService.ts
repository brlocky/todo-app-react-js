const TOKEN_KEY = 'token';

export interface TokenDto {
  accessToken: string;
  refreshToken: string;
}

export class TokenService {
  private static instance: TokenService;

  static getInstance() {
    if (!TokenService.instance) {
      TokenService.instance = new TokenService();
    }
    return TokenService.instance;
  }

  private token: TokenDto | null;
  public constructor() {
    const token = localStorage.getItem(TOKEN_KEY) || null;
    if (token) {
      this.token = JSON.parse(token);
    } else {
      this.token = null;
    }
  }

  public getToken(): TokenDto | null {
    return this.token;
  }

  public setToken(token: TokenDto) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    this.token = token;
  }

  public deleteToken() {
    this.token = null;
    localStorage.removeItem(TOKEN_KEY);
  }
}

export const TokenServiceInstance = TokenService.getInstance();
