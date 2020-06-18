import { RedisProxy } from "../redis/redis";
import { ClientOpts } from "redis";

export default class Helper {
  private static instance: RedisProxy;

  public static sleep(timeout): Promise<any> {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  }

  public static get Proxy(): RedisProxy {
    if (!Helper.instance) {
      // Helper.instance = new RedisProxy();
      let opt: ClientOpts = {
        host: "127.0.0.1",
        port: 6380,
      };
      Helper.instance = new RedisProxy(opt, console);
    }
    return Helper.instance;
  }

  public static async waitForSeconds(cb: Function, timeout: number) {
    await Helper.sleep(timeout);
    if (typeof cb === 'function') {
      cb();
    }
  }
};