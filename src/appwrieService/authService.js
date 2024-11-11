import { Client, Account, ID } from "appwrite";
import config from "../config/config";


export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
      console.log(config.appwriteUrl);

  }

  async createAccount({ email, password }) {
    try {
      const newUserAccount = await this.account.create(
        ID.unique(),
        email,
        password
      );

      return newUserAccount ? await this.login({ email, password }) : null;
    } catch (error) {
      console.error("Appwrite Service :: createAccount ::", error.message);
      throw new Error(error.message);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite Service :: Login Account ::", error.message);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
