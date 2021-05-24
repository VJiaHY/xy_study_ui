<template>
<div>

    <el-form ref="form" :model="userForm" label-width="80px">
        <el-row>
            <el-col :span="5">
                <el-form-item label="用户名" >
                    <el-input v-model="userForm.userName" style="width: 75%"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="5">
                <el-form-item label="用户类型">
                   <!-- <el-input v-model="userForm.userName" ></el-input>-->
                    <el-select v-model="userForm.userType"  style="width: 75%" placeholder="请选择">
                        <el-option
                                v-for="item in userTypes"
                                :key="item.value"
                                :label="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>

            <el-col :span="5">
                <el-button type="primary" @click="searchUserList">搜索</el-button>
                <el-button type="danger" @click="cleanForm">清除</el-button>
            </el-col>
        </el-row>

    </el-form>

    <div>
        <el-button  icon="el-icon-upload2"
                    type="success"
                    @click="uploadExcel">
            数据导入
        </el-button>
    </div>
    <el-table height="570px"
            ref="singleTable"
              :highlight-current-row="true"
            :data="userDataList"
              empty-text="点击下载模板,导入数据"
            style="width: 100%">
        <el-table-column
                type="index"
              >
        </el-table-column>
        <el-table-column
                property="userName"
                label="用户名"
              >
        </el-table-column>
        <el-table-column
                property="possWord"
                label="密码"
               >
        </el-table-column>
        <el-table-column
                property="userType"
                label="用户类型">
        </el-table-column>

        <el-table-column
                property="userTel"
                label="联系方式">
        </el-table-column>
        <el-table-column
                property="userRemark"
                label="备注">
        </el-table-column>

        <el-table-column
                fixed="right"
                label="操作"
                width="120">
            <template slot-scope="scope">
                <el-button  type="text" size="small"
                           icon="el-icon-delete" @click="deleteHandle(scope.row.userId)">删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="block">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="current"
                :page-sizes="pageSizes"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalSize">
        </el-pagination>
    </div>



    <upload v-if="uploadVisible"  @refreshFather="refreshList"  ref="uploadMedia"></upload>
</div>
</template>
<script>
    import {getUserList,delObj} from '@/api/study/sysUser/sysUser';
    import Upload from '@/components/upload/index'
    export default {
        name: "improtExcel",
        data() {
            return {
                current:1,
                pageSize:10,
                totalSize:0,
                pageSizes:[10,100,1000],
                userDataList:[],



                userTypes: [{
                    value: '普通用户',
                },{
                    value: 'VIP用户',
                }],


                userForm: {
                    userName: null,
                    possWord: null,
                    userType: null,
                    userTel: null,
                    userRemark: null
                },


                uploadVisible:false,

                currentRow: null,
                tableNameAndExcelName:{
                    tableAddr:'/user/importExcel',
                    excelName:'用户表'
                }
            }

        },
        components: {
            Upload
        },
        created() {

            this.getUserList()
        },
        computed: {

        },
        methods:{
            //分页
            handleSizeChange(val){
                this.pageSize = val
                this.current = 1;
                this.getUserList()
            },
            handleCurrentChange(val){
                this.current = val;
                this.getUserList()
            },
            getUserList(){
                getUserList(Object.assign({
                    current: this.current,
                    size: this.pageSize
                }, this.userForm)).then((res) =>{
                    this.totalSize = res.data.total
                    this.userDataList = res.data.records
                })
            },
            searchUserList(){
                this.current = 1
                this.getUserList()
            },
            cleanForm(){
              this.userForm = {}
                this.getUserList()
            },





            deleteHandle(id){
                var thit = this
                this.$confirm('是否确认删除？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function () {
                    return delObj(id)
                }).then(() => {
                    this.$message.success('删除成功')
                    thit.getUserList()
                })
            },








            uploadExcel(){
                this.uploadVisible = true
                this.$nextTick(() => {
                    this.$refs.uploadMedia.init(this.tableNameAndExcelName)
                })
            },







            refreshList() {
                this.uploadVisible = false
                this. getUserList()
            },



        },
    }


</script>

<style scoped>

</style>