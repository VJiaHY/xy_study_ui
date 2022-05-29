<template>
  <div>
    <span class="btn-mobile-menu">
        <i class="btn-mobile-menu__icon"></i>
        <i class="btn-mobile-close__icon hidden"></i>
    </span>
        <div id="panel" class="panel-cover">
          <div class="panel-main">
            <div class="panel-inverted">
              <div class="panel-main__content">
                <div class="right_to_left">
                  <a href="#" title="" class="blog-button">
                    <div class="img"><img src="https://s3.bmp.ovh/imgs/2022/03/31/5a9550ee1d06049d.jpg" alt="img" class="profilepic"></div>
                    <div class="iUp">
                      <div class="info-back">
                        <h2>
                          Fighting
                        </h2>
                        <p>
                          2022 · 创造
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
<!--                <h1 class="panel-cover__title panel-title iUp">
                  <a href="#" title="Jia Home">Jia Hu Yue</a>
                </h1>
                <p class="panel-cover__subtitle panel-subtitle iUp">Code Create Life</p>
                <hr class="panel-cover__divider iUp" />
                <p id="description" class="panel-cover__description iUp">如何得与凉风约, 不共尘沙一并来!
                  <br/>
                  <strong>-「中牟道中」</strong>
                </p>
                <div class="navigation-wrapper iUp">
                  <div>
                    <nav class="cover-navigation cover-navigation&#45;&#45;primary">
                      <ul class="navigation">
                        <li class="navigation__item">
                          <a href="/" class="blog-button">首页</a>
                        </li>
                        <li class="navigation__item">
                          <a href="/" class="blog-button" target="_blank">博客</a>
                        </li>
                        <li class="navigation__item">
                          <a href="/" class="blog-button" target="_blank">简历</a>
                        </li>
                        <li class="navigation__item">
                          <a href="//" class="blog-button" target="_blank">关于</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>-->
              </div>
            </div>
<!--            <div class="panel-cover&#45;&#45;overlay cover-slate"></div>-->
          </div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {

  },
  methods: {
    getBingImgUrl(){

    }
  }
}
</script>

<style scoped>
.btn-mobile-menu {
  display: none;
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 35px;
  background: rgba(51, 51, 51, 0.98);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center
}

.btn-mobile-menu__icon{
  position: relative;
  top: 10px;
  color: #fff
}
.btn-mobile-close__icon {
  position: relative;
  top: 10px;
  color: #fff
}
.panel-cover {
  width: 100%;
  height: 100%;
  background-position: center center
}
#panel{
 background:url("http://www.lfppt.com/PPT_IMG/2021-10/17/202110170917255fb6e8908aff4f79b44ce325802f837ds.png") ;
  cente:center;
  no-repeat:#666;
 }
.panel-main {
  display: table;
  width: 100%;
  height: 100%
}
.panel-inverted {
  font-weight: 100;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4)
}
.right_to_left .img {
  -webkit-transform-origin: 0 50%;
  -moz-transform-origin: 0 50%;
  -ms-transform-origin: 0 50%;
  -o-transform-origin: 0 50%;
  transform-origin: 0 50%
}
.blog-button{

}
.profilepic {
  text-align: center;
  display: block;
  -webkit-box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5), 0px 2px 20px 3px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5), 0px 2px 20px 3px rgba(0, 0, 0, 0.25);
  border-radius: 300px;
  width: 128px;
  height: 128px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: #88acdb;
  -webkit-transition: all .2s ease-in;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  text-align: center
}
.iUp {
  opacity: 0;
  -webkit-transform: translate3d(0, 80px, 0);
  -moz-transform: translate3d(0, 80px, 0);
  -ms-transform: translate3d(0, 80px, 0);
  -o-transform: translate3d(0, 80px, 0);
  transform: translate3d(0, 80px, 0);
  -webkit-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
  -moz-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
  transition: all 2s cubic-bezier(0.19, 1, 0.22, 1)
}
.ih-item.circle.effect .info .info-back {
  opacity: 1;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background: #333
}

</style>