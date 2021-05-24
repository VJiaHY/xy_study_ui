<template>
    <baidu-map   :center="{lng:123.447523,lat:41.768679} "
                :zoom="zoom" style="height: 860px " :scroll-wheel-zoom="true">
        <bm-map-type style="" :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
     <!--   <bm-panorama></bm-panorama>-->
            <bm-marker  v-for="(college,index) in dataList" :key="index"
                    :position="{lng:college.lng,lat:college.lat}"
                    @click="infoWindowOpen1(college)"
                    :icon= redIcon
                    :offset="0"
                >
            </bm-marker>
        <bm-info-window :show="show" @close="infoWindowClose" :position="position" @open="infoWindowOpen">
            <span style="font-size: 24px;color: #1482f0">{{item.name}}</span>
        </bm-info-window>
    </baidu-map>
</template>
<script>
    import redPng from '../../../../public/industrychain-images/red.png';
    import orgPng from '../../../../public/industrychain-images/org.png';
    import bluePng from '../../../../public/industrychain-images/blue.png';
    import greenPng from '../../../../public/industrychain-images/green.png';
    import {collegeList} from '@/api/study/syCollege/syCollege';
    export default {
        name: "subwaymap",
        data() {
            return {
                position:{
                    lng: "",
                    lat: "",
                },


                zoom: 10,
                show: false,

                dataList:[],

                redIcon:{},
                orgIcon:{},
                blueIcon:{},
                greenIcon:{},


                item:{
                    name:"",
                },


            }
        },
        components: {

        },
        created() {


            this.redIcon  = {
                url: redPng,
                size:{
                    width: 50, height: 50
                },
            };
            this.orgIcon  = {
                url: orgPng,
                size:{
                    width: 50, height: 50
                },
            };
            this.blueIcon  = {
                url: bluePng,
                size:{
                    width: 50, height: 50
                },
            };
            this.greenIcon  = {
                url: greenPng,
                size:{
                    width: 50, height: 50
                },
            };
            this.collegeList()

        },
        methods :{
            addZoom (level) {
                this.zoom = level
            },
            infoWindowClose () {
                this.show = false
            },
            infoWindowOpen1 (item) {

                this.position.lng = item.lng
                this.position.lat = item.lat
                this.item.name = item.name

                this.show = true
            },
            infoWindowOpen(){
                this.show = true
            },

            collegeList(){
                collegeList().then((res) =>{
                    this.dataList = res.data
                })
            }





        }

    }

</script>
<style scoped>

    .map-control{
        top: 650px;
    }
</style>