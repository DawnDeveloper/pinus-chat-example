"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    return new Handler(app);
}
exports.default = default_1;
class Handler {
    constructor(app) {
        this.app = app;
        this.app = app;
    }
    async queryEntry(msg, Session) {
        let uid = msg.uid;
        console.log("come in queryEntry");
        if (!uid) {
            return { code: 500 };
        }
        let connectors = this.app.getServersByType('connector');
        if (!connectors || connectors.length === 0) {
            return { code: 500 };
        }
        let res = connectors[0];
        return { code: 200, host: res.host, port: res.clientPort };
    }
}
exports.Handler = Handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZUhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvc2VydmVycy9nYXRlL2hhbmRsZXIvZ2F0ZUhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxtQkFBeUIsR0FBZ0I7SUFDckMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBRkQsNEJBRUM7QUFFRCxNQUFhLE9BQU87SUFDaEIsWUFBb0IsR0FBZ0I7UUFBaEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBR0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFPLEVBQUMsT0FBdUI7UUFDNUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDakMsSUFBRyxDQUFDLEdBQUcsRUFBQztZQUNKLE9BQU8sRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLENBQUE7U0FDcEI7UUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhELElBQUcsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkMsT0FBTyxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsQ0FBQztTQUNyQjtRQUVELElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUV2QixPQUFPLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxDQUFBO0lBQ3ZELENBQUM7Q0FDSjtBQXZCRCwwQkF1QkMifQ==