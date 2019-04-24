var egret = window.egret;
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/TestSkin/btnSkin.exml'] = window.btnSkin = (function (_super) {
	__extends(btnSkin, _super);
	function btnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 130;
		this.width = 150;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = btnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return btnSkin;
})(eui.Skin);generateEUI.paths['resource/TestSkin/nima.exml'] = window.nima = (function (_super) {
	__extends(nima, _super);
	function nima() {
		_super.call(this);
		this.skinParts = ["touxiangmask"];
		
		this.height = 140;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Rect1_i(),this._Image2_i(),this.touxiangmask_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.bgimg"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.img"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.haungguanimg"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.rightImg"],[0],this._Image4,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shouye"],[0],this._Image5,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.sexImg"],[0],this._Image6,"source");
	}
	var _proto = nima.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.size = 30;
		t.textAlign = "left";
		t.textColor = 0xf9cc07;
		t.verticalAlign = "middle";
		t.width = 189.67;
		t.x = 253;
		t.y = 13;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xffffff;
		t.height = 90;
		t.verticalCenter = 0;
		t.width = 90;
		t.x = 83;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.mask = this.touxiangmask;
		t.verticalCenter = 0.5;
		t.width = 85;
		t.x = 85.5;
		return t;
	};
	_proto.touxiangmask_i = function () {
		var t = new eui.Rect();
		this.touxiangmask = t;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 85;
		t.verticalCenter = 0.5;
		t.width = 85;
		t.x = 85.5;
		if(this._Image2)
		{
			this._Image2.mask = this.touxiangmask;
		}
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 16;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.height = 80;
		t.right = "2%";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.height = 48;
		t.width = 40;
		t.x = 203;
		t.y = 61;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.height = 37;
		t.width = 35;
		t.x = 205;
		t.y = 13;
		return t;
	};
	return nima;
})(eui.Skin);generateEUI.paths['resource/TestSkin/test.exml'] = window.testSkin = (function (_super) {
	__extends(testSkin, _super);
	function testSkin() {
		_super.call(this);
		this.skinParts = ["phb_bg","quanqiuphb_bg","btngroup","myrect","list","scroll","list0","scroll0","list1","scroll1","viewstack"];
		
		this.height = 1333;
		this.width = 750;
		this.elementsContent = [this._Group4_i()];
	}
	var _proto = testSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.phb_bg_i(),this.quanqiuphb_bg_i(),this.btngroup_i(),this.myrect_i(),this.viewstack_i()];
		return t;
	};
	_proto.phb_bg_i = function () {
		var t = new eui.Image();
		this.phb_bg = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.quanqiuphb_bg_i = function () {
		var t = new eui.Image();
		this.quanqiuphb_bg = t;
		t.height = 90;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = "3%";
		t.visible = false;
		t.width = 362;
		return t;
	};
	_proto.btngroup_i = function () {
		var t = new eui.Group();
		this.btngroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = "13%";
		t.touchEnabled = false;
		t.width = 462;
		t.x = 84.12;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 74;
		t.touchEnabled = true;
		t.width = 154;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 74;
		t.touchEnabled = true;
		t.width = 154;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 74;
		t.touchEnabled = true;
		t.width = 154;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.myrect_i = function () {
		var t = new eui.Rect();
		this.myrect = t;
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillColor = 0xc3f3f4;
		t.percentHeight = 71;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = "18%";
		t.width = 600;
		t.x = 28;
		return t;
	};
	_proto.viewstack_i = function () {
		var t = new eui.ViewStack();
		this.viewstack = t;
		t.percentHeight = 68;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.selectedIndex = 0;
		t.top = "19%";
		t.width = 650;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "Group";
		t.percentWidth = 100;
		t.elementsContent = [this.scroll_i()];
		return t;
	};
	_proto.scroll_i = function () {
		var t = new eui.Scroller();
		this.scroll = t;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 650;
		t.x = 0;
		t.y = 0;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetY = 0;
		t.height = 388;
		t.itemRendererSkinName = nima;
		t.y = -1.33;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "Group";
		t.percentWidth = 100;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this.scroll0_i()];
		return t;
	};
	_proto.scroll0_i = function () {
		var t = new eui.Scroller();
		this.scroll0 = t;
		t.anchorOffsetY = 0;
		t.height = 290.94;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 0;
		t.y = -0.0999999999999659;
		t.viewport = this.list0_i();
		return t;
	};
	_proto.list0_i = function () {
		var t = new eui.List();
		this.list0 = t;
		t.anchorOffsetY = 0;
		t.height = 388;
		t.itemRendererSkinName = nima;
		t.y = -1.33;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "Group";
		t.percentWidth = 100;
		t.x = 20;
		t.y = 20;
		t.elementsContent = [this.scroll1_i()];
		return t;
	};
	_proto.scroll1_i = function () {
		var t = new eui.Scroller();
		this.scroll1 = t;
		t.anchorOffsetY = 0;
		t.height = 290.94;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 0;
		t.y = -0.0999999999999659;
		t.viewport = this.list1_i();
		return t;
	};
	_proto.list1_i = function () {
		var t = new eui.List();
		this.list1 = t;
		t.anchorOffsetY = 0;
		t.height = 388;
		t.itemRendererSkinName = nima;
		t.y = -1.33;
		t.layout = this._VerticalLayout3_i();
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	return testSkin;
})(eui.Skin);