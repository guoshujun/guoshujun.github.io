/*window.onload = function () {
	for(var i =0; i < 20; i++) {
		// 第一步创建萤火虫
		var oFireFly = document.createElement('img');
		oFireFly.src = 'images/1.jpg';
		oFireFly.style.width = '20px';
		oFireFly.style.height = '20px';
		oFireFly.style.position = 'absolute';
		document.body.appendChild(oFireFly);

		// 第二步 创建随机位置
		var
			iClientW = document.documentElement.clientWidth,
			iClientH = document.documentElement.clientHeight;
		oFireFly.style.left = Math.ceil(Math.random() * (iClientW - 20)) + 'px';
		oFireFly.style.top  = Math.ceil(Math.random() * (iClientH - 20)) + 'px';

		// 第三步动起来
		(function move(o) {
			var
				iPosX = Math.ceil(Math.random() * (iClientW - 20)),
				iPosY = Math.ceil(Math.random() * (iClientH - 20));

			bufferMove(o, {left: iPosX, top: iPosY}, function () {
				move(o);
			});
		})(oFireFly);
	}
}*/

window.onload = function () {
	// 定义一个构造函数，（用来创建萤火虫）
	function FireFly(src, width, height) {
		this.src    = src;
		this.width  = width;
		this.height = height;
	}
	// 创建萤火虫
	FireFly.prototype.create = function () {
		var oFireFly = document.createElement('img');
		oFireFly.src = this.src;
		oFireFly.style.position = 'absolute';
		oFireFly.style.width = this.width + 'px';
		oFireFly.style.height = this.height + 'px';
		oFireFly.style.left = this.iPosX + 'px';
		oFireFly.style.top  = this.iPosY + 'px';

		document.body.appendChild(oFireFly);

		this.fireFly = oFireFly;
	};

	// 计算萤火虫的位置
	FireFly.prototype.position = function () {
		var
			iClientW = document.documentElement.clientWidth,
			iClientH = document.documentElement.clientHeight;

		this.iPosX = Math.ceil(Math.random() * (iClientW - this.width));
		this.iPosY = Math.ceil(Math.random() * (iClientH - this.height));
	};

	// 让萤火虫动起来
	FireFly.prototype.move = function () {
		var oThis = this;
		bufferMove(this.fireFly, {
			left: this.iPosX,
			top: this.iPosY
		}, function () {
			oThis.position();
			oThis.move();
		});
	};

	// 初始化萤火虫
	FireFly.prototype.init = function () {
		this.position();
		this.create();
		this.position();
		this.move();
	};

	// 实例化构造函数
	for(var i =0; i < 100; i++) {
		var oFireFly = new FireFly('images/1.jpg', 20, 20);
		oFireFly.init();
	}
};