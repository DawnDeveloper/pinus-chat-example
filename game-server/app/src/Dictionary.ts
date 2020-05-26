export class Dictionary<T> {
    private _values: Array<T> = [];
    private _keys: Array<number | string> = [];

    /**
     * 获取所有的子元素列表。
     */
    public get values(): Array<T> {
        return this._values;
    }

    /**
     * 获取所有的子元素键名列表。
     */
    public get keys(): Array<number | string> {
        return this._keys;
    }

    /**
     * 给指定的键名设置值。
     * @param	key 键名。
     * @param	value 值。
     */
    public set(key: number | string, value: T): void {
        var index: number | string = this.indexOf(key);
        if (index >= 0) {
            this._values[index] = value;
            return;
        }
        this._keys.push(key);
        this._values.push(value);
    }

    /**
     * 获取指定对象的键名索引。
     * @param	key 键名对象。
     * @return 键名索引。
     */
    public indexOf(key: number | string): number | string {
        var index: number | string = this._keys.indexOf(key);
        if (index >= 0) return index;
        // key = (typeof key === 'string') ? Number(key) : ((typeof key === 'number') ? key.toString() : key);
        // return this._keys.indexOf(key);
    }

    /**
     * 返回指定键名的值。
     * @param	key 键名对象。
     * @return 指定键名的值。
     */
    public get(key: number | string): number | string {
        var index = this.indexOf(key);
        return index < 0 ? null : this._values[index];
    }

    /**
     * 移除指定键名的值。
     * @param	key 键名对象。
     * @return 是否成功移除。
     */
    public remove(key: number | string): Boolean {
        var index: number = Number(this.indexOf(key));
        if (index >= 0) {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * 清除此对象的键名列表和键值列表。
     */
    public clear(): void {
        this._values.length = 0;
        this._keys.length = 0;
    }
}

var test = new Dictionary<Array<number>>();
test.set(1, [1, 2, 3]);
test.set("2", [1, 2, 3]);
console.log(test, test.get(1));
console.log(test.keys);
console.log(test.values);
test.remove(1);
console.log(test);
test.clear();
console.log(test);