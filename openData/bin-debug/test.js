var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var test = (function (_super) {
    __extends(test, _super);
    function test() {
        var _this = _super.call(this) || this;
        _this.arr = [];
        _this.btUpimgArr = [];
        _this.btDownimgArr = [];
        _this.skinName = "testSkin";
        return _this;
    }
    test.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    test.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
        this.InitBtnUrlArr();
        wx.onMessage(function (data) {
            console.log(data);
            wx.getFriendCloudStorage({
                keyList: ["score"],
                success: function (res) {
                    console.log(res.data);
                    _this.runGame(res.data);
                },
                fail: function (err) {
                    console.log(err);
                },
                complete: function () {
                }
            });
        });
    };
    test.prototype.runGame = function (data) {
        var _this = this;
        this.arr.splice(0, this.arr.length);
        data.forEach(function (value, index) {
            console.log(value);
            //arr为：any的数组
            //value["avatarUrl"]为微信头像图片地址
            _this.arr.push({ "img": value["avatarUrl"], "rightImg": "openDataContext/resource/rankingList/qt_47.png", "name": value["nickname"], "haungguanimg": "openDataContext/resource/rankingList/phb1.png", "bgimg": "openDataContext/resource/rankingList/tongyonk_bg6.png", "shouye": "openDataContext/resource/rankingList/shouye_3.png", "sexImg": "openDataContext/resource/rankingList/Helot_09.png" });
        });
        this.arr.forEach(function (value, index) {
            console.log(value);
        });
        this.list.dataProvider = new eui.ArrayCollection(this.arr);
        console.log(this.stage.height / this.stage.width);
        if (this.stage.height / this.stage.width >= 1.8) {
            console.log("啊啊啊");
            this.myrect.top = "17%";
            this.viewstack.top = "18%";
        }
        this.Init();
    };
    //初始化界面
    test.prototype.Init = function () {
        //初始化三个按钮状态
        for (var i = 0; i < this.btngroup.numChildren; i++) {
            var img = this.btngroup.getChildAt(i);
            if (i == this.viewstack.selectedIndex) {
                img.source = "openDataContext/resource/rankingList/" + this.btDownimgArr[i];
            }
            else {
                img.source = "openDataContext/resource/rankingList/" + this.btUpimgArr[i];
            }
            this.btngroup.getChildAt(i).addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick, this);
        }
        console.log(this.width, this.height);
        // this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.BtnClick,this)
        this.phb_bg.source = "openDataContext/resource/rankingList/tongyonk_bg.png";
        this.quanqiuphb_bg.source = "openDataContext/resource/rankingList/tiltle_qqphb.png";
    };
    test.prototype.InitBtnUrlArr = function () {
        this.btUpimgArr.push("bun_bg3_hs.png");
        this.btUpimgArr.push("bun_bg3_hs_cf.png");
        this.btUpimgArr.push("bun_bg3_hs_dj.png");
        this.btDownimgArr.push("bun_bg3_ls.png");
        this.btDownimgArr.push("bun_bg3_ls_cf.png");
        this.btDownimgArr.push("bun_bg3_ls_dj.png");
    };
    test.prototype.BtnClick = function (evt) {
        var targetImg = evt.target;
        var index = this.btngroup.getChildIndex(evt.target);
        for (var i = 0; i < this.btngroup.numChildren; i++) {
            var img = this.btngroup.getChildAt(i);
            if (i == index) {
                img.source = "openDataContext/resource/rankingList/" + this.btDownimgArr[index];
            }
            else {
                img.source = "openDataContext/resource/rankingList/" + this.btUpimgArr[i];
            }
        }
        this.viewstack.selectedIndex = index;
        this.phb_bg.verticalCenter;
    };
    return test;
}(eui.Component));
__reflect(test.prototype, "test", ["eui.UIComponent", "egret.DisplayObject"]);
