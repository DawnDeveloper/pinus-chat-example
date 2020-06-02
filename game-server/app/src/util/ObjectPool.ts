export class ObjectPool {
    private _poolDic: { [x: string]: any; } = {};
    private _inPool: string = "__InPool";

    /**
     * 根据对象类型标识字符，获取对象池。
     * @param sign 对象类型标识字符。
     * @return 对象池。
     */
    public getPoolBySign(sign: string) {
        return this._poolDic[sign] || (this._poolDic[sign] = []);
    }
    /**
     * 清除对象池的对象。
     * @param sign 对象类型标识字符。
     */
    public clearBySign(sign: string) {
        if (this._poolDic[sign]) this._poolDic[sign].length = 0;
    }
    /**
     * 将对象放到对应类型标识的对象池中。
     * @param sign 对象类型标识字符。
     * @param item 对象。
     */
    public recover(sign: string, item: any) {
        if (item[this._inPool]) return;
        item[this._inPool] = true;
        this.getPoolBySign(sign).push(item);
    }
    /**
     * 根据类名进行回收，如果类有类名才进行回收，没有则不回收
     * @param	instance 类的具体实例
     */
    public recoverByClass(instance: any) {
        if (instance) {
            var className = instance["__className"] || instance.constructor._$gid;
            if (className) this.recover(className, instance);
        }
    }

    public getClassSign(cla) {
        var className = cla["__className"];
        return className;
    }
    /**
     * 根据类名回收类的实例
     * @param	instance 类的具体实例
     */
    public createByClass(cls: any) {
        return this.getItemByClass(this.getClassSign(cls), cls);
    }
    /**
     * <p>根据传入的对象类型标识字符，获取对象池中此类型标识的一个对象实例。</p>
     * <p>当对象池中无此类型标识的对象时，则根据传入的类型，创建一个新的对象返回。</p>
     * @param sign 对象类型标识字符。
     * @param cls 用于创建该类型对象的类。
     * @return 此类型标识的一个对象。
     */
    public getItemByClass(sign: string, cls: any) {
        if (!this._poolDic[sign]) return new cls();
        var pool = this.getPoolBySign(sign);
        if (pool.length) {
            var rst = pool.pop();
            rst[this._inPool] = false;
        } else {
            rst = new cls();
        }
        return rst;
    }
    /**
     * <p>根据传入的对象类型标识字符，获取对象池中此类型标识的一个对象实例。</p>
     * <p>当对象池中无此类型标识的对象时，则使用传入的创建此类型对象的函数，新建一个对象返回。</p>
     * @param sign 对象类型标识字符。
     * @param createFun 用于创建该类型对象的方法。
     * @param caller this对象
     * @return 此类型标识的一个对象。
     */
    public getItemByCreateFun(sign: string, createFun: Function, caller?: any) {
        var pool = this.getPoolBySign(sign);
        var rst = pool.length ? pool.pop() : createFun.call(caller);
        rst[this._inPool] = false;
        return rst;
    }
    /**
     * 根据传入的对象类型标识字符，获取对象池中已存储的此类型的一个对象，如果对象池中无此类型的对象，则返回 null 。
     * @param sign 对象类型标识字符。
     * @return 对象池中此类型的一个对象，如果对象池中无此类型的对象，则返回 null 。
     */
    public getItem(sign: string) {
        var pool = this.getPoolBySign(sign);
        var rst = pool.length ? pool.pop() : null;
        if (rst) {
            rst[this._inPool] = false;
        }
        return rst;
    }
}