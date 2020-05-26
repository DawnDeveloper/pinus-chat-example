"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    return new AuthRemoter(app);
}
exports.default = default_1;
class AuthRemoter {
    constructor(app) {
        this.app = app;
        this.channelService = this.app.get("channelService");
        this.app = app;
    }
    /**
     *
     * @param username
     * @param password
     */
    async auth(username, password) {
        return true;
    }
    async add(uid, sid, rid, flag) {
        let channale = this.app.get("channelService").getChannel(rid, flag); //如果没有该房间，flag为true则自动创建
        let username = uid.split('*')[0];
        var param = {
            user: username
        };
        channale.pushMessage('onAdd', param);
        if (!!channale)
            channale.add(uid, sid);
        return this.get(rid, flag);
    }
    async get(name, flag) {
        let users = [];
        let channel = this.channelService.getChannel(name, flag);
        if (!!channel) {
            users = channel.getMembers();
        }
        for (var i = 0; i < users.length; i++) {
            users[i] = users[i].split('*')[0];
        }
        return users;
    }
    async kick(uid, sid, name) {
        let channel = this.channelService.getChannel(name, false);
        if (!!channel) {
            channel.leave(uid, sid);
        }
        let username = uid.split('*')[0];
        let param = {
            route: "onLeave",
            user: username
        };
        channel.pushMessage("onLeave", param);
    }
    // 私有方法不会加入到RPC提示里
    async privateMethod(testarg, arg2) {
    }
}
exports.AuthRemoter = AuthRemoter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZVJlbW90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcC9zZXJ2ZXJzL2dhbWUvcmVtb3RlL2dhbWVSZW1vdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtQkFBeUIsR0FBZ0I7SUFDckMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRkQsNEJBRUM7QUFhRCxNQUFhLFdBQVc7SUFDcEIsWUFBb0IsR0FBZ0I7UUFBaEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUk1QixtQkFBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFIcEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUlEOzs7O09BSUc7SUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7UUFDaEQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxHQUFXLEVBQUUsSUFBYTtRQUNqRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7UUFDN0YsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLEtBQUssR0FBRztZQUNSLElBQUksRUFBRSxRQUFRO1NBQ2pCLENBQUE7UUFFRCxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsQ0FBQyxRQUFRO1lBQ1YsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFZLEVBQUUsSUFBYTtRQUN4QyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ1gsS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNoQztRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxJQUFZO1FBQ3BELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzQjtRQUVELElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakMsSUFBSSxLQUFLLEdBQUc7WUFDUixLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsUUFBUTtTQUNqQixDQUFBO1FBRUQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGtCQUFrQjtJQUNWLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBZSxFQUFFLElBQVk7SUFFekQsQ0FBQztDQUNKO0FBbkVELGtDQW1FQyJ9